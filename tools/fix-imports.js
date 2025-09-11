const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  const orig = fs.readFileSync(filePath, 'utf8');
  // Remove trailing @<semver> inside quoted module specifiers
  const replaced = orig
    // import/export and plain strings
    .replace(/(from\s+['"])([^'"\n]+?)@\d+\.\d+\.\d+(-[\w.-]+)?(['"])/g, '$1$2$4')
    .replace(/(import\s*\(\s*['"])([^'"\n]+?)@\d+\.\d+\.\d+(-[\w.-]+)?(['"])\s*\)/g, '$1$2$4)')
    .replace(/(require\(\s*['"])([^'"\n]+?)@\d+\.\d+\.\d+(-[\w.-]+)?(['"])\s*\)/g, '$1$2$4)')
    // Fallback: any quoted string ending with @<semver>
    .replace(/(['"])([^'"\n]+?)@\d+\.\d+\.\d+(-[\w.-]+)?(['"])/g, '$1$2$4');
  if (replaced !== orig) {
    fs.writeFileSync(filePath, replaced);
    console.log('Fixed', path.relative(process.cwd(), filePath));
    return true;
  }
  return false;
}

function walk(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += walk(p);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      if (replaceInFile(p)) count++;
    }
  }
  return count;
}

const target = path.resolve(process.cwd(), 'src');
if (!fs.existsSync(target)) {
  console.error('src directory not found at', target);
  process.exit(1);
}
const changed = walk(target);
console.log('Done. Files modified:', changed);