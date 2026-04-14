import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../public/assets/images');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const outName = file.replace(ext, '.webp');
        const outPath = path.join(directoryPath, outName);
        
        sharp(filePath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outPath)
            .then(info => {
               console.log(`Converted ${file} to ${outName}`);
               // we do not delete original since we may want to keep og-image, but we need to delete later so we are pure webp
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
  });
});
