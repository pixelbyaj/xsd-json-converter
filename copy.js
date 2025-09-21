// copy.js
import { cp } from "fs/promises";
import { resolve } from "path";

(async function main() {
  try {
    const src = resolve("tools");
    const dest = resolve("dist/tools");

    await cp(src, dest, {
      recursive: true,
      force: true, // overwrite existing files
    });

    console.log(`✅ Copied from ${src} → ${dest}`);
  } catch (err) {
    console.error("❌ Copy failed:", err);
    process.exit(1);
  }
})();


//await copy("tools", "dist/tools");