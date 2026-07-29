from pathlib import Path
import json, re, zipfile
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
QUESTIONS = ROOT / "questions"
VALID_IMAGES = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"}
VALID_TEXT = {".txt", ".docx"}


def display_name(path: Path) -> str:
    return " ".join(path.stem.replace("_", " ").split())


def scan_images(folder_name: str):
    folder = ASSETS / folder_name
    folder.mkdir(parents=True, exist_ok=True)
    return [
        {"name": display_name(path), "img": f"assets/{folder_name}/{path.name}"}
        for path in sorted(folder.iterdir(), key=lambda p: p.name.casefold())
        if path.is_file() and path.suffix.lower() in VALID_IMAGES
    ]


def read_docx(path: Path) -> str:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    lines = []
    for paragraph in root.findall(".//w:p", ns):
        text = "".join((node.text or "") for node in paragraph.findall(".//w:t", ns))
        lines.append(text)
    return "\n".join(lines)


def read_text(path: Path) -> str:
    if path.suffix.lower() == ".docx":
        return read_docx(path)
    return path.read_text(encoding="utf-8-sig")


def parse_questions(text: str):
    aliases = {
        "ΕΡΩΤΗΣΗ": "question", "QUESTION": "question",
        "ΣΩΣΤΗ": "correct", "ΣΩΣΤΗ ΑΠΑΝΤΗΣΗ": "correct", "CORRECT": "correct",
        "ΛΑΘΟΣ1": "wrong1", "ΛΑΘΟΣ 1": "wrong1", "WRONG1": "wrong1",
        "ΛΑΘΟΣ2": "wrong2", "ΛΑΘΟΣ 2": "wrong2", "WRONG2": "wrong2",
        "ΛΑΘΟΣ3": "wrong3", "ΛΑΘΟΣ 3": "wrong3", "WRONG3": "wrong3",
    }
    rows, current = [], {}
    for raw in text.replace("\r\n", "\n").split("\n") + [""]:
        line = raw.strip()
        if not line:
            if all(k in current for k in ("question", "correct", "wrong1", "wrong2", "wrong3")):
                rows.append({"question": current["question"], "correct": current["correct"], "wrong": [current["wrong1"], current["wrong2"], current["wrong3"]]})
            current = {}
            continue
        match = re.match(r"^([^:：]+)[:：]\s*(.*)$", line)
        if match:
            key = aliases.get(match.group(1).strip().upper())
            if key:
                current[key] = match.group(2).strip()
    return rows


def scan_questions(folder_name: str):
    folder = QUESTIONS / folder_name
    folder.mkdir(parents=True, exist_ok=True)
    result = []
    for path in sorted(folder.iterdir(), key=lambda p: p.name.casefold()):
        if path.is_file() and path.suffix.lower() in VALID_TEXT:
            try:
                result.extend(parse_questions(read_text(path)))
            except Exception as exc:
                print(f"Παράλειψη {path.name}: {exc}")
    return result

library = {
    "players": scan_images("players"),
    "teams": scan_images("teams"),
    "questions": {
        "footballers": scan_questions("playerid") + scan_questions("footballers"),
        "history": scan_questions("history"),
        "audience": scan_questions("audience"),
    },
}
(ASSETS / "library.json").write_text(json.dumps(library, ensure_ascii=False, indent=2), encoding="utf-8")
q = library["questions"]
print(f"Έτοιμο: {len(library['players'])} ποδοσφαιριστές, {len(library['teams'])} σήματα, {sum(map(len,q.values()))} ερωτήσεις.")
input("Πάτησε Enter για κλείσιμο...")
