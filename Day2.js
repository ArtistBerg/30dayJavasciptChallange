// ACTIVITY __[ 1 ]__
let chintu = 12;
let monty = 10;

    // add two numbers
    let ageSum = chintu + monty
    console.log(ageSum);

    // subtract two numbers
    let minus = chintu - monty
    console.log(minus);

    // multiply two numbers
    let guna = chintu * monty
    console.log(guna);

    // divide two numbers
    let bhangya = chintu / monty
    console.log(bhangya);

    // find the remainder
    let shesh = chintu % monty
    console.log(shesh);
    
// ACTIVITY __[ 2 ]__
 
    // use += operator
    chintu += 2;
    console.log(chintu);

    // use -= operator
    monty -= 1;
    console.log(monty);

// ACTIVITY __[ 3 ]__

    //  < > operators
    console.log(chintu < monty);

    // <= >= operators
    console.log(chintu >= monty);

    // == , === operators 
    let string1 = "9"
    let num1 = 9;
    let num2 = 5;

    console.log( string1 == num1 );
    console.log( string1 == num2 );
    console.log( string1 === num1 );
    console.log( string1 === num2 );

// ACTIVITY __[ 4 ]__

    // && operator
    if(string1 == num1 && string1 !== num2){
        console.log("num1 and NOT num2");
    }

    // || operator
    if(string1 == monty || string1 == chintu){
        console.log("monty or chintu");
    }

    // ! opearator
    console.log( chintu != monty)
    
// ACTIVITY __[ 5 ]__

    // ternary operator [condition ? true : false]
    // returns value of "true" or "false" based on condition
   const ternaryOperator = (num1 >= 0) ? 'num1 is positive': 'num1 is negative'
   console.log(ternaryOperator);