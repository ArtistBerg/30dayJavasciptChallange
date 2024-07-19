// Day 4 : loops
// NOTE: All the log are commented so to use one just dis-comment it ;)

// ACTIVITY __[ 1 ]__: For loop

    for(let i = 1; i <= 10; i++){
        // console.log(i);
    }

    console.log("table of 5");
    for(let i= 1; i <=10; i++){
        // console.log(`5 * ${i} = ${5*i}`);
    }


// ACTIVITY __[ 2 ]__: While loop

    let i = 1;
    let sum = 0;
    while (i<=10) {
        sum= sum+i;
        i++;
    }
    // console.log(sum);


// ACTIVITY __[ 3 ]__: Do.. while loop

    let a = 1;
    do{
        console.log(a);
        a++;
      }while(a<=5)

    a = 1;
    let int = 7;
    let factorial = 1
    do{
        factorial = factorial * a
        a++;
    }while(a<=int)      

    // console.log(`factorial is ${factorial} `)
   


// ACTIVITY __[ 4 ]__: Nested Loops

// pattern printing 
    let pattn;
    pattn += '\n'

    for (let i = 0; i < 5; i++) {
        for (let j= 0; j <= i; j++) {
            pattn += "* "
        }
        pattn += "\n"
    }
    // console.log(pattn);

// ACTIVITY __[ 5 ]__: Loop control statements

    
    for(let b = 1; b <=10; b++){
        if(b == 5){
            continue;
        }
        // console.log(`${b}`)
    }

    for(let b = 1; b <=10; b++){
        // console.log(`${b}`)
        if(b == 7){
            break;
        }
       
    }