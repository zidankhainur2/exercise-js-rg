function shortName(name, options = "full") {
  if (typeof name !== "string" || name.trim().length <= 2) {
    return "Invalid Name";
  }

  const nameParts = name.trim().split(" ");

  if (nameParts.length < 2) {
    return "Invalid Name";
  }

  switch (options) {
    case "first":
      return `${nameParts[0].charAt(0)}. ${nameParts.slice(1).join(" ")}`;
    case "last":
      return `${nameParts.slice(0, -1).join(" ")} ${nameParts[
        nameParts.length - 1
      ].charAt(0)}.`;
    case "full":
      return name.trim();
    default:
      return "Invalid Option";
  }
}

console.log(shortName("Alya", "first"));
console.log(shortName("Muhammad Gilang Ardiansyah", "first")); 
console.log(shortName("Ahmad Zacky Taufiqul Hakim", "last")); 
console.log(shortName("Nadhif Aselole", "full")); 

module.exports = shortName;
