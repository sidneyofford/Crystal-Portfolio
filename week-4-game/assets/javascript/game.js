var wins= 0;
 	var losses= 0;
 	var adding=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	
 	var red = Math.floor((Math.random() * 12) + 1);
 	var white = Math.floor((Math.random() * 12) + 1);
 	var green = Math.floor((Math.random() * 12) + 1);
 	var blue = Math.floor((Math.random() * 12) + 1);



 	var updateAdding = function () {
 		$('.adding').empty();
 		$('.adding').append(adding);

 		$('#wins').empty();
 		$('#wins').append(wins);

 		$('#losses').empty();
 		$('#losses').append(losses);
 	}


 // restart game
 		var restart = function (){
 			adding = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('.total').empty();
 			$('.total').append(total);

 			var red = Math.floor((Math.random() * 12) + 1);
 			var white = Math.floor((Math.random() * 12) + 1);
 			var green = Math.floor((Math.random() * 12) + 1);
 			var blue = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	


 	var game = function (){
 		if (adding == total) {
 			wins = wins + 1;
 			alert("You win!");
 			restart();
 		} else if (adding > total) {
 			losses = losses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

 	$('.total').append(total);
 	$('.adding').append(adding);

 	$( document ).ready(function() {
 		$('#red').click(function(){
 			adding = adding + red;
 			game();
 		})

 		$('#white').click(function(){
 			adding = adding + white;
 			game();
 		})

 		$('#green').click(function(){
 			adding = adding + green;
 			game();
 		})

 		$('#blue').click(function(){
 			adding = adding + blue;
 			game();
 		})
 	});
