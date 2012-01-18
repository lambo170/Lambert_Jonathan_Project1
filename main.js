//VFW Project Week 3
//Jon Lambert
//Class 0112


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
			var	paperValue = radios[i].value;
			}
		}
	}
	//Gear Checkboxes
	function getCheckboxValue(){
		if($('flak').checked){
			flakValue = $('flak').value;
		}else{
			flakValue = "No";
		}
			if($('helmet').checked){
				helmetValue = $('helmet').value;
			}else{
				helmetValue = "No";
			}
				if($('frog').checked){
					frogValue = $('frog').value;
				}else{
					frogValue = "No";
				}
				 	if($('cammies').checked){
						cammiesValue = $('cammies').value;
					}else{
						cammiesValue = "No";
					}
						if($('misc').checked){
							miscValue = $('misc').value;
						}else{
							miscValue = "No";
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
				$('PDChecklist').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	
	function storeData(key){
		//if no key, make brand new item with new key
		if(!key){
			var id 	= Math.floor(Math.random()*10000001);
		}else{
			id = key;
		}
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
			//radio
			item.papers		 = ["Paperwork Status: ", paperValue];
			
		localStorage.setItem(id, JSON.stringify(item));
		alert("Data is Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("No Data to be displayed.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); //Create our edit & Delete Buttons for each item
		}
	}
	// Make Item Links
	//Create the edit and delete buttons
	function makeItemLinks(key, linksLi){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "[Edit Info]_";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "_[Delete Info]";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem(){
		//grab data for item in local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		// show form
		toggleControls("off");
		
		//populate form fields with current localstorage values
		//INFO
		$('fname').value 	= item.fname[1];
		$('rank').value 	= item.rank[1];
		$('last4').value    = item.last4[1];
		$('age').value	    = item.age[1];
		$('phone').value    = item.phone[1];
		//GEAR
			//flakjacket
		if(item.flakjacket[1] === "Yes"){
			$('flak').setAttribute("checked", "checked");
		}
			//serial
		$('plate#').value	= item.serial[1];
			//kevlar
		if(item.kevlar[1] === "Yes"){
			$('helmet').setAttribute("checked", "checked");
		}
			//frogGear
		if(item.frogGear[1] === "Yes"){
			$('frog').setAttribute("checked", "checked");
		}
			//cammies
		if(item.cammies[1] === "Yes"){
			$('cammies').setAttribute("checked", "checked");
		}
			//miscGear
		if(item.miscGear[1] === "Yes"){
			$('misc').setAttribute("checked", "checked");
		}
		//MISC
			//medical
		$('groups').value  = item.medical[1];
			//papers RADIO
		var radios = document.forms[0].paper;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Yes" && item.papers[1] === "Yes"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value = "No" && item.papers[1] === "No"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value = "Almost" && item.papers[1] === "Almost"){
				radios[i].setAttribute("checked", "checked");
			}	
		}
		
		//remove the listener from the input save contact button
		save.removeEventListener("click", storeData);
		//change submit button value to edit button
		$('submit').value = "Edit Contact";
		var editSubmit = $('submit');
		//save the key value established in this function as a property of the editSubmit event
		// so we can use that value when we save the data we edited
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this information?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Info deleted.");
			window.location.reload();
		}else{
			alert("Info was not deleted.");
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data is deleted!");
			window.location.reload();
			return false;
		}
	}
	
	function validate(e){
		//define elements we want to check
		var getFname = $('fname');
		var getLast4 = $('last4');
		var getAge   = $('age');
		var getPhone = $('phone');
		var getMed   = $('groups');
		
		//reset error messages
		errMsg.innerHTML = "";
		getFname.style.border = "1px solid black";
		getLast4.style.border = "1px solid black";
		getAge.style.border = "1px solid black";
		getPhone.style.border = "1px solid black";
		getMed.style.border = "1px solid black";
			
			
		
		//get error messages
		var messageAry = [];
		//text area validation  								
		if(getFname.value === ""){
			var fNameError = "Please enter your full name.";
			getFname.style.border = "1px solid red";
			messageAry.push(fNameError);
		}
		if(getLast4.value === ""){
			var last4Error = "Please enter your full name.";
			getLast4.style.border = "1px solid red";
			messageAry.push(last4Error);
		}
		if(getAge.value === ""){
			var ageError = "Please enter your full name.";
			getAge.style.border = "1px solid red";
			messageAry.push(ageError);
		}
		if(getPhone.value === ""){
			var phoneError = "Please enter your full name.";
			getPhone.style.border = "1px solid red";
			messageAry.push(phoneError);
		}
		
		
		//medical validation
		if(getMed.value === "Choose:"){
			var medError = "Please choose Yes or No.";
			getMed.style.border = "1px solid red";
			messageAry.push(medError);
		}
		
		//if there were errors, display them
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i<j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			storeData(this.key);
		}
	}
	
	// Various Variables
	var medicalCheck = ["Choose:", "Yes", "No", "Almost"],
		paperValue,
		flakValue,
		helmetValue,
		frogValue,
		cammiesValue,
		miscValue,
		errMsg = $('errors');
		
	makeCats();
	
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", validate);
	
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
