import test from 'ava';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bibtexParse from 'bibtex-parse-js';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bibPath = path.resolve(__dirname, '../src/data/publications.bib');
const yamlPath = path.resolve(__dirname, '../src/_data/publications.yaml');

test('data integrity: entry count matches', t => {
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  const bibParsed = bibtexParse.toJSON(bibContent);
  
  const yamlContent = fs.readFileSync(yamlPath, 'utf-8');
  const yamlParsed = yaml.load(yamlContent);
  
  t.true(yamlParsed.length <= bibParsed.length, 'YAML entry count should be less than or equal to BibTeX entry count');
  t.true(yamlParsed.length > 0, 'YAML should not be empty');
});

test('data integrity: IDs are preserved', t => {
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  const bibParsed = bibtexParse.toJSON(bibContent);
  const bibIds = new Set(bibParsed.map(e => e.citationKey));
  
  const yamlContent = fs.readFileSync(yamlPath, 'utf-8');
  const yamlParsed = yaml.load(yamlContent);
  
  for (const entry of yamlParsed) {
    t.true(bibIds.has(entry.id), `ID ${entry.id} in YAML should match an ID in BibTeX`);
  }
});
