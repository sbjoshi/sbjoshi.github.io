import test from 'ava';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(__dirname, '../src/_data/publications.yaml');

test('parsed publications have rich data', t => {
  if (!fs.existsSync(dataPath)) {
    t.fail('src/_data/publications.yaml does not exist');
    return;
  }
  
  const publications = yaml.load(fs.readFileSync(dataPath, 'utf-8'));
  
  t.true(Array.isArray(publications), 'publications should be an array');
  t.true(publications.length > 0, 'publications should not be empty');
  
  const firstPub = publications[0];
  t.truthy(firstPub.links, 'first publication should have links');
  t.truthy(firstPub.files, 'first publication should have files');
  
  t.truthy(firstPub.links.paper, 'first publication should have a paper link');
  t.is(firstPub.files.pdf, '/assets/publications/smith2024.pdf', 'first publication should have correct pdf path');
});
