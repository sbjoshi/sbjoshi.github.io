import test from 'ava';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Validator } from 'jsonschema';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.resolve(__dirname, '../schemas/publications.schema.json');
const dataPath = path.resolve(__dirname, '../src/_data/publications.yaml');

test('publications.yaml adheres to schema', t => {
  if (!fs.existsSync(dataPath)) {
    t.fail('src/_data/publications.yaml does not exist');
    return;
  }
  
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
  const data = yaml.load(fs.readFileSync(dataPath, 'utf-8'));
  
  const v = new Validator();
  const result = v.validate(data, schema);
  
  t.true(result.valid, result.errors.map(e => e.stack).join(', '));
});
