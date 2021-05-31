
		function footware() {

			// INPUT: the weather selection

			let weather = document.getElementById("selection").value;
			let message = "";



			/* PROCESSING:
				It will identify the footware according to the weather
			*/

			switch (weather) {
				case 'hot':
					message="Sandals";
					break;
				case 'rain':
					message="galoshes";
					break;
				case 'snow':
					message="boots";
					break;
				default:
					message="shoes";
			}


			// OUTPUT: The footware

			document.getElementById("output").innerHTML = message;

		}
