// Let's learn about features of ES6+
// ES means ECMAscript and 6 is 6th version of ecmascript 
// new operator will be introduced and learn more about them in mdn or w3school website

// ACTIVITY __[ 1 ]__: Template Literals (``)

    // TASK 1: use templates to creat a string that includes name and age
    let name1 = "Amit";
    let age = 21;

    console.log(`Name is ${name1} and ${age} old`);

    // TASK 2: multi-line string 
    let bookReview = "it is fabulous"
    let nameofBook = "The despecibles"

    console.log(`name of the book is ${nameofBook}`+` and ${bookReview}, I have read it.`);


// ACTIVITY __[ 2 ]__: Destructuring
 
    // TASK 1: destructuring      
    let a, b, rest;
    [a, b] = [10, 20];
    console.log(a);
    console.log(b);

    // TASK 2: extract title and author from book
    const book ={
        title:"Can't Hurt me",
        author:"David Goggins",
        year: 2018,
    }
    let t, auth;
    ({t,auth} = book);
    console.log(t);

// ACTIVITY __[ 3 ]__: Spread and Rest Operator

    //TASK 1: spread operator
         // without spread
            const numbersOne = [1, 3, 5];
            const numbersTwo = [2, 4, 6];
            const numbersCombined1 = [numbersOne, numbersTwo]
            console.log(numbersCombined1);// creates array with 2 array in it
        // with spread
            const numbersCombined2 = [...numbersOne, ...numbersTwo]
            console.log(numbersCombined2);//  creates array containing both array items/values;
            
    //TASK 2: rest operator
        // A function definition can only have one rest parameter.
        // The rest parameter must be the last parameter in the function definition.
        
        function sum( a, b, ...theArgs){//... is the rest operator here
            let total = 0;
            for (const arg of theArgs) {// a and b wil be not count
                total += arg;
            }
            return total;
        }
        console.log(sum(1,2,30));
 

// ACTIVITY __[ 4 ]__: Default parameters

//  TASK 1: function(para1, para2 = 1)
        function sumIt(para1, para2 = 1){
            return para1 + para2
        }
        console.log(sumIt(3));//will take para2 as 1 (default)


// ACTIVITY __[ 5 ]__: Enhanced Object Literals

   // TASK: creating a object with property jo naam badal sakti hai according to we imagine!     
    var name11 = "make";
    var i = 0;
    const laptop = {
        [name11 + ++i]: "Apple",
        [name11 + ++i]: "Dell",
        [name11 + ++i]: "HP"
    }

    console.log(laptop.make1);//"Apple"
    console.log(laptop.make2);//"Dell"
    console.log(laptop.make3);//"HP"
// this is pretty cool, don't you?