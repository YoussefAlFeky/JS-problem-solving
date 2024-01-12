


// **************************************Task 1 >> Average <<*****************************************


function Average(num1 , num2, num3 , num4 , num5 , num6 , num7 , num8 , num9 , num10 , num11 , num12 , num13){

    var Sum = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13) / 13;

    return Sum;
}

console.log(Average(4 ,5 ,8,4,9,8,6,3,2,11 , 30 , 25 , 67));







// **************************Task 2 ***************************************************************************//

function Area(height , base){
    return 0.5 *(height * base)
}

console.log(Area(40 , 20));


//************************************  task 3  ******************************************************* */


// age = (years × 365) + (months × 31) + days 


function age(years){
    var days = 365 * years;
    
    return console.log(days);

}
age(25);



//*****************************************************task 4**************************************** */


function Sum(num1 , num2){

    var sum = num1 + num2;

    return sum;
}

console.log(Sum(55 , 44));


//***************************************task 5*********************************************** */




function FirstOne(names){
    var names = ["Yasser" , "Mariam" , "Ramy" , " Osma" , "Hamed" , "Abdorahman" ," Tarek" , "Fahmy" , "Alaa" , "Mazen" , "Wael" , "Youssef"];

    return console.log(names[0]  );

}

FirstOne();


//***************************************task 6************************************************ */

function showName(myName){

    var myName = document.getElementById('myName');

    myName.innerHTML = "Youssef Gamal ElFeky";

}
showName();

//************************************Task 7************************************ */

function convert( hours){

    var seconds = hours  * 60 * 60 *60;

    return console.log((seconds ));

}

convert(4 );


//*******************************task 8*************************************** */


function total(num1 , num2 , num3 , num4){
    var total = document.getElementById('total');
    var sum = num1 + num2 + num3 + num4;

    if(sum > 350 ){

        return total.innerHTML = "true";


    } else if ( sum < 350){

        return total.innerHTML = "false";
    }
}

total( 4 ,5 ,1, 44);



//**************************************** Task 9 ******************************************** */



function search(num){

    if(num == 0){

        return true
    }
    else{
        return false
    }


}

 console.log (search(8));




//************************************** Task 10************************************************* */


function Mod(num1 , num2){
    var mod = num1 % num2 ;
    return mod
}

console.log(Mod( 7,8));


//************************************** Task 11************************************************* */



function find(num1 , num2){

    if(num1 > num2){
        console.log(` the largest number is : ${num1}`);


    }else if(num1 == num2){
        console.log("Both of numbers are equal");


    }else {
       console.log("Please try again later")
    }

}

find(4754679675978423 , 234556);


//************************************** Task 12************************************************* */

    function isNumber(variable) {
        return !isNaN(variable) && typeof variable === 'number';
      }
      
      // Example usage
      var variable1 = 42;
      var variable2 = 3.14;
      var variable3 = "Hello, World!";
      
      console.log(isNumber(variable1));  
      console.log(isNumber(variable2));  
      console.log(isNumber(variable3));  




  
//************************************** Task 13************************************************* */



function getCurrentDate() {
    var currentDate = new Date();
    return currentDate;
  }
  
  // Example usage
  var currentDate = getCurrentDate();
  console.log(currentDate);