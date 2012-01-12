// VFW Project Week 2
// Jon Lambert
// Class 0112

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
	//Gear Checkboxes
	function getCheckboxValue(){
		if($('flak').checked){
			flakValue = $('flak').value
		}else{
			flakValue = "No"
		}
			if($('helmet').checked){
				helmetValue = $('helmet').value;
			}else{
				helmetValue = "No"
			}
				if($('frog').checked){
					frogValue = $('frog').value;
				}else{
					frogValue = "No"
				}
				 	if($('cammies').checked){
						cammiesValue = $('cammies').value;
					}else{
						cammiesValue = "No"
					}
						if($('misc').checked){
							miscValue = $('misc').value;
						}else{
							miscValue = "No"
						}
	}
	
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('PDChecklist').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	
	function storeData(){
		var id 	= Math.floor(Math.random()*10000001);
		getSelectedRadio();
		getCheckboxValue();
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
	
	function getData(){
		toggleControls("on")
		if(localStorage.length === 0){
			alert("No Data to be displayed.")
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1]
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All data is deleted!")
			window.location.reload();
			return false;
		}
	}
	
	// Various Variables
	var medicalCheck = ["Choose:", "Yes", "No", "Almost"],
		paperValue,
		flakValue,
		helmetValue,
		frogValue,
		cammiesValue,
		miscValue;
		
	makeCats();
	
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
