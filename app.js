$(document).ready(function(){
  $('.btn').on('click', function(){
		var $number = $('#number');
		var fizzBuzz = function ( num ) {
		var res = $('.result');
		res.empty();
			for (var i = 1; i <= num; i++) {
				if ( ( i%3 == 0 ) && ( i%5 == 0 ) ) {
					res.append("<span>FizzBuzz, </span>");
				} else if (i%3 == 0) {
					res.append("<span>Fizz, </span>");
				} else if (i%5 == 0) {
					res.append("<span>Buzz, </span>");
				} else {
					res.append("<span>" + i + ", </span>")
				}
			}
			return res;
		};

		if(+$number.val()) {
			fizzBuzz($number.val());
		} else {
			alert("Please enter an number!");
		}
		$number.val('');		
	});
});