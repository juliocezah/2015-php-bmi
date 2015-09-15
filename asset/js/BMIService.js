var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
			url: 'services/bmi.action.php',
			data: {'weight': weight, 'height': height},
			success: function(result){
				callback(parseFloat (result));
			},
			error: function(){
				callback(null);			}
		});
	},
	
	getDescription: function (index) {
	var text = " ";
		
		if (index < 17){
			text = "ATENÇÃO!!! Você está MUITO abaixo do peso.";
		}
		else if (index >= 17 && index <= 18,49){
			text = "ATENÇÃO!!! Você está abaixo do peso.";
		}
		else if (index >= 18,5 && index <= 24,99){
			text = "Você está no seu peso ideal.";
		}
		else if (index >= 25 && index <= 29,99){
			text = "ATENÇÃO!!! Você está acima do peso.";
		}
		else if (index >= 30 && index <= 34,99){
			text = "ATENÇÃO!!! Obesidade de grau I";
		}
		else if (index >= 35 && index <= 39,99){
			text = "ATENÇÃO!!! Obesidade de grau II";
		}
		else if (index > 40){
			text = "ATENÇÃO!!! Obesidade de grau III";
		}
		
		return text;
	}
	
};