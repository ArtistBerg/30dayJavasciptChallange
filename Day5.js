//  Let's learn about function 
// It's gonna be fun!

// ACTIVITY __[ 1 ]__: Function declaration
   
    // TASK 1: log the result
    function evenODD(a){
        if(a % 2 == 0){
            console.log("even");
        }else{
            console.log("odd");
        }
    }
    evenODD(4);

    // TASK 2: return the result
    function squareOf(a){
        return a*a;
    }
    const num = squareOf(7)    
    console.log(num);

// ACTIVITY __[ 2 ]__: Function expression

    // TASK 1: log the result
    function whichIsBigger(a,b){
        if(a > b){
            console.log(`${a} is greater than ${b}`);
        }else{
            console.log(`${b} is greater than ${a}`);
        }
    }
    // Running the function
    whichIsBigger(5,37);

    // TASK 2: Concatenate two strings
    let name1 = "AMIT " 
    let name2 = "JAGADA"
    function jodo(anyName_1, anyName_2){
        return anyName_1 + anyName_2;
    }
    const myName = jodo(name1, name2)
    console.log(myName);

// ACTIVITY __[ 3 ]__: Arrow function

    // Task 1: sum of two num 
    let twoNumSum = ((a,b)=> a + b)
    console.log(twoNumSum(4,76))
    console.log(typeof twoNumSum);

    // Task 2: check string contains a character
    let hospital = "Khadi Hospital";

    check_A = (string, shabd) => {return string.includes(shabd)}
    console.log(check_A(hospital, "b"))
    console.log(check_A("endoplasmicreticulum", "a"))
    

// ACTIVITY __[ 4 ]__: Function Parameters and Default Values

    // TASK 1: Product of Two
    productOfTwo = (a, b=10) => a * b;
    console.log(productOfTwo(4, 6));
    console.log(productOfTwo(4));

    // TASK 2: gretting to man / women
    greetings = (name1, age) => {
        return `Hello ${name1}! ${age} times Namaste`
    }
    console.log(greetings("Ashok", 62));


// ACTIVITY __[ 5 ]__:  Higher order Functions

    // TASK 1: function that takes function + number
    // here hello is first-order function 
    // callNtimes is higher order function
    hello = () => {
        console.log("hellow!");
    }

    function callNtimes(fn, num){
        for (let index = 0; index < num; index++) {
        fn();
        }
    }
    // calling the callNtimes function with parameter including hello function and 5 times which I want it to execute it;
    callNtimes(hello, 5)

    // TASK 2: function which calls another function before returning any value
    function area(r){
        return r/2 * circumference(r)
    }
    function circumference(radius){
        return 2 * Math.PI * radius
    }
    
    console.log(area(5));
