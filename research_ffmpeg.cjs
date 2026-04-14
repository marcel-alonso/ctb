const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');

console.log('--- FFmpeg Version ---');
try {
  const version = execSync(`"${ffmpeg}" -version`).toString();
  console.log(version);
} catch (e) {
  console.error('Failed to get FFmpeg version', e.message);
}

console.log('\n--- WebP File Info ---');
const filePath = 'docs/showcase/live-preview.webp';
if (fs.existsSync(filePath)) {
  const stats = fs.statSync(filePath);
  console.log(`File: ${filePath}`);
  console.log(`Size: ${stats.size} bytes`);
  
  try {
    // Try to see what ffmpeg thinks of it
    const output = execSync(`"${ffmpeg}" -i "${filePath}" 2>&1`).toString();
    console.log(output);
  } catch (e) {
    // ffmpeg -i returns non-zero error code because no output is specified
    console.log(e.stdout ? e.stdout.toString() : e.message);
    console.log(e.stderr ? e.stderr.toString() : '');
  }
} else {
  console.error(`File not found: ${filePath}`);
}
