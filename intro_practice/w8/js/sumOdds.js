
      function sumOdds() {

        // Input:enter a number

        let digits = parseInt(document.getElementById("number").value);
        let sum= 0;

        // Processing: increase odd numbers

        for (let n = 1; n <= digits; n += 2) {
          sum += n;
        }

        //Output: The number when it reached to the input value

        document.getElementById("output").innerHTML = sum;
      }