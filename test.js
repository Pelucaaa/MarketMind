const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const scripts = content.match(/<script>([\s\S]*?)<\/script>/gi);
if (scripts) {
  const js = scripts.map(s => s.replace(/<\/?script>/gi, '')).join('\n');
  fs.writeFileSync('temp.js', js);
}
