window.onload = function(){
		var allAlert = document.getElementsByClassName("alert");
		for (var i=0;i<allAlert.length;i++){
			allAlert[i].style.visibility = "hidden";
		}

// basic Calculator
	document.getElementById("basic-calc").addEventListener("click",function(){
		document.getElementById("basic-answer-alert").style.visibility = "visible";
		var noOne = parseFloat(document.getElementById("basic-num-1").value);
		var Ops = document.getElementById("basic-operation").value;
		var noTwo = parseFloat(document.getElementById("basic-num-2").value);
		var result = "";

		var mathOperator = {
			'+': function(a,b) {return a + b},
			'-': function(a,b) {return a - b},
			'*': function(a,b) {return a * b},
			'/': function(a,b) {return a/b}
		}	
		document.getElementById("basic-answer-alert").innerHTML = mathOperator[Ops](noOne,noTwo);
	})

// trip cost calculator
	document.getElementById("trip-calc").addEventListener("click",function(){
		document.getElementById("trip-answer-alert").style.visibility = "visible";
		var distance = parseFloat(document.getElementById("trip-distance").value);
		var mpg = parseFloat(document.getElementById("trip-mpg").value);
		var cost = parseFloat(document.getElementById("trip-cost").value);
		var speed = parseFloat(document.getElementById("trip-speed").value);
		var result = "";

		if (speed<60){
			result = distance / mpg * cost;
		}else{
			result = distance / (mpg - (speed - 60) * 2) * cost;
		}
		document.getElementById("trip-answer-alert").innerHTML = result;
	})

// BMI
	// Metric-Imperial Switch
	var toggle = 0;
	document.getElementById("bmi-units").addEventListener("change",function(){
		if (toggle == 0){
			document.getElementById("bmi-mass-unit").innerHTML = "pound";
			document.getElementById("bmi-height-unit").innerHTML = "inch";
			toggle = 1;
		}else{
			document.getElementById("bmi-mass-unit").innerHTML = "kg";
			document.getElementById("bmi-height-unit").innerHTML = "m";
			toggle = 0;
		}
	})
	// Calculator
	document.getElementById("bmi-calc").addEventListener("click",function(){
		document.getElementById("bmi-answer-alert").style.visibility = "visible";
		var mass =  parseFloat(document.getElementById("bmi-mass").value);
		var height = parseFloat(document.getElementById("bmi-height").value);
		var units = document.getElementById("bmi-units").value;

		var unitOperator = {
			'metric': function(mass,height){
				return (mass / ( height * height));
			},
			'imperial': function(mass,height){
				return (mass / ( height * height))*703;
			}
		}

		var result = unitOperator[units](mass,height);

		document.getElementById("bmi-answer-alert").innerHTML = result;
	})

// Mortage
	document.getElementById("mortgage-calc").addEventListener("click",function(){
		document.getElementById("mortgage-answer-alert").style.visibility = "visible";
		var loan = parseFloat(document.getElementById("mortgage-loan").value);
		var apr = parseFloat(document.getElementById("mortgage-apr").value);
		var term = parseInt(document.getElementById("mortgage-term").value);

		var result = loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1);

		document.getElementById("mortgage-answer-alert").innerHTML = result;

	})
};
