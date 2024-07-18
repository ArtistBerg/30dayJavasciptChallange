// We are gonna learn about control structure

// ACTIVITY __[ 1 ]__: check if the number is zero, positive or negative

    let num = -9;
    if (num < 0) {
        console.log(`${num} is negative`);
    } else if(num > 0) {
        console.log(`${num} is postive`);
    } else {
        console.log(`${num} is zero`);
    }

    // person eligivle to vote or not

    let ageOfPerson = 3;
    if (ageOfPerson >= 18) {
        console.log(`you are eligible to vote`);
    } else {
        console.log(`you are not eligible to vote`);
    }


// ACTIVITY __[ 2 ]__ : Nested if-else

    let a = 35;
    let b = 21;
    let c = 10;
    
        if (a > b) {
            if (a > c) {
                console.log(` a is the LARGEST`);
            }
        } 
        else if(b > c){
            console.log(` b is the LARGEST`);
        }
        else{
            console.log(` c is the LARGEST`);
        }

// ACTIVITY __[ 3 ]__ :

    let dayOfTheWeek = 1;
    switch (dayOfTheWeek) {
        case 1: console.log("Monday");
        break;
        case 2: console.log("tuesday");
        break;
        case 3: console.log("wednesday");
        break;
        case 4: console.log("thursday");
        break;
        case 5: console.log("friday");
        break;
        case 6: console.log("saturday");
        break;
        case 7: console.log("sunday");
        break;
        default:console.log("Enter number between 1 - 7 only");
        break;
    }    



// ACTIVITY __[ 4 ]__ : help of ternary operator to find out even/odd

    let ranDom = 31;

    const evenOdd = (ranDom % 2 == 0) ? 'even' : 'odd'
    
console.log(evenOdd);


// ACTIVITY __[ 5 ]__ : check leap year
// > leap year is divisible by 4, but if divisible by 100 then must be able to divisible by 400 too.
    let currentYear = 2024;

    function isLeapYear(year) {
        if (year % 4 === 0 ) {
            if (year % 100 === 0) {
                return year % 400 === 0
            }
            return true
        }
        else{
            return false
        }
    }
     
    if (isLeapYear(currentYear)) {
        console.log("leap year");
    }else{
    console.log("Not a leap year");
    }