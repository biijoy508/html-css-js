function foodShop() {
    var roommates = {
        ivar: {potatis: 10},
        johan: {mango: 20}
    };

    var marketprice = {
        ica : {potatis: 5, mango: 20},
        willys: {potatis: 2, mango:10}
    }
    
    var price = function (foodname, shopname, amount) {
         return (marketprice[shopname][foodname] * amount).toString();
    }

        for (var person in roommates){
            for(var foodName in roommates[person]){
                var amount = roommates[person][foodName];
                alert(person + " eats " + amount +" "+ foodName + " everyday which costs " + price(foodName, "ica", amount)+ " in ICA "+ price(foodName, "willys", amount)+ " in Willys");
            }
        }

}
foodShop();


//guessNumber();
function guessNumber() {
    var counter = 0;
    while (counter < 3) {
        var randomNummer = Math.floor(Math.random() * 5) + 1;

        var answer = prompt("Guess a number, or type q to quit. Hint: the correct answer is" + randomNummer).trim();

        if (answer == undefined || answer == null) {
            continue;
        }
        if (answer === "q") {
            break;
        }
        counter++;
        if (answer == randomNummer) {
            alert("wow");
        } else {
            alert("u dumb");
        }
    }
}


