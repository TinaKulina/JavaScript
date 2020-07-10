/*
//the third challenge

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/
// function for tip calculated
function calculatetips(bill){
    if ( bill < 50 ) { 
        return bill*0.2; 
    } else if (50 < bill && bill < 200 ) { return bill*0.15
    } else { return bill*0.1
    }
}

var arrayTips = [(calculatetips(124)), (calculatetips(48)), (calculatetips(268))];
console.log(arrayTips);
var arrayBill=[(calculatetips(124)+124), (calculatetips(48)+48), (calculatetips(268)+268)];
console.log(arrayBill);

// the forth challenge: who's fatter
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
*/
var John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 65, // kg
    height: 1.65, // meter
    calculateBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
    }
};
var Mark = {
    firstName: 'Mark',
    lastName: 'Polo',
    mass: 85, // kg
    height: 1.45, // meter
    calculateBMI: function(mass, height){
      this.BMI = this.mass/(this.height*this.height);
    }
}
John.calculateBMI()
Mark.calculateBMI()
console.log(John.BMI, Mark.BMI)

John.BMI > Mark.BMI ? console.log ('John\'s BMI is Higher than Mark\s'): console.log ('Mark\'s BMI is Higher than John\s');

if (John.BMI > Mark.BMI) {
    console.log ('John\'s BMI is Higher than Mark\s')
} else if (John.BMI < Mark.BMI) { console.log ('Mark\'s BMI is Higher than John\s');}
else { console.log ('the draw');}


// the fifth challenge: we pay tips
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/
var John = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid:[],
    calcTips: function(){
        for ( i=0; i < this.bills.length; i++){ 
                      if (this.bills[i]<50) { this.tips.push(this.bills[i]*0.2);
        } else if (this.bills[i]>50 && this.bills[i]<200) {
            this.tips.push(this.bills[i]*0.15);
        } else {this.tips.push(this.bills[i]*0.1);}
            }       
    },    
}
John.calcTips();
for ( i=0; i < John.bills.length; i++){ 
John.finalPaid.push(John.bills[i]+John.tips[i] ) }
console.log(John); 
var Mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    // determine tips depending on percentage
    calcTips: function(){
        for ( i=0; i < this.bills.length; i++){ 
            if (this.bills[i]<100) { this.tips.push(this.bills[i]*0.2);
        } else if (this.bills[i]>100 && this.bills[i]<300) {
            this.tips.push(this.bills[i]*0.1);
        } else {this.tips.push(this.bills[i]*0.25);}
            }       
    },    
}
Mark.calcTips();
console.log(Mark);

function average(array){
    var sum=0;
    for ( i=0; i < array.length; i++){
    sum += array[i];  
    } return sum/array.length;
} 

console.log(average(Mark.tips))
console.log(average(John.tips))
average(Mark.tips) > average(John.tips) ? console.log ('Mark\'s family wastes more money on the restaurant on average: ' + average(Mark.tips)): console.log ('John\'s family waste more money on the restaurant than Mark\'s on average: ' + average(John.tips));