/**
 * @fileoverview Eleventy configuration file.
 */

import yaml from 'js-yaml';
import { DateTime } from 'luxon';
import markdownIt from 'markdown-it';
import markdownItMathjax3 from 'markdown-it-mathjax3';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {import("@11ty/eleventy").UserConfig}
 */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPlugin(syntaxHighlight);

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItMathjax3);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter('markdown', (content) => {
    return md.render(content);
  });

  // Add YAML support for data files
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // Date filter
  eleventyConfig.addFilter('date', (dateObj, format = 'yyyy') => {
    let date;
    if (!dateObj) return '';
    if (dateObj === 'now') {
      date = DateTime.now();
    } else if (typeof dateObj === 'string') {
      date = DateTime.fromISO(dateObj);
    } else if (dateObj instanceof Date) {
      date = DateTime.fromJSDate(dateObj);
    } else {
      // Try to parse it if it's something else
      date = DateTime.fromJSDate(new Date(dateObj));
    }
    
    if (!date.isValid) {
      return dateObj;
    }

    return date.toFormat(format);
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/*.md');
  });

  return {
    pathPrefix: "/",
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
