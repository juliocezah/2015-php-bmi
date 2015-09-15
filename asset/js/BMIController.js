var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			weight = parseFloat(form.weight.value),
			height = parseFloat(form.height.value),
			result = 0;
			result2 = "";
		
		var callback = function(result){
			BMIController.showResult(result);
		};
		
		BMIService.getIndex(weight, height, callback);
		
		var callback2 = function(result2){
			BMIController.showDescription(result2);
		};
		
		BMIService.getDescription(callback2);
		
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
	},
	
	showDescription: function(result2){
		
		var descriptionResult = document.querySelector('.result2');
		descriptionResult.innerHTML = result2;
		
	}

};

//initialization
BMIController.init();
