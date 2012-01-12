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
	function storeData(){
		var id 	= Math.floor(Math.random()*10000001);
		var item			 = {};
			// INFO
			item.fname		 = ["Name: ", $('fname').value];
			item.rank 		 = ["Rank: ", $('rank').value];
			item.last4		 = ["Last 4: ", $('last4').value];
			item.age		 = ["Age: ", $('age').value];
			item.phone		 = ["Phone #: ", $('phone').value];
			// GEAR
			item.flakjacket  = ["Flak Jacket: ", $('flak').value];
			item.serial		 = ["Flak Serials: ", $('plate#').value];
			item.kevlar		 = ["Kevlar: ", $('helmet').value];
			item.frogGear	 = ["Frog Gear: ", $('frog').value];
			item.cammies	 = ["Cammies: ", $('cammies').value];
			item.miscGear	 = ["Misc Gear: ", $('misc').value];
			// MISC
			item.medical	 =
			item.papers		 =
	}
	
	var medicalCheck = ["Choose:", "Yes", "No", "Almost"];
	makeCats();
	
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);
	
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
