//a prototype.js átírva Class-es verzióba
//a class nem egy fgv, ebben van egy constructor metódus
class Poem{
    constructor (authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet){
        this.author = authorFromInternet;
        this.year = yearFromInternet;
        this.title = titleFromInternet;
        this.text = textFromInternet;
    }
    //saját metódus beépítése:
    makePage() {
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}
            ${this.year}
        `)
    }
}

const myFavPoem = new Poem ("Weöres Sándor", 1962, "Énhasadás", "Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok.")

//console.log(myFavPoem)
//console.log(myFavPoem.author)
//console.log(myFavPoem.title)
//console.log(myFavPoem.text)

//lefuttatjuk a saját metódussal is:
//myFavPoem.makePage();

//a class Poem-et újabb kulccsal akarjuk kiegészíteni:
class ForeignPoem extends Poem{
    constructor (authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet, translater){
        super(authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet)
        this.translater = translater;
    }
    makePage() {
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}
            translater: ${this.translater}
            ${this.year}
        `)
    }
}

const weoresPoem = new ForeignPoem("Weöres Sándor", 1962, "Énhasadás", "Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok.", "Alan Dixon")

weoresPoem.makePage();