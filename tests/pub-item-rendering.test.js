import test from 'ava';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const macrosPath = path.resolve(__dirname, '../src/_includes');

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(macrosPath));
env.addFilter('url', (val) => val);

test('pubItem macro renders rich links and icons', t => {
  const pub = {
    id: 'smith2024',
    title: 'Study on SSGs',
    author: 'Smith, John',
    year: '2024',
    venue: 'JWE',
    links: {
      paper: 'https://example.com/paper.pdf',
      slides: 'https://example.com/slides.pdf'
    },
    files: {
      pdf: '/assets/pubs/smith2024.pdf'
    }
  };
  
  const template = `
    {% from "macros/pub-item.njk" import pubItem %}
    {{ pubItem(pub) }}
  `;
  
  const rendered = env.renderString(template, { pub });
  
  // Existing fields
  t.true(rendered.includes('smith2024'), 'should include ID');
  t.true(rendered.includes('Study on SSGs'), 'should include title');
  
  // New rich links (expected to fail)
  t.true(rendered.includes('href="https://example.com/paper.pdf"'), 'should include paper link');
  t.true(rendered.includes('href="https://example.com/slides.pdf"'), 'should include slides link');
  t.true(rendered.includes('#icon-paper'), 'should include paper icon');
  t.true(rendered.includes('#icon-slides'), 'should include slides icon');
});
