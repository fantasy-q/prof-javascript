let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017
};

let jsonText = JSON.stringify(book, ["title", "edition"]);

console.log(jsonText);

// 02
// { "title": "Professional JavaScript", "edition": 4 }
