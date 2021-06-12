      /* Defining Table
       * Input:enter a number
       * Processing:add odd numbers until it reaches the number inputted
       * Output:all the odd numbers adding up to the inputted number
       */
      function sumOdds() {
        let digits = parseInt(document.getElementById("number").value);
        let sum= 0;


        for (let n = 1; n <= digits; n += 2) {
          sum += n;
        }

        document.getElementById("output").innerHTML = sum;
      }