/**
 * @fileoverview Eleventy configuration file.
 */

import yaml from 'js-yaml';
import { DateTime } from 'luxon';

/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {import("@11ty/eleventy").UserConfig}
 */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  // Add YAML support for data files
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // Date filter
  eleventyConfig.addFilter('date', (dateObj, format = 'yyyy') => {
    let date;
    if (dateObj === 'now') {
      date = DateTime.now();
    } else if (typeof dateObj === 'string') {
      date = DateTime.fromISO(dateObj);
    } else if (dateObj instanceof Date) {
      date = DateTime.fromJSDate(dateObj);
    } else {
      date = DateTime.fromJSDate(new Date(dateObj));
    }
    return date.toFormat(format);
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
