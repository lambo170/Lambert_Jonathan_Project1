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
	
	//Paperwork Radio
	function getSelectedRadio(){
		var radios = document.forms[0].paper;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				paperValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue(){
		if($('flak').checked){
			flakValue = $('flak')
		}else{
			flakValue = "No"
		}
			if($('helmet').checked){
				helmetValue = $('helmet')
			}else{
				helmetValue = "No"
			}
				if($('frog').checked){
					frogValue = $('frog')
				}else{
					frogValue = "No"
				}
				 	if($('cammies').checked){
						cammiesValue = $('cammies')
					}else{
						cammiesValue = "No"
					}
						if($('misc').checked){
							miscValue = $('misc')
						}else{
							miscValue = "No"
						}
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
			item.flakjacket  = ["Flak Jacket: ", flakValue];
			item.serial		 = ["Flak Serials: ", $('plate#').value];
			item.kevlar		 = ["Kevlar: ", helmetValue];
			item.frogGear	 = ["Frog Gear: ", frogValue];
			item.cammies	 = ["Cammies: ", cammiesValue];
			item.miscGear	 = ["Misc Gear: ", miscValue];
			// MISC
			item.medical	 = ["Medical Status: ", $('groups').value];
			item.papers		 = ["Paperwork Status: ", ]
			
		localStorage.setItem(id, JSON.stringify(item));
		alert("Data is Saved!");
	}
	
	var medicalCheck = ["Choose:", "Yes", "No", "Almost"],
		paperValue = "No",
		flakValue = "No",
		helmetValue = "No",
		frogValue = "No",
		cammiesValue = "No",
		miscValue = "No";
	makeCats();
	
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);
	
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
