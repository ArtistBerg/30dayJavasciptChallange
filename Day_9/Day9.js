// ACTIVITY __[ 1 ]__ : Selecting and manipulating Elements

    // TASK 1: change content
    const chap1 = document.getElementById('1')
    console.log(document.getElementById('1'));
    chap1.innerHTML = 'Changed Text : WTF';
    chap1.style.color = 'Yellow'

    // TASK 2: change background color with class 
    // class = chap2; USING queryselector 
     document.querySelector('.chap2').style.color = 'blue'


// ACTIVITY __[ 2 ]__ : creating and appending element 

    // TASK 1: creating>>
    const div = document.createElement('div');
    console.log(div);

    // giving div attributes
        div.className = "super"
        div.id = "delete"
        div.setAttribute("title", "generated title")
        div.style.backgroundColor = "gray"
        div.style.color = "black"

    const textNode = document.createTextNode("Through Javascript")//creating a textnode
    div.appendChild(textNode)//appending textnode to div
    //         OR
    // div.innerText = "Through Javascript"

    document.body.appendChild(div)//appending div to document
    
    
    // TASK 2: appending >>  add 'li' to already existing "ul"
        // creating li
        const li = document.createElement('li');
        console.log(li);
        li.innerText="Number 3: Hawks"//bcz NO 1,2 are listed

        document.querySelector('.heroes').appendChild(li)


// ACTIVITY __[ 3 ]__ : Removing Element

    // TASK 1: removing "Through Javascript"
    const del =document.querySelector('#delete')
    del.remove();


    // TASK 2: removing last child
    const del2 = document.querySelector('li:last-child')
    del2.remove();//hawks will be removed


// ACTIVITY __[ 4 ]__ : Modifying Attributes and Classes

    // TASK 1: aot >> naruto
        // document.getElementById('img').setAttribute('src',' /images/naruto.jpg')
        //do it in browser console

    // TASK 2: add  class to a HTML tag
     var addClass = document.getElementById("3");//class="blow"
     addClass.classList.add("jug")//now "blow jug"

    //(remove)
    var removeClass = document.getElementById("3");//class="blow jug"
    addClass.classList.remove("blow")//class="jug"
    console.log(addClass);


// ACTIVITY __[ 5 ]__ : Event handling

// Changes the text content on click
    function myfunction(){
        document.querySelector('.naruto').innerText = "you fool!"
    }
    function myfunction1(){
        document.querySelector('.random').innerText = "WTF"
    }