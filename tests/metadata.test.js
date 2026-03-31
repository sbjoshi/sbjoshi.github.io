import test from 'ava';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const metadataPath = path.resolve(__dirname, '../src/_data/metadata.json');

test('metadata has required fields', t => {
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  t.truthy(metadata.title, 'metadata should have a title');
  t.truthy(metadata.url, 'metadata should have a url');
  t.truthy(metadata.author, 'metadata should have an author');
});

test('metadata has publication URL', t => {
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  t.truthy(metadata.publication_url, 'metadata should have a publication_url');
});
