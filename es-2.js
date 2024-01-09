// Replicare le card in dinamica con JavaScript, come visto a lezione.
// Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS.

let cardWrapper = document.querySelector('#cardWrapper');
// console.log(cardWrapper);

let mtg = {

    'cards' : [

        {
            'cardName' : 'Ghoulcaller Gisa',
            'manaCostNc' : 3,
            'manaCostBlack' : 2,
            'manaCostRed' : 0,
            'manaCostGreen' : 0,
            'manaCostWhite' : 0,
            'manaCostBlue' : 0,
            'cardType' : 'Legendary Creature - Human Wizard',
            'img' : './media/ghoulcaller-gisa.jpg',
            'description' : 'lorem lorem lorem',
            'power' : '3',
            'toughness' : '4'
        },

        {
            'cardName' : 'Olivia, Mobilized for War',
            'manaCostNc' : 1,
            'manaCostBlack' : 1,
            'manaCostRed' : 1,
            'manaCostGreen' : 0,
            'manaCostWhite' : 0,
            'manaCostBlue' : 0,
            'cardType' : 'Legendary Creature - Vampire Knight',
            'img' : './media/olivia-mobilized.jpg',
            'description' : 'lorem lorem lorem',
            'power' : '3',
            'toughness' : '3'
        },

        {
            'cardName' : 'Drana and Linvala',
            'manaCostNc' : 1,
            'manaCostBlack' : 1,
            'manaCostRed' : 0,
            'manaCostGreen' : 0,
            'manaCostWhite' : 2,
            'manaCostBlue' : 0,
            'cardType' : 'Legendary Creature - Vampire Angel',
            'img' : './media/drana-linvala.jpg',
            'description' : 'lorem lorem lorem',
            'power' : '3',
            'toughness' : '4'
        },

        {
            'cardName' : 'Halana and Alena, Partners',
            'manaCostNc' : 2,
            'manaCostBlack' : 0,
            'manaCostRed' : 1,
            'manaCostGreen' : 1,
            'manaCostWhite' : 0,
            'manaCostBlue' : 0,
            'cardType' : 'Legendary Creature - Human Ranger',
            'img' : './media/halana-alena.jpg',
            'description' : 'lorem lorem lorem',
            'power' : '2',
            'toughness' : '3'
        }

    ],

    'printCards' : function(){

        this.cards.forEach((card, i) => {

            // la card in generale

            let col = document.createElement('div');

            col.classList.add('col-3');

            col.innerHTML = `

            <div class="card-magic">
            <div class="card-content">

            <div class="card-heading font-h">${card.cardName}</div>
            <div class="mana-cost" id="mana-cost-${i}">
            <div class="mana">${card.manaCostNc}</div>
            </div>
            <img src="${card.img}" alt="" class="card-img">
            <div class="card-heading2 font-h">${card.cardType}</div>

            <div class="card-text">
            <p class="lh-sm font-h">
            ${card.description}
            </p>
            </div>

            <div class="card-stats-box">
            <div class="card-stats">
            <span class="power">${card.power}</span> /
            <span class="toughness">${card.toughness}</span>
            </div>
            </div>


            </div>

            </div>

            `

            cardWrapper.appendChild(col);

            if(card.manaCostBlack > 0 || card.manaCostBlue > 0 || card.manaCostGreen > 0 || card.manaCostRed > 0 || card.manaCostWhite > 0){
                let id = i;
                let cardBlackMana = card.manaCostBlack;
                let cardBlueMana = card.manaCostBlue;
                let cardGreenMana = card.manaCostGreen;
                let cardRedMana = card.manaCostRed;
                let cardWhiteMana = card.manaCostWhite;

                this.printColoredMana(id, cardBlackMana, cardBlueMana, cardGreenMana, cardRedMana, cardWhiteMana);

            }

        })

    },


    'printColoredMana' : function(id, black, blue, green, red, white){

        let manaCost = document.querySelectorAll('.mana-cost');
        let i = id;

        for (let index = 0; index < black; index++) {
            let blackMana = document.createElement('div');
            blackMana.classList.add('black-mana');

            manaCost[i].appendChild(blackMana);

        };

        for (let index = 0; index < blue; index++) {
            let blueMana = document.createElement('div');
            blueMana.classList.add('blue-mana');

            manaCost[i].appendChild(blueMana);

        };

        for (let index = 0; index < green; index++) {
            let greenMana = document.createElement('div');
            greenMana.classList.add('green-mana');

            manaCost[i].appendChild(greenMana);

        };

        for (let index = 0; index < red; index++) {
            let redMana = document.createElement('div');
            redMana.classList.add('red-mana');

            manaCost[i].appendChild(redMana);

        };

        for (let index = 0; index < white; index++) {
            let whiteMana = document.createElement('div');
            whiteMana.classList.add('white-mana');

            manaCost[i].appendChild(whiteMana);

        }

    }






    // versione base

    // 'printColoredMana' : function(){

    //     this.cards.forEach((card, i) => {

    //         console.log(card.manaCostBlack);

    //         if (card.manaCostBlack !== 0 ){

    //             let manaCost = document.querySelector(`#mana-cost-${i}`);

    //             console.log(manaCost);

    //             for (let i = 0; i < card.manaCostBlack; i++){

    //                 let blackMana = document.createElement('div');
    //                 blackMana.classList.add('black-mana');

    //                 console.log(blackMana);

    //                 manaCost.appendChild(blackMana);

    //             }

    //         }



    //     })
    // }

}

mtg.printCards();