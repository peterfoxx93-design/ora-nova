import os
import glob

base = "/data/data/com.termux/files/home/ora-nova-vite/src"
count = 0
for root, dirs, files in os.walk(base):
    for f in files:
        if f.endswith(".tsx"):
            path = os.path.join(root, f)
            with open(path, "r") as fh:
                content = fh.read()
            if 'next/link' in content:
                content = content.replace('import Link from "next/link"', 'import { Link } from "react-router-dom"')
                with open(path, "w") as fh:
                    fh.write(content)
                count += 1
                print(f"  Fixed: {path}")

print(f"\nDone. Fixed {count} files.")
