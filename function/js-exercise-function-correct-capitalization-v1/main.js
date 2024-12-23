function correctCapitalization(input) {
  let paragraphs = input.split(".");

  paragraphs = paragraphs.map((paragraph) => {
    paragraph = paragraph.trim();
    if (paragraph.length > 0) {
      return paragraph[0].toUpperCase() + paragraph.slice(1);
    }
    return paragraph;
  });

  return paragraphs.join(". ").trim();
}

console.log(
  correctCapitalization(
    "ruang guru adalah. startup terbaik nomor 1 di indonesia"
  )
);

module.exports = correctCapitalization;
