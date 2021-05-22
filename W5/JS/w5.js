
		/* 
			Input: The number in pounds
			Processing: To convert pounds into kilograms we require to divide the pounds by the 2.205
			Output: The kilograms
		*/
	function kilograms() {
		let pounds = parseInt(document.getElementById("pounds").value);
		let x = 2.205

		let result=(pounds/x).toFixed(1)+" kg";

		document.getElementById("output").innerHTML=result;
	}		

