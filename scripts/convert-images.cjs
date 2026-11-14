const sharp = require("sharp");
const path = require("node:path");
const fs = require("node:fs");

const imageDir = path.join(process.cwd(), "public", "images");

const files = [
  "aurelia.png",
  "auren.png",
  "ember.png",
  "everwell.png",
  "havenstone.png",
  "lexora.png",
];

async function main() {
  for (const file of files) {
    const input = path.join(imageDir, file);
    const output = path.join(imageDir, `${path.parse(file).name}.webp`);

    await sharp(input).webp({ quality: 82, effort: 5 }).toFile(output);

    const originalSize = fs.statSync(input).size;
    const webpSize = fs.statSync(output).size;
    const saved = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(
      `${file} -> ${path.basename(output)} | ` +
        `${(originalSize / 1024).toFixed(1)} KB -> ` +
        `${(webpSize / 1024).toFixed(1)} KB | Saved ${saved}%`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
