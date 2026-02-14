const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/elias/AndroidStudioProjects/HabitTracker/screenshots/play-store';
const targetDir = path.join(__dirname, '..', 'public', 'images', 'screenshots');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Mapping of source files to target names
const fileMapping = {
  '01_home.png': 'home.webp',
  '02_create_habit.png': 'create-habit.webp',
  '03_habit_details.png': 'habit-details.webp',
  '04_stats.png': 'stats.webp',
  '05_settings.png': 'settings.webp',
  '06_habits_list.png': 'habits-list.webp',
  '07_achievements.png': 'achievements.webp',
};

async function optimizeScreenshots() {
  console.log('Starting screenshot optimization...\n');

  for (const [sourceFile, targetFile] of Object.entries(fileMapping)) {
    const sourcePath = path.join(sourceDir, sourceFile);
    const targetPath = path.join(targetDir, targetFile);

    try {
      await sharp(sourcePath)
        .webp({ quality: 80 })
        .toFile(targetPath);

      const sourceStats = fs.statSync(sourcePath);
      const targetStats = fs.statSync(targetPath);
      const savings = ((1 - targetStats.size / sourceStats.size) * 100).toFixed(1);

      console.log(`✓ ${sourceFile} → ${targetFile}`);
      console.log(`  ${(sourceStats.size / 1024).toFixed(1)}KB → ${(targetStats.size / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`✗ Failed to process ${sourceFile}:`, error.message);
    }
  }

  console.log('Screenshot optimization complete!');
}

optimizeScreenshots().catch(console.error);
