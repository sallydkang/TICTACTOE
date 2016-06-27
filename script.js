var turn = "X";

function start() {
  showMessage("Turn: "+ turn);

  function showMessage(message){
  document.getElementById("topText").style.fontSize = "xx-large";
  document.getElementById("topText").innerHTML = message;
}
}

function refresh(){
  location.reload();
}

function move(){
  var pMove = document.getElementById("tLeft");
  pMove.style.fontSize = "xx-large";

  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
      pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move2(){
  var pMove = document.getElementById("tMiddle");
  pMove.style.fontSize="xx-large";
if(pMove.textContent === "X" || pMove.textContent === "O"){
} else {
  if(turn == "X"){
      pMove.innerHTML=turn;
    turn = "O";
  } else {
    pMove.innerHTML=turn;
    turn = "X";
  }
}
}

function move3(){
  var pMove = document.getElementById("tRight");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move4(){
  var pMove = document.getElementById("mLeft");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move5(){
  var pMove = document.getElementById("mMiddle");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move6(){
  var pMove = document.getElementById("mRight");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move7(){
  var pMove = document.getElementById("bLeft");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move8(){
  var pMove = document.getElementById("bMiddle");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}

function move9(){
  var pMove = document.getElementById("bRight");
  pMove.style.fontSize="xx-large";
  if(pMove.textContent === "X" || pMove.textContent === "O"){
  } else {
    if(turn == "X"){
        pMove.innerHTML=turn;
      turn = "O";
    } else {
      pMove.innerHTML=turn;
      turn = "X";
    }
  }
}
