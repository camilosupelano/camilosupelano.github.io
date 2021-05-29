
		function footware() {

			// INPUT: the weather selection

			let weather = (document.getElementById("selection").value);
			let message = weather;



			/* PROCESSING:
				It will identify the footware according to the weather
			*/

			switch (message) {
				case 'hot':
					"Sandals";
					break;
				case 'rain':
					"galoshes";
					break;
				case 'snow':
					"boots";
					break;
				default:
					"shoes";
			}


			// OUTPUT: The footware

			document.getElementById("output").innerHTML = message

		}
