const rp = require("request-promise");
const cheerio = require("cheerio");

function createTOC(uri) {
  return rp(uri)
    .then(body => cheerio.load(body))
    .then($ => {
      // Get The Article ID
      const articleId = uri.substring(uri.lastIndexOf("-") + 1);

      // Get the headings
      let results = [];
      $("body")
        .find("h2, h3, h4, h5, h6")
        .each((_, elem) => {
          const title = elem.children[0].data;
          const headingCode = elem.attribs.id;

          if (!headingCode) {
            return;
          }

          const link = `https://medium.com/p/${articleId}#${headingCode}`;

          results.push({
            title,
            headingCode,
            link
          });
        });

      return results;
    });
}

module.exports = createTOC;
