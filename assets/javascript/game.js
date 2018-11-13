$(document).ready(function () {

var gohan = {
    name: "Gohan",
    hp: 150,
    attackPower: 10,
    counter: 15,
    attackPowersub: 10,
    hpstat: ".gohan-hp",
    nameCall: ".gohan"
};

var trunks = {
    name: "Trunks",
    hp: 200,
    attackPower: 6,
    counter: 20,
    attackPowersub: 6,
    hpstat: ".trunks-hp",
    nameCall: ".trunks"
};

var cell = {
    name: "Perfect Cell",
    hp: 220,
    attackPower: 12,
    counter: 25,
    attackPowersub: 12,
    hpstat: ".cell-hp",
    nameCall: ".cell"
};

var frieza = {
    name: "Frieza",
    hp: 175,
    attackPower: 8,
    counter: 12,
    attackPowersub: 8,
    hpstat: ".frieza-hp",
    nameCall: ".frieza"
};

$(".frieza-hp").text("HP: " + frieza.hp);
$(".cell-hp").text("HP: " + cell.hp);
$(".gohan-hp").text("HP: " + gohan.hp);
$(".trunks-hp").text("HP: " + trunks.hp);

var isAttacker = false;

var isDefender = false;

var attacker = "";

var defender = "";

var reset = ".enemyRow"

//When user clicks on gohan
$(".gohan").on("click", function() {
    //if there is already a defender chosen, do nothing
    if (isDefender) {
        return false;
    }
    //
    else if (isAttacker) {
        $(".gohan").appendTo(".defender");
        isDefender = true;
        defender = gohan;
        console.log(defender);
        $(".defender").show();
    }

    
    else {
        isAttacker = true;
        $(".cell").appendTo(".enemyRow");
        $(".trunks").appendTo(".enemyRow");
        $(".frieza").appendTo(".enemyRow");
        attacker = gohan;
        console.log(attacker)
    };

});

$(".trunks").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (isAttacker) {
        $(".trunks").appendTo(".defender")
        isDefender = true;
        defender = trunks;
        console.log(trunks);
        $(".defender").show();
    }

    else {
        isAttacker = "true"
        $(".cell").appendTo(".enemyRow")
        $(".gohan").appendTo(".enemyRow")
        $(".frieza").appendTo(".enemyRow")
        attacker = trunks;
        console.log(attacker)
    }

});

$(".cell").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (isAttacker) {
        $(".cell").appendTo(".defender")
        isDefender = true;
        defender = cell;
        $(".defender").show();
        console.log(defender);
    }

    else {
        isAttacker = "true"
        $(".gohan").appendTo(".enemyRow")
        $(".trunks").appendTo(".enemyRow")
        $(".frieza").appendTo(".enemyRow")
        attacker = cell;
        console.log(attacker)
    }
});

$(".frieza").on("click", function() {
    if (isDefender) {
        return false;
    }

    else if (isAttacker) {
        $(".frieza").appendTo(".defender")
        isDefender = true;
        defender = frieza;
        $(".defender").show();
        console.log(defender);
    }

    else {
        isAttacker = "true"
        $(".cell").appendTo(".enemyRow")
        $(".trunks").appendTo(".enemyRow")
        $(".gohan").appendTo(".enemyRow")
        attacker = frieza;
        console.log(attacker)
    }
});


//Create a function for the click button that causes you character to attack and the defender to counter attack. Also have it add the attack stat together so that it grows as the attacks increase.
$(".attack").on("click", function() {
        if (isDefender = false) {
            return false;
        }


        else {
            defender.hp -= attacker.attackPower;
            console.log(defender.hp)
            attacker.hp -= defender.counter;
            console.log(attacker.hp);
            attacker.attackPower += attacker.attackPowersub;
            console.log(attacker.attackPower);
            $("h5").text(attacker.name + " attacked " + defender.name + " for " + attacker.attackPower + " damage. " + defender.name + " counterattacked " + attacker.name + " for " + defender.counter + " damage." );
            $(attacker.hpstat).text("HP: " + attacker.hp); 
            $(defender.hpstat).text("HP: " + defender.hp);
        }
        
        //To bring in the next defender if the first is KO
        if (defender.hp <= 0) {
            isDefender = false;
           $(defender.nameCall).hide();
           $("h5").text(attacker.name + " has slain " + defender.name + ". Prepare for next battle!")

        }

        // to reset the game if the player loses
        if (attacker.hp <= 0) {
            $("h5").text(defender.name + " has slain " + attacker.name + ". Better luck next time.")
            isDefender = false;
            isAttacker = false;
            $(".pic").appendTo(".char-row");
            gohan = {
                name: "Gohan",
                hp: 150,
                attackPower: 10,
                counter: 15,
                attackPowersub: 10,
                hpstat: ".gohan-hp",
                nameCall: ".gohan"
            };
            
            trunks = {
                name: "Trunks",
                hp: 200,
                attackPower: 6,
                counter: 20,
                attackPowersub: 6,
                hpstat: ".trunks-hp",
                nameCall: ".trunks"
            };
            
            cell = {
                name: "Perfect Cell",
                hp: 220,
                attackPower: 12,
                counter: 25,
                attackPowersub: 12,
                hpstat: ".cell-hp",
                nameCall: ".cell"
            };
            
            frieza = {
                name: "Frieza",
                hp: 175,
                attackPower: 8,
                counter: 12,
                attackPowersub: 8,
                hpstat: ".frieza-hp",
                nameCall: ".frieza"
            };

            $(".frieza-hp").text("HP: " + frieza.hp);
            $(".cell-hp").text("HP: " + cell.hp);
            $(".gohan-hp").text("HP: " + gohan.hp);
            $(".trunks-hp").text("HP: " + trunks.hp);
            $(".pic").show();

        }

        //to end the game if there are no remaining defenders
        if (!$.trim( $('.enemyRow').html() ).length) {
            isDefender = false;
            isAttacker = false; 
            $(".pic").appendTo(".char-row");
             gohan = {
            name: "Gohan",
            hp: 150,
            attackPower: 10,
            counter: 15,
            attackPowersub: 10,
            hpstat: ".gohan-hp",
            nameCall: ".gohan"
        };

            trunks = {
            name: "Trunks",
            hp: 200,
            attackPower: 6,
            counter: 20,
            attackPowersub: 6,
            hpstat: ".trunks-hp",
            nameCall: ".trunks"
        };

            cell = {
            name: "Perfect Cell",
            hp: 220,
            attackPower: 12,
            counter: 25,
            attackPowersub: 12,
            hpstat: ".cell-hp",
            nameCall: ".cell"
        };

            frieza = {
            name: "Frieza",
            hp: 175,
            attackPower: 8,
            counter: 12,
            attackPowersub: 8,
            hpstat: ".frieza-hp",
            nameCall: ".frieza"
        };

        $(".frieza-hp").text("HP: " + frieza.hp);
            $(".cell-hp").text("HP: " + cell.hp);
            $(".gohan-hp").text("HP: " + gohan.hp);
            $(".trunks-hp").text("HP: " + trunks.hp);
            $(".pic").show();

                }


});

});