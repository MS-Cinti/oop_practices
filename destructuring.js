const poemData = {
    authorFromInternet: "Weöres Sándor",
    yearFromInternet: 1962,
    titleFromInternet: "Énhasadás",
    textFromInternet: "Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok."
}

//console.log(poemData.yearFromInternet)

const pdafi = poemData.authorFromInternet;
const pdyfi = poemData.yearFromInternet;
const pdtfi = poemData.titleFromInternet;

//console.log(pdafi)
//console.log(pdtfi)

const {yearFromInternet, authorFromInternet} = poemData;

function funWithPoemData({yearFromInternet, authorFromInternet}) {
    console.log(yearFromInternet)
    console.log(authorFromInternet)
}

funWithPoemData(poemData);

//ha olyan kulcsot adunk be neki, ami nincsen(tehát pl másik névvel), akkor undefined lesz

