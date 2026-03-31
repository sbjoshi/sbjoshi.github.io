import test from 'ava';
import { bibtexToYaml } from '../scripts/migrate-pubs.js';

test('bibtexToYaml converts basic bibtex to yaml structure', t => {
  const bibtex = `@article{smith2024,
    author = {Smith, John and Doe, Jane},
    title = {Study on SSGs},
    journal = {Journal of Web},
    year = {2024},
    doi = {10.1234/jwe.2024.123}
  }`;
  
  const expected = [{
    id: 'smith2024',
    type: 'article',
    title: 'Study on SSGs',
    author: 'Smith, John and Doe, Jane',
    year: '2024',
    venue: 'Journal of Web',
    journal: 'Journal of Web',
    doi: '10.1234/jwe.2024.123',
    links: {},
    files: {}
  }];
  
  const result = bibtexToYaml(bibtex);
  t.deepEqual(result, expected);
});

test('bibtexToYaml handles inproceedings', t => {
  const bibtex = `@inproceedings{doe2023,
    author = {Doe, Jane},
    title = {Optimizing 11ty},
    booktitle = {ICWP},
    year = {2023}
  }`;
  
  const expected = [{
    id: 'doe2023',
    type: 'inproceedings',
    title: 'Optimizing 11ty',
    author: 'Doe, Jane',
    year: '2023',
    venue: 'ICWP',
    booktitle: 'ICWP',
    links: {},
    files: {}
  }];
  
  const result = bibtexToYaml(bibtex);
  t.deepEqual(result, expected);
});
