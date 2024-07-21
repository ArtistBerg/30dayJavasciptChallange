// Let's learn about Arrays

// ACTIVITY __[ 1 ]__: Array creation and Access

    // TASK 1: array and log it
    const arr = [1,2,3,4,5]
    console.log(`Original: ${arr}`);

    // TASK 2: access first and last element
    console.log(`${arr[0]} and ${arr[arr.length - 1]}`);


// ACTIVITY __[ 2 ]__: Array Methods (basics)

    // TASK 1: push method
    arr.push(89);
    console.log(`pushed 89 : ${arr}`);

    // TASK 2: pop method
    arr.pop();
    console.log(`poped : ${arr}`);

    // TASK 3: shift method(CHANGES ORIGINAL ARRAY)
    arr.shift();
    console.log(`shift : ${arr}`);

    // TASK 4: unshift method(CHANGES ORIGINAL ARRAY)
    arr.unshift(36,43)
    console.log(`unshift : ${arr}`);

// ACTIVITY __[ 3 ]__: Array Methods (intermidiate)

    // TASK 1: map method with twice the value
    function myfunction(num){
        return num*2
    }
    const doubleArr = arr.map(myfunction)
    console.log(`after map : ${doubleArr}`);

    // TASK 2: filter method (doesn't change the ORIGINAL)
    function evenFn(num){
        if (num % 2 === 0) {
            return num
        }
    }
    const evenArray = arr.filter(evenFn)
    console.log(evenArray);

    // TASK 3: reduce method (sums all element)
    newArray1 = [1, 5, 7, 8, 9];

    const sum = newArray1.reduce((total, item) => total + item)
    console.log(sum);
   

    const sum1 = arr.reduce((total, item) => total + item)
    console.log(sum1);

// ACTIVITY __[ 3 ]__: Array Iteration

    // TASK 1: for loop 
    myArray = [1, 56, 2, 57]
    for (let index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
    }

    // TASK 2: forEach loop
    myArray.forEach(element => {
        console.log(element);
    });

// ACTIVITY __[ 5 ]__: Multi-dimensional array

    // TASK 1: create 2D array
    const myArray2 = [[1,2,8],[4,5,6]]
    console.log(myArray2);

    // TASK 2: print element of 2d array
    console.log(myArray2[0][2]);