//   Lavoriamo sul DOM. Creare 3 paragrafi in HTML e 3 bottoni.

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
// PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().



// catturo i paragrafi

let paragrafi = document.querySelectorAll('.paragrafi');

// bottone nascondi

let btnHide = document.querySelector('.hide-p');

btnHide.addEventListener('click', () => {

    paragrafi.forEach((paragrafo) =>{

        paragrafo.classList.toggle('d-none');

    })
});


// bottone sfondo

let btnBg = document.querySelector('.bgRandom');

btnBg.addEventListener('click', ()=> {

    paragrafi.forEach((paragrafo) => {

        let red = Math.floor(Math.random() * (255 - 0 + 1));
        let green = Math.floor(Math.random() * (255 - 0 + 1));
        let blue = Math.floor(Math.random() * (255 - 0 + 1));

        paragrafo.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })

})


// bottone grassetto

let btnBold = document.querySelector('.bold-p');

btnBold.addEventListener('click', () => {

    paragrafi.forEach((paragrafo) => {

        paragrafo.classList.toggle('fw-bold');
    })

})
