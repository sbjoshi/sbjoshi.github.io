import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bibtexParse from 'bibtex-parse-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default () => {
  const bibPath = path.resolve(__dirname, '../data/publications.bib');
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  const parsed = bibtexParse.toJSON(bibContent);
  
  return parsed.map(entry => ({
    id: entry.citationKey,
    type: entry.entryType,
    title: entry.entryTags.title,
    author: entry.entryTags.author,
    year: entry.entryTags.year,
    journal: entry.entryTags.journal,
    booktitle: entry.entryTags.booktitle,
    note: entry.entryTags.note,
    doi: entry.entryTags.doi,
    pages: entry.entryTags.pages,
    location: entry.entryTags.location
  }));
};
