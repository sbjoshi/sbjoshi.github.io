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
  
  t.is(yamlParsed.length, bibParsed.length, 'YAML entry count should match BibTeX entry count');
});

test('data integrity: IDs are preserved', t => {
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  const bibParsed = bibtexParse.toJSON(bibContent);
  const bibIds = bibParsed.map(e => e.citationKey).sort();
  
  const yamlContent = fs.readFileSync(yamlPath, 'utf-8');
  const yamlParsed = yaml.load(yamlContent);
  const yamlIds = yamlParsed.map(e => e.id).sort();
  
  t.deepEqual(yamlIds, bibIds, 'IDs in YAML should match IDs in BibTeX');
});
