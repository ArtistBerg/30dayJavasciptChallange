// ACTIVITY 1

const button1 = document.querySelector('.content-change')
console.log(button1);

// button function
function myFunction(){
    document.querySelector('.para-change').innerText = "you fool! After passing my siblings off to family and friends, he drove to Cincinnati to meet my mother."
}
function ToggleImage(){
    let img = document.getElementById('img');
    switch (img.style.visibility) {
        case "hidden":
            img.style.visibility = "visible"
            break;
            
        default:
            img.style.visibility = "hidden"
            break;
    }
}

// ACTIVITY 2 :mouseover and mouseout event listener

const textElement = document.querySelector('.text-hover');
const originalBGColor = textElement.style.backgroundColor;
const originalColor = textElement.style.color;
// mouseover
textElement.addEventListener( 'mouseover', () => {
    textElement.style.backgroundColor = 'orange'
    textElement.style.color = 'black'
});
//mouseout
textElement.addEventListener( 'mouseout', () => {
    textElement.style.backgroundColor = originalBGColor
    textElement.style.color = originalColor
});

// ACTIVITY 3 : keydown and keyup event listener

    // let's say I want to change BG-color of some text when someone presses "r" when being on that page
    document.addEventListener( 'keydown' , colorRed)
        
    function colorRed(event){
        console.log(event.key);
        if(event.key == 'r'){
            document.querySelector('.turnRed').style.backgroundColor = 'red'
        }
    }


    // when holded key being released then this event is triggered
    const inputBox = document.getElementById('name')
    const printText = document.getElementById('demo')
    
    inputBox.addEventListener('keyup', () => {
        printText.textContent = inputBox.value;
    });

    

// ACTIVITY 4: Form events

    // TASK 1: form event
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event => {
        event.preventDefault();// Prevent default form submission


        // access form data
        const formData =  new FormData(form);

        //cover FormData to object (optional and better)
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        console.log(formDataObject);
    }))

    // Task 2 : change
    const input2 = document.getElementById('myProgram');

    input2.addEventListener('change', () => {
        console.log('Input changed:',input2.value);
    });


    
// ACTIVITY 5: Event deligation

    // Task 1: event deligation
    const cities  = document.getElementById('cities') 
   
    cities.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') { 
            // Handle the click on the list item
            console.log(event.target.textContent);
        }
    });

    //TASK 2: event lister on parent tag whoose child are dynamically added
        // step 1: add a new child element
        const li = document.createElement('li')//list item
        const student1 = document.createTextNode("Ramesh");
        li.appendChild(student1);

        //appending li
        const ul = document.querySelector('.student') //selecting ul
        ul.appendChild(li)
    //step 2: adding event listener
    ul.addEventListener('click', () => {
         ul.style.backgroundColor= "pink"// pink color when clicked
    } )

