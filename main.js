window.addEventListener("DOMContentLoaded", function(){

	
	
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute('id', 'groups');
		for(var i=0, j=medicalCheck.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = medicalCheck[i];
			makeOption.setAttribute('value', optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	
	var medicalCheck = ["Choose:", "Yes", "No", "Almost"];
	makeCats();
	
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	*/
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
