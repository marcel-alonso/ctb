const ffmpegPath = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');

const convert = (input, output) => {
  console.log(`Converting ${input} to ${output}...`);
  try {
    // -y: overwrite output
    // -c:v libx264: use h264 codec
    // -pix_fmt yuv420p: Ensure compatibility with all players
    // -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2": Ensure dimensions are even (required for h264)
    execSync(`"${ffmpegPath}" -y -i "${input}" -c:v libx264 -pix_fmt yuv420p -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" "${output}"`, { stdio: 'inherit' });
    console.log(`✅ Converted: ${output}`);
  } catch (error) {
    console.error(`❌ Error converting ${input}:`, error.message);
  }
};

const showcaseDir = path.join(__dirname, 'docs', 'showcase');

convert(
  path.join(showcaseDir, 'live-preview.webp'),
  path.join(showcaseDir, 'live-preview.mp4')
);

convert(
  path.join(showcaseDir, 'mobile-presentation-916.webp'),
  path.join(showcaseDir, 'mobile-presentation-916.mp4')
);
