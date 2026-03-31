/**
 * @fileoverview Eleventy configuration file.
 */

/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {import("@11ty/eleventy").UserConfig}
 */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

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
