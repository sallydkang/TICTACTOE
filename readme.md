#Tic-Tac-Toe

###First web app

---> using simple javascript HTML and CSS

- Set a turn variable to `X` for the first turn
- created a function and can help start the game

 ```javascript
 function start() {
  showMessage("Turn: "+ turn);
	
  function showMessage(message){
  document.getElementById("topText").style.fontSize = "xx-large";
  document.getElementById("topText").innerHTML = message;
}
}
```
---> Also shows whose turn it is (Used DOM manipulation to select HTML elements on js)

- Then created separate functions for each move 
	- Each `div` box is a move which contains: 

	```javascript
	function move(){
	  var pMove = document.getElementById("tLeft");
	  pMove.style.fontSize = "xx-large";
	  
	  if(pMove.innerHTML === "X" || pMove.innerHTML === "O"){
	  } else {
	    pMove.innerHTML=turn;
	    if(turn == "X"){
	      turn = "O";
	    } else {
	      turn = "X";
	    }
	  }
	}
	```

####Refactoring...

...As my first Project, I wrote redundant code.
I would first replace that with one function that would place an `O` or `X` on the selected Element `div`. Since the turn variable is working, everytime the function runs the turn has to change. Through that, I wouldn't need to write multiple `move` functions. 