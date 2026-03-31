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
  
  const pubWithPdf = publications.find(p => p.id === 'spin2021-anomaly-detection');
  t.truthy(pubWithPdf, 'should find spin2021-anomaly-detection');
  t.truthy(pubWithPdf.files, 'publication should have files');
  t.is(pubWithPdf.files.pdf, '/assets/publications/p4anomaly-spin-2021.pdf', 'should have correct pdf path');

  const llov = publications.find(p => p.id === 'bora-taco2020');
  t.truthy(llov, 'should find bora-taco2020');
  t.truthy(llov.links.video, 'should have video link');
  t.truthy(llov.abstract, 'should have abstract');
});
