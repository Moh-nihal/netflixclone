import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const targetDirs = [
  'public/images',
  'public/images2',
  'public/images3',
  'public/images4',
];

const isJpeg = (name) => /\.(jpe?g)$/i.test(name);

const convertDir = async (relativeDir) => {
  const dirPath = path.join(projectRoot, relativeDir);
  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && isJpeg(entry.name));

  if (files.length === 0) {
    return { dir: relativeDir, converted: 0 };
  }

  let converted = 0;

  await Promise.all(
    files.map(async (file) => {
      const inputPath = path.join(dirPath, file.name);
      const outputPath = inputPath.replace(/\.(jpe?g)$/i, '.webp');

      await sharp(inputPath)
        .webp({ quality: 70 })
        .toFile(outputPath);

      converted += 1;
    }),
  );

  return { dir: relativeDir, converted };
};

const run = async () => {
  const results = await Promise.all(targetDirs.map(convertDir));
  const total = results.reduce((sum, item) => sum + item.converted, 0);

  results.forEach((result) => {
    console.log(`${result.dir}: ${result.converted} converted`);
  });
  console.log(`Total converted: ${total}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
