//handels card object and deck of cards
class Card{
    constructor(name, num){
        this.name = name;
        this.num = num;
    }
}

let arrayDeck = [
    new Card("aHearts",1),
    new Card("2Hearts",2),
    new Card("3Hearts",3),
    new Card("4Hearts",4),
    new Card("5Hearts",5),
    new Card("6Hearts",6),
    new Card("7Hearts",7),
    new Card("8Hearts",8),
    new Card("9Hearts",9),
    new Card("10Hearts",10),
    new Card("jHearts",10),
    new Card("qHearts",10),
    new Card("kHearts",10),
    new Card("aSpades",1),
    new Card("2Spades",2),
    new Card("3Spades",3),
    new Card("4Spades",4),
    new Card("5Spades",5),
    new Card("6Spades",6),
    new Card("7Spades",7),
    new Card("8Spades",8),
    new Card("9Spades",9),
    new Card("10Spades",10),
    new Card("jSpades",10),
    new Card("qSpades",10),
    new Card("kSpades",10),
    new Card("aClubs",1),
    new Card("2Clubs",2),
    new Card("3Clubs",3),
    new Card("4Clubs",4),
    new Card("5Clubs",5),
    new Card("6Clubs",6),
    new Card("7Clubs",7),
    new Card("8Clubs",8),
    new Card("9Clubs",9),
    new Card("10Clubs",10),
    new Card("jClubs",10),
    new Card("qClubs",10),
    new Card("kClubs",10),
    new Card("aDiamonds",1),
    new Card("2Diamonds",2),
    new Card("3Diamonds",3),
    new Card("4Diamonds",4),
    new Card("5Diamonds",5),
    new Card("6Diamonds",6),
    new Card("7Diamonds",7),
    new Card("8Diamonds",8),
    new Card("9Diamonds",9),
    new Card("10Diamonds",10),
    new Card("jDiamonds",10),
    new Card("qDiamonds",10),
    new Card("kDiamonds",10)
];
 let totalHand;
 let dealerTotal;

//handles shuffling of deck
function shuffle(array){
    let currentIndex = array.length;

    while (currentIndex != 0){
        let randomIndex = Math.floor(Math.random()*array.length);
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
shuffle(arrayDeck);
//Shows deck order in the console
//arrayDeck.forEach(card => console.log(card));
// Starting hand array
let hand = [
    new Card("",0),
    new Card("",0),
    new Card("",0),
    new Card("",0),
    new Card("",0)
];
let dealer = [
    new Card("",0),
    new Card("",0),
    new Card("",0),
    new Card("",0),
    new Card("",0)
];
const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    if (gameStart == 3){
    //resetRound();
            //restart the round
            gameStart=0;
            hand = [
                new Card("",0),
                new Card("",0),
                new Card("",0),
                new Card("",0),
                new Card("",0)
            ];
            dealer = [
                new Card("",0),
                new Card("",0),
                new Card("",0),
                new Card("",0),
                new Card("",0)
            ];
            
            firstCard.src = `cardImages/slot.png`;
            secondCard.src = `cardImages/slot.png`;
            thirdCard.src = "";
            fourthCard.src = "";
            fifthCard.src = "";
            sixthCard.src = "";
            seventhCard.src = "";
            firstDealer.src = `cardImages/dealer.png`;
            secondDealer.src = `cardImages/dealer.png`;
            thirdDealer.src = "";
            fourthDealer.src = "";
            fifthDealer.src = "";
            sixthDealer.src = "";
            seventhDealer.src = "";
            document.getElementById("totalHand").innerHTML = String(0);
            document.getElementById("totalForDealer").innerHTML = String(0);
            wager = 50;
            currentHit = 0;
            document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
            //code below allows for minimal card counting in game
            currentRound++;
            if (currentRound == 5){
                currentRound = 1;
                arrayDeck = [
                    new Card("aHearts",1),
                    new Card("2Hearts",2),
                    new Card("3Hearts",3),
                    new Card("4Hearts",4),
                    new Card("5Hearts",5),
                    new Card("6Hearts",6),
                    new Card("7Hearts",7),
                    new Card("8Hearts",8),
                    new Card("9Hearts",9),
                    new Card("10Hearts",10),
                    new Card("jHearts",10),
                    new Card("qHearts",10),
                    new Card("kHearts",10),
                    new Card("aSpades",1),
                    new Card("2Spades",2),
                    new Card("3Spades",3),
                    new Card("4Spades",4),
                    new Card("5Spades",5),
                    new Card("6Spades",6),
                    new Card("7Spades",7),
                    new Card("8Spades",8),
                    new Card("9Spades",9),
                    new Card("10Spades",10),
                    new Card("jSpades",10),
                    new Card("qSpades",10),
                    new Card("kSpades",10),
                    new Card("aClubs",1),
                    new Card("2Clubs",2),
                    new Card("3Clubs",3),
                    new Card("4Clubs",4),
                    new Card("5Clubs",5),
                    new Card("6Clubs",6),
                    new Card("7Clubs",7),
                    new Card("8Clubs",8),
                    new Card("9Clubs",9),
                    new Card("10Clubs",10),
                    new Card("jClubs",10),
                    new Card("qClubs",10),
                    new Card("kClubs",10),
                    new Card("aDiamonds",1),
                    new Card("2Diamonds",2),
                    new Card("3Diamonds",3),
                    new Card("4Diamonds",4),
                    new Card("5Diamonds",5),
                    new Card("6Diamonds",6),
                    new Card("7Diamonds",7),
                    new Card("8Diamonds",8),
                    new Card("9Diamonds",9),
                    new Card("10Diamonds",10),
                    new Card("jDiamonds",10),
                    new Card("qDiamonds",10),
                    new Card("kDiamonds",10)
                ];
                shuffle(arrayDeck);
                console.log("deck has been reset")
            }
    }
});
const draw = document.querySelector("#draw");
//STARTS THE GAME draw 2 cards VVVVVVVVVVVVVVVVVVVVVVVVVVV CODE IS COMPLETE
// the game start command forces the user to press buttons in order
let gameStart = 0;
draw.addEventListener("click", ()=>{
    if (gameStart == 0){
    gameStart = 1;
    //draws 2 cards
    for(let i = 0;i < 2;i++){
    hand.unshift(arrayDeck[0]);
    arrayDeck.shift();
    }
    //creates the images for those two cards
    const firstCard = document.querySelector("#firstCard");
    firstCard.src = `cardImages/${hand[0].name}.png`;
    const secondCard = document.querySelector("#secondCard");
    secondCard.src = `cardImages/${hand[1].name}.png`;
    //hides the "draw card" button
    //draw.style.visibility = "hidden";
    //gets total of hand and prints it
    totalHand = hand[0].num + hand[1].num;
    //if you draw an ace in your first hand this will change its value to 11, in the 
    //unlikley event you draw double aces, only the first ace will be 11
    if (hand[0].num == 1){
        hand[0].num = 11;
        console.log("hand 0 code ran");
    }else if (hand[1].num == 1){
        hand[1].num = 11;
        console.log("hand 1 code ran");
    }
    totalHand = hand[0].num + hand[1].num;
    document.getElementById("subTitle").innerHTML = "Your Total:";
    document.getElementById("totalHand").innerHTML = String(totalHand);

    checkWin(totalHand);
}
});
//BEGINS SECOND PHASE OF GAME HIT OR STAY
const hit = document.querySelector("#hit");

let currentHit = 0;

hit.addEventListener("click", ()=>{
    if (gameStart == 1){
    switch(currentHit){
        case 0:
            //adds to hand count so next hit lands on the next case
            currentHit++;
            //adds card to hand and removes it from the deck
            
            hand.unshift(arrayDeck[0]);
            
            arrayDeck.shift(arrayDeck);
            //draws the third card on the webPage
            const thirdCard = document.querySelector("#thirdCard");
            thirdCard.src = `cardImages/${hand[0].name}.png`;
            /*checkWin(totalHand);*/
            //adds to hand total and prints out the number
            //ace(totalHand);
            totalHand = hand[0].num + hand[1].num + hand[2].num;
            document.getElementById("totalHand").innerHTML = String(totalHand);
            console.log(totalHand);
            ace(totalHand);
            checkWin(totalHand);
            console.log(totalHand);
            break;
        case 1:
            currentHit++;
            hand.unshift(arrayDeck[0]);
            arrayDeck.shift(arrayDeck);
            const fourthCard = document.querySelector("#fourthCard");
            fourthCard.src = `cardImages/${hand[0].name}.png`;
            //checkWin(totalHand);
            totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num;
            document.getElementById("totalHand").innerHTML = String(totalHand);
            console.log(totalHand);
            ace(totalHand);
            checkWin(totalHand);
            console.log(totalHand);
            break;
        case 2:
            currentHit++;

            hand.unshift(arrayDeck[0]);
            arrayDeck.shift(arrayDeck);
            const fifthCard = document.querySelector("#fifthCard");
            fifthCard.src = `cardImages/${hand[0].name}.png`;
            //checkWin(totalHand);
            totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num + hand[4].num;
            document.getElementById("totalHand").innerHTML = String(totalHand);
            console.log(totalHand);
            ace(totalHand);
            checkWin(totalHand);
            console.log(totalHand);
            break;
        case 3:
            currentHit++;

            hand.unshift(arrayDeck[0]);
            arrayDeck.shift(arrayDeck);
            const sixthCard = document.querySelector("#sixthCard");
            sixthCard.src = `cardImages/${hand[0].name}.png`;
            //checkWin(totalHand);
            totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num + hand[4].num;
            document.getElementById("totalHand").innerHTML = String(totalHand);
            console.log(totalHand);
            ace(totalHand);
            checkWin(totalHand);
            console.log(totalHand);
            break;
        case 4:
            currentHit++;

            hand.unshift(arrayDeck[0]);
            arrayDeck.shift(arrayDeck);
            const seventhCard = document.querySelector("#seventhCard");
            seventhCard.src = `cardImages/${hand[0].name}.png`;
            //checkWin(totalHand);
            totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num + hand[4].num;
            document.getElementById("totalHand").innerHTML = String(totalHand);
            console.log(totalHand);
            ace(totalHand);
            checkWin(totalHand);
            console.log(totalHand);
            break;         
        default:
            break;

    }
}
})


// below checks conditions to see if you win
function checkWin(total){
    if (total > 21){
        endOfRound();
    }else if(total == 21){
        endOfRound();
    }
}

//CODE BELOW BEGINS FINAL PHASE OF GAME
const stay = document.querySelector("#stay");
stay.addEventListener("click", ()=>{
    if (gameStart == 1){
        gameStart = 2;
    dealer.unshift(arrayDeck[0]);
    arrayDeck.shift();
    const firstDealer = document.querySelector("#firstDealer");
    firstDealer.src = `cardImages/${dealer[0].name}.png`;
    dealer.unshift(arrayDeck[0]);
    arrayDeck.shift();
    const secondDealer = document.querySelector("#secondDealer");
    secondDealer.src = `cardImages/${dealer[0].name}.png`;
    if (dealer[0].num == 1){
        dealer[0].num = 11;
    }else if (dealer[1].num == 1){
        dealer[1].num = 11;
    }
    dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
    console.log(dealerTotal);
    //rules of blackjack dictate the dealer must draw until 17 is reached!
    if(dealerTotal < 17){
        dealer.unshift(arrayDeck[0]);
        arrayDeck.shift();
        const thirdDealer = document.querySelector("#thirdDealer");
        thirdDealer.src = `cardImages/${dealer[0].name}.png`;
        dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
        console.log(dealerTotal);

        aceDealer(dealerTotal);
        console.log(dealerTotal);
    }
    if(dealerTotal < 17){
        dealer.unshift(arrayDeck[0]);
        arrayDeck.shift();
        const fourthDealer = document.querySelector("#fourthDealer");
        fourthDealer.src = `cardImages/${dealer[0].name}.png`;
        dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
        console.log(dealerTotal);

        aceDealer(dealerTotal);
        console.log(dealerTotal);
    }
    if(dealerTotal < 17){
        dealer.unshift(arrayDeck[0]);
        arrayDeck.shift();
        const fifthDealer = document.querySelector("#fifthDealer");
        fifthDealer.src = `cardImages/${dealer[0].name}.png`;
        dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
        console.log(dealerTotal);

        aceDealer(dealerTotal);
        console.log(dealerTotal);
    }
    if(dealerTotal < 17){
        dealer.unshift(arrayDeck[0]);
        arrayDeck.shift();
        const sixthDealer = document.querySelector("#sixthDealer");
        sixthDealer.src = `cardImages/${dealer[0].name}.png`;
        dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
        console.log(dealerTotal);

        aceDealer(dealerTotal);
        console.log(dealerTotal);
    }
    if(dealerTotal < 17){
        dealer.unshift(arrayDeck[0]);
        arrayDeck.shift();
        const seventhDealer = document.querySelector("#seventhDealer");
        seventhDealer.src = `cardImages/${dealer[0].name}.png`;
        dealerTotal = dealer[0].num +dealer[1].num +dealer[2].num +dealer[3].num +dealer[4].num;
        console.log(dealerTotal);

        aceDealer(dealerTotal);
        
        console.log(dealerTotal);
    }
    document.getElementById("totalForDealer").innerHTML = String(dealerTotal);
    
    endOfRound();
    }
})

//CHECKS TO MAKE SURE ACE CHANGES VALUE FROM 11 TO 1 WHEN NEEDED
function ace(total){
    //if cards with an ace(1) = 12 or more, it will lead to a 22 or more thus a loss, change all values to 1
    if (total > 11){
        for (let i = 0; i < 5; i++){
            if (hand[i].num == 11){
                hand[i].num = 1;
                totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num + hand[4].num;
                document.getElementById("totalHand").innerHTML = String(totalHand);
                console.log(`hand check ace at location ${i} was set to 1`);
            }
            console.log(`hand check ace at location ${i}`);
        }
    //if cards with an ace(1) add up to 11 then add 10 more for a max of 21
    }else if (total < 12){
        for (let i = 0; i < 5; i++){
            if (hand[i].num == 1){
                hand[i].num = 11;
                totalHand = hand[0].num + hand[1].num + hand[2].num + hand[3].num + hand[4].num;
                document.getElementById("totalHand").innerHTML = String(totalHand);
                console.log(`hand check ace at location ${i} was set to 11`);
            }
        }
    }
}
function aceDealer(total){
    
    
    //if cards with an ace(1) = 12 or more, it will lead to a 22 or more thus a loss, change all values to 1
        if (total > 11){
            for (let i = 0; i < 5; i++){
                if (dealer[i].num == 11){
                    dealer[i].num = 1;
                    dealerTotal = dealer[0].num + dealer[1].num + dealer[2].num + dealer[3].num + dealer[4].num;
                    //document.getElementById("totalHand").innerHTML = String(totalHand);

                }

            }
        //if cards with an ace(1) add up to 11 then add 10 more for a max of 21
        }else if (total < 12){
            for (let i = 0; i < 5; i++){
                if (dealer[i].num == 1){
                    dealer[i].num = 11;
                    dealerTotal = dealer[0].num + dealer[1].num + dealer[2].num + dealer[3].num + dealer[4].num;
                    //document.getElementById("totalHand").innerHTML = String(totalHand);

                }
            }
        }
      
}/*
function ace(element){
    if (totalHand >= 11){
        console.log(element);
        element = 1;
        console.log(element);
    }else if(totalHand <= 10){
        console.log(element);
        element = 11;
        console.log(element);
    }
}*/
//END OF ROUND
function endOfRound(){
    if (totalHand <= 21 && totalHand > dealerTotal){
        console.log("You win, you have a better hand");
        income += wager;
    }
    else if (totalHand <= 21 && dealerTotal > 21){
        console.log("You Win, dealer got higher than 21");
        income += wager;
    }
    else if (totalHand <= 21 && totalHand < dealerTotal){
        console.log("You Lose, dealer has a better hand");
        income -= wager;
    }
    else if (totalHand > 21){
        console.log("You lose, you got higher than 21");
        income -= wager;
    }
    else if (totalHand == dealerTotal){
        console.log("TIE");
    }
    document.getElementById("income").innerHTML = String(`Current Savings: $${income}`);
    //allows for game to be reset
    gameStart=3;
};

function resetRound(){
    
        //restart the round
        gameStart=0;
        
        hand = [
            new Card("",0),
            new Card("",0),
            new Card("",0),
            new Card("",0),
            new Card("",0)
        ];
        dealer = [
            new Card("",0),
            new Card("",0),
            new Card("",0),
            new Card("",0),
            new Card("",0)
        ];
        arrayDeck = [
            new Card("aHearts",1),
            new Card("2Hearts",2),
            new Card("3Hearts",3),
            new Card("4Hearts",4),
            new Card("5Hearts",5),
            new Card("6Hearts",6),
            new Card("7Hearts",7),
            new Card("8Hearts",8),
            new Card("9Hearts",9),
            new Card("10Hearts",10),
            new Card("jHearts",10),
            new Card("qHearts",10),
            new Card("kHearts",10),
            new Card("aSpades",1),
            new Card("2Spades",2),
            new Card("3Spades",3),
            new Card("4Spades",4),
            new Card("5Spades",5),
            new Card("6Spades",6),
            new Card("7Spades",7),
            new Card("8Spades",8),
            new Card("9Spades",9),
            new Card("10Spades",10),
            new Card("jSpades",10),
            new Card("qSpades",10),
            new Card("kSpades",10),
            new Card("aClubs",1),
            new Card("2Clubs",2),
            new Card("3Clubs",3),
            new Card("4Clubs",4),
            new Card("5Clubs",5),
            new Card("6Clubs",6),
            new Card("7Clubs",7),
            new Card("8Clubs",8),
            new Card("9Clubs",9),
            new Card("10Clubs",10),
            new Card("jClubs",10),
            new Card("qClubs",10),
            new Card("kClubs",10),
            new Card("aDiamonds",1),
            new Card("2Diamonds",2),
            new Card("3Diamonds",3),
            new Card("4Diamonds",4),
            new Card("5Diamonds",5),
            new Card("6Diamonds",6),
            new Card("7Diamonds",7),
            new Card("8Diamonds",8),
            new Card("9Diamonds",9),
            new Card("10Diamonds",10),
            new Card("jDiamonds",10),
            new Card("qDiamonds",10),
            new Card("kDiamonds",10)
        ];
        shuffle(arrayDeck);
        
        firstCard.src = `cardImages/slot.png`;
        secondCard.src = `cardImages/slot.png`;
        thirdCard.src = "";
        fourthCard.src = "";
        fifthCard.src = "";
        firstDealer.src = `cardImages/dealer.png`;
        secondDealer.src = `cardImages/dealer.png`;
        thirdDealer.src = "";
        fourthDealer.src = "";
        fifthDealer.src = "";
        document.getElementById("totalHand").innerHTML = String(0);
        document.getElementById("totalForDealer").innerHTML = String(0);
        wager = 50;
        document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
}
let currentRound = 1;
let income = 1000;
let wager = 50
const upWager = document.querySelector("#upWager");
const downWager = document.querySelector("#downWager");
upWager.addEventListener("click", ()=>{
    if (gameStart == 0){
    if (income <= wager){
        wager = income;
        document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
    }else{
        if (income >= 100_000){
            wager += 5_000;
        }
        else if(income >= 10_000){
            wager += 500;
        }
        else if(income >= 5_000){
            wager += 250;
        }
        else if(income >= 2_000){
            wager += 100;
        }
        else{
            wager += 50;
        }
        document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
    }
}
})
downWager.addEventListener("click", ()=>{
    if (gameStart == 0){
    if (wager <= 50){
        wager = 50;
        document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
    }else{
        if (income >= 100_000){
            wager -= 5_000;
        }
        else if(income >= 10_000){
            wager -= 500;
        }
        else if(income >= 5_000){
            wager -= 250;
        }
        else if(income >= 2_000){
            wager -= 100;
        }
        else{
            wager -= 50;
        }
        document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
    }
}
});
document.getElementById("income").innerHTML = String(`Current Savings: $${income}`);
document.getElementById("wager").innerHTML = String(`Current Wager: $${wager}`);
