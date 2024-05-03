var target = -1;
function start_game() {
    target = getRdNum();
    console.log(target);

    document.getElementById('guess').value = "";
    document.getElementById('st_btn').style.display = "none";
    div = document.getElementsByClassName('game');
    for (var i = 0; i < div.length; i++) {
        div[i].style.display = "block";
    }
}

function guessing() {
    var guess = document.getElementById('guess').value;
    if (guess == "" || guess < 0 || guess > 9 || isNaN(guess)) {
        alert("Please enter a number in [0, 9] !");
        document.getElementById('guess').value = "";
        return;
    }
    var count = document.querySelectorAll('#rcd li').length;
    var win = (guess == target);

    if (win) {
        txt = "Round " + (count+1) + " of your guess: " + guess + " and the number you guess is correct!";
    }
    else{
        txt = "Round " + (count+1) + " of your guess: " + guess + " and the number you guess is too ";
        if (guess > target) {
            txt += "large!";
        } else {
            txt += "small!";
        }
    }

    // write record to list
    document.getElementById('rcd').innerHTML += "<li>" + txt + "</li>";

    if (count+1 == 5 || win) {
        fin_game(win);
    }

    document.getElementById('guess').value = "";
}

function fin_game(win) {
    document.getElementById('gus').style.display = "none";
    document.getElementById('rd_num').innerHTML = target;

    fins = document.getElementsByClassName('fin');
    for (var i = 0; i < fins.length; i++) {
        fins[i].style.display = "block";
    }

    if (win) {
        document.getElementById('result').innerHTML = "BINGO! You guess the correct number!";
    }
    else {
        document.getElementById('result').innerHTML = "Oops! You have tried 5 times and didn't guess the number.";
    }
}

function getRdNum() {
    var target = Math.floor(Math.random() * 10);
    return target;
}
