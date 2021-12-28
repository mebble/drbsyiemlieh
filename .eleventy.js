require('dotenv').config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css/": "css/",
        "src/icons": "icons/",
    });
};
