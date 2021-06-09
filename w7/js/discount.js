
    //Increase the sales on Tuesdays and Wednesday
    //if subtotal > $50 -10% off
    //+ 6% tax

    function total() {
        //INPUT the amounts, days of the week
    
        let subtotal = parseFloat(document.getElementById('subtotal').value);
        let dayOfWeek = new Date().getDay();
        let total = 0;
    
    
        //PROCESSING calculation according to conditionals
         

        if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)){
            total = (subtotal + (subtotal*.06))-(subtotal + (subtotal*.06))*0.1
        } else {total = subtotal + (subtotal*.06)
    
        }
        //OUTPUT the amount with the applied discount and the tax

         document.getElementById('output').innerHTML = "$" + total.toFixed(2);

        }
    
    