import os
import re

base_dir = os.getcwd()
pages_dir = os.path.join(base_dir, "pages")
assets_dir = os.path.join(base_dir, "assets")

print("=== STARTING COMPREHENSIVE VALIDATION ===")

# 1. Check all 14 pages
missing_pages = []
for w in range(14):
    p = os.path.join(pages_dir, f"week-{w}.html")
    if not os.path.exists(p):
        missing_pages.append(f"week-{w}.html")
    else:
        sz = os.path.getsize(p)
        print(f"Page week-{w}.html OK ({sz:,} bytes)")

if missing_pages:
    print(f"FAILED: Missing pages: {missing_pages}")
else:
    print("ALL 14 WEEK PAGES PRESENT!")

# 2. Check all image references in week pages
img_errors = 0
total_imgs = 0
for w in range(14):
    p = os.path.join(pages_dir, f"week-{w}.html")
    if not os.path.exists(p):
        continue
    with open(p, "r", encoding="utf-8") as f:
        html = f.read()
    
    # find all src="../assets/images/..."
    imgs = re.findall(r'src=["\']\.\./assets/images/([^"\']+)["\']', html)
    for img_rel in imgs:
        total_imgs += 1
        full_path = os.path.join(assets_dir, "images", img_rel)
        if not os.path.exists(full_path):
            print(f"ERROR: Missing image referenced in week-{w}.html: assets/images/{img_rel}")
            img_errors += 1

print(f"Verified {total_imgs} image references in week pages. Errors: {img_errors}")

# 3. Check all download references
download_errors = 0
total_downloads = 0
for w in range(14):
    p = os.path.join(pages_dir, f"week-{w}.html")
    if not os.path.exists(p):
        continue
    with open(p, "r", encoding="utf-8") as f:
        html = f.read()
    
    dls = re.findall(r'href=["\']\.\./assets/downloads/([^"\']+)["\']', html)
    for dl in dls:
        total_downloads += 1
        full_path = os.path.join(assets_dir, "downloads", dl)
        if not os.path.exists(full_path):
            print(f"ERROR: Missing download in week-{w}.html: assets/downloads/{dl}")
            download_errors += 1

# Check downloads in index.html
with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f:
    index_html = f.read()

index_dls = re.findall(r'href=["\']assets/downloads/([^"\']+)["\']', index_html)
for dl in index_dls:
    total_downloads += 1
    full_path = os.path.join(assets_dir, "downloads", dl)
    if not os.path.exists(full_path):
        print(f"ERROR: Missing download in index.html: assets/downloads/{dl}")
        download_errors += 1

index_docs = re.findall(r'href=["\']assets/documents/([^"\']+)["\']', index_html)
for doc in index_docs:
    total_downloads += 1
    full_path = os.path.join(assets_dir, "documents", doc)
    if not os.path.exists(full_path):
        print(f"ERROR: Missing document in index.html: assets/documents/{doc}")
        download_errors += 1

print(f"Verified {total_downloads} download/document links. Errors: {download_errors}")

# 4. Check roll number consistency
incorrect_rolls = []
for fname in os.listdir(pages_dir):
    if fname.endswith(".html"):
        with open(os.path.join(pages_dir, fname), "r", encoding="utf-8") as f:
            c = f.read()
            if "24EU08137" in c:
                incorrect_rolls.append((fname, "24EU08137"))
            if "24EU08161" in c:
                incorrect_rolls.append((fname, "24EU08161"))

if incorrect_rolls:
    print(f"WARNING: Found old roll numbers in pages: {incorrect_rolls}")
else:
    print("ALL PAGES STRICTLY USE ROLL NUMBER 24EU08145!")

print("=== VALIDATION COMPLETE ===")

