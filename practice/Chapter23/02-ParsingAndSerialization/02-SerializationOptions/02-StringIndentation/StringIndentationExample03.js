let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017
};

let jsonText = JSON.stringify(book, null, "--");

console.log(jsonText);

/** 04
 * {
 * --"title": "Professional JavaScript",
 * --"authors": [
 * ----"Nicholas C. Zakas", 
 * ----"Matt Frisbie"
 * --],
 * --"edition": 4,
 * --"year": 2017
 * }
 */
