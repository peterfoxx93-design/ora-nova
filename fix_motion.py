import os
import glob

base = "/data/data/com.termux/files/home/ora-nova-vite/src"
count = 0
for root, dirs, files in os.walk(base):
    for f in files:
        if f.endswith(".tsx"):
            path = os.path.join(root, f)
            with open(path) as fh:
                content = fh.read()
            new_content = content
            if 'from "motion"' in content:
                new_content = content.replace('from "motion"', 'from "framer-motion"')
                count += 1
            if new_content != content:
                with open(path, "w") as fh:
                    fh.write(new_content)
                print(f"Fixed: {path}")

print(f"\nDone. Fixed {count} files.")
