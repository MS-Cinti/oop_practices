//létrehozzuk a függvényt
function Poem(author, year, title, text) {
    this.author = author;
    this.year = year;
    this.title = title;
    this.text = text;
}

//példányosítás folyamata
const poemData = {
    authorFromInternet: "Weöres Sándor",
    yearFromInternet: 1962,
    titleFromInternet: "Énhasadás",
    textFromInternet: "Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok."
}