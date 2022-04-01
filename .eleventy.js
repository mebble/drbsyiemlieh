require('dotenv').config();

const parser = require('node-html-parser');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css/": "css/",
        "src/icons": "icons/",
        "src/favicons/*": ".",
    });
    eleventyConfig.addTransform('track-link-clicks', (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            const root = parser.parse(content);
            root.querySelectorAll('a').forEach(a => {
                const href = a.getAttribute('href');
                a.setAttribute('onclick', `getOutboundLink('${href}'); return false;`);
            })
            return root.toString();
        }
    });
};
