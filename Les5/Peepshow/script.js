let img = new Image();

img.src = "https://i.pinimg.com/564x/f7/4c/7b/f74c7b0b2f3c79d860dbd9f19d08493e.jpg";

let src = document.getElementById("x");

src.appendChild(img);

/* Geld teller */
let MoneyAmount = 100;

let Money = "Money: $ " + MoneyAmount;

let MoneyCount = document.getElementById("text").innerHTML = Money;


/* Button aanmaken */
let myButton = document.getElementById("peepButton");

/* Tijd teller */
let TimeLeft = 5;

let TimeCounter = "Seconds left: " + TimeLeft;

let Timer = document.getElementById("TimeText").innerHTML = TimeCounter;


myButton.addEventListener('click', function(){

    NewMoneyAmount = MoneyAmount - 5; 
    
    NewMoney = "Money: $ " + NewMoneyAmount;

    NewMoneyCount = document.getElementById("text").innerHTML = NewMoney;

    img.src = "https://i.pinimg.com/564x/0f/01/a6/0f01a6eedf4b9b3b7bacc42fcb772800.jpg";

    Time = setInterval(() => {
    
        img.src = "https://i.pinimg.com/564x/f7/4c/7b/f74c7b0b2f3c79d860dbd9f19d08493e.jpg";

        if(TimeLeft = 0){
            clearInterval(Time);
        }
        Timer.value = 10 - TimeLeft;
        TimeLeft-=1;


         
    }, 5000);
    
})



