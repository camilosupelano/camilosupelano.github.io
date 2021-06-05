
        
function check() {

    /*INPUT
            We will get the dates
    */
        let now = new Date();
        let month = now.getMonth();
        let dayOfMonth = now.getDate();
        let dayOfWeek = now.getDay();
    
        //Holidays
                let nyear = new Date(2022, 0, 1);
                let indepen = new Date(2021, 6 , 4);
                let xmas = new Date(2021, 11, 25);
        
                let holiday = nyear | indepen | xmas;
        
        //Weekends
                let weekend = dayOfWeek == 6 | 0;
                
        let message = 0
        
    /*PROCESSING
            Conditional if today is = to a normal week day = get up!
            If it is weekend or holiday = sleep in
    */
        if (now == holiday | weekend ){
    
            message = "Sleep in."
    
        }else{
    
            message = "Get up!"
        }
    
    
        //OUTPUT The message will be displayed
    
        document.getElementById("output").innerHTML = message 
    }