//létrehozzuk a függvényt:
function Poem({authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet}) {
    this.author = authorFromInternet;
    this.year = yearFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;
    //saját metódust teszünk a constructorba:
    this.makePage = function() {
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}
            ${this.year}
        `)
    }
}

//példányosítás folyamata:
const poemData = {
    authorFromInternet: "Weöres Sándor",
    yearFromInternet: 1962,
    titleFromInternet: "Énhasadás",
    textFromInternet: "Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok."
}

//így tudunk új kulcsut adni a constructorhoz:
Poem.prototype.language = "Hungarian";

const poemOfAndras = new Poem(poemData);
poemOfAndras.favouritedBy = "András Ránki";

//így tudjuk kilogolni:
console.log(poemOfAndras.__proto__);
console.log(Poem.prototype);

console.log(poemOfAndras.makePage());