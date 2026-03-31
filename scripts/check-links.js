import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import linkCheck from 'link-check';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(__dirname, '../_site');
const pubFile = path.join(siteDir, 'publications/index.html');

if (!fs.existsSync(pubFile)) {
  console.error(`File not found: ${pubFile}. Run build first.`);
  process.exit(1);
}

const html = fs.readFileSync(pubFile, 'utf-8');
const dom = new JSDOM(html);
const links = Array.from(dom.window.document.querySelectorAll('a'))
  .map(a => a.href)
  .filter(href => href.startsWith('http') && !href.includes('doi.org'));

console.log(`Checking ${links.length} external links in ${pubFile}...`);

let checkedCount = 0;
let failedCount = 0;

links.forEach(url => {
  linkCheck(url, (err, result) => {
    checkedCount++;
    if (err) {
      console.error(`Error checking ${url}:`, err);
      failedCount++;
    } else if (result.status === 'dead') {
      console.error(`Link is dead: ${url} (${result.statusCode})`);
      failedCount++;
    } else {
      // console.log(`Link is alive: ${url}`);
    }

    if (checkedCount === links.length) {
      console.log(`Finished checking links. Total: ${checkedCount}, Failed: ${failedCount}`);
      if (failedCount > 0) {
        process.exit(1);
      } else {
        process.exit(0);
      }
    }
  });
});
