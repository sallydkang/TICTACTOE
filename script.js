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
  pMove.innerHTML=turn;
  pMove.style.fontSize = "xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move2(){
  var pMove = document.getElementById("tMiddle");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move3(){
  var pMove = document.getElementById("tRight");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move4(){
  var pMove = document.getElementById("mLeft");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move5(){
  var pMove = document.getElementById("mMiddle");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move6(){
  var pMove = document.getElementById("mRight");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move7(){
  var pMove = document.getElementById("bLeft");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move8(){
  var pMove = document.getElementById("bMiddle");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}

function move9(){
  var pMove = document.getElementById("bRight");
  pMove.innerHTML=turn;
  pMove.style.fontSize="xx-large";
  if(turn == "X"){
    turn = "O";
  } else {
    turn = "X";
  }
}
