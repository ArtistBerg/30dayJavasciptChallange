//  let's learn about OBJECTS and operations on objects

// ACTIVITY __[ 1 ]__: Object Creation and Access 

    // TASK 1: create a object
    const book1 ={
        title: "The alchemist",
        author: "Paulo Coelho",
        year: 1988,
    };
    console.log(book1);

    // Access the title
    console.log(book1.title);
    

// ACTIVITY __[ 2 ]__: Object Methods 

    // TASK 1: this method used
    const book2 = {
        title: "Can't Hurt me",
        author: "David Goggins",
        year: 2019,
        func: function () {
            return (this.title + " by " + this.author);
        },
    };
    console.log(book2.func());


    // TASK 2: update a parameter
    // Lets say year 2018 is wrong then 2019 is right!
    book2.year = 2018;
    console.log(book2);

// ACTIVITY __[ 3 ]__: Nested Objects

    // TASK 1: library
    const bhesanLibrary = {
        name: "BhesanLibrary",
        books: [ {title: "The rudest book ever"},
                 {title: "Mindset"},
                {title: "Eat that Frog"},
        ]
    }
    console.log(bhesanLibrary);

    // TASK 2: access the nested properties
    // 2 ways
    //        :objectName.property1Name.property2Name 
    //        :objectName["property1Name"]["property2Name"]  

    console.log(bhesanLibrary.name);
    for (let index = 0; index < bhesanLibrary.books.length; index++) {
        console.log(bhesanLibrary.books[index].title);
    }
  

// ACTIVITY __[ 4 ]__:this keyword

    // TASK 1: same as TASK 1 of ACTIVITY  2
    console.log("\n");

// ACTIVITY __[ 5 ]__: Object Iteration

    // TASK 1: for..in loop
    
    const newObject = {
        name : "Eat that frog",
        chapters : 21,
        author: "Brian Tracy",
        pages: 108,
    }

    // printing this newObject
    for (const key in newObject) {
            console.log(`${key} : ${newObject[key]}`);
    }

    // TASK 2: object.keys      >methods
    //         object.values      ^
    console.log(Object.keys(newObject));
    console.log(Object.values(newObject));


