import fs from 'fs';
import path from 'path';
import bibtexParse from 'bibtex-parse-js';
import yaml from 'js-yaml';

/**
 * Converts BibTeX string to an array of objects matching the rich publication schema.
 * @param {string} bibtex
 * @returns {Array<Object>}
 */
export function bibtexToYaml(bibtex) {
  const parsed = bibtexParse.toJSON(bibtex);
  
  return parsed.map(entry => {
    const tags = entry.entryTags;
    const venue = tags.journal || tags.booktitle || '';
    
    const entryObj = {
      id: entry.citationKey,
      type: entry.entryType.toLowerCase(),
      title: tags.title,
      author: tags.author,
      year: tags.year,
      venue: venue,
      links: {},
      files: {}
    };

    if (tags.journal) entryObj.journal = tags.journal;
    if (tags.booktitle) entryObj.booktitle = tags.booktitle;
    if (tags.doi) entryObj.doi = tags.doi;
    if (tags.note) entryObj.note = tags.note;
    if (tags.abstract) entryObj.abstract = tags.abstract;

    return entryObj;
  });
}

export function migrate() {
  const bibPath = path.resolve(process.cwd(), 'src/data/publications.bib');
  const yamlPath = path.resolve(process.cwd(), 'src/_data/publications.yaml');
  
  if (!fs.existsSync(bibPath)) {
    console.error(`Source file not found: ${bibPath}`);
    return;
  }
  
  console.log(`Reading BibTeX from ${bibPath}...`);
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  const publications = bibtexToYaml(bibContent);
  
  console.log(`Writing YAML to ${yamlPath}...`);
  fs.writeFileSync(yamlPath, yaml.dump(publications), 'utf-8');
  console.log('Migration complete!');
}

// Run if called directly
if (import.meta.url === `file://${path.resolve(process.argv[1])}`) {
  migrate();
}
