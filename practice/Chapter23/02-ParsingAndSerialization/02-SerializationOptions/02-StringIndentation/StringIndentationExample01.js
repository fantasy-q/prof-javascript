let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017
};

let jsonText = JSON.stringify(book, null, 4);

console.log(jsonText);

/** 02
 * {
 *     "title": "Professional JavaScript",
 *     "authors": [
 *         "Nicholas C. Zakas",
 *         "Matt Frisbie"
 *     ],
 *     "edition": 4,
 *     "year": 2017
 * }
 */
