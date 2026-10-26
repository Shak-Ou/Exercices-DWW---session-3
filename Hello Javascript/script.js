console.log("Hello Javascript");

// we taget the html button element

// HTML related to the text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");

// HTML elements related to the color
let buttonColor = document.querySelector("#button-color"); 
let inputColor = document.querySelector("#input-color");

// HTML elements related to the target
let target = document.querySelector("#target");

console.log(button);

button.addEventListener("click", function(){
    //and then we do stuff
    console.log(inputName.value);
    // we replace the content of the target
    // with the one from the input
    target.innerHTML = inputName.value;
})

// We listen to the click event on the buttonColor
buttonColor.addEventListener("click", function(){
    // We get the Color Value
    // We update the title Color 
    target.style.color = inputColor.value;

})

/* 
    ##########################################

                 To Do List 

    ##########################################

*/

// 1 - Create the link to the htel elements
let buttonToDo = document.querySelector("#ToDoButton");
let inputToDo = document.querySelector("#ToDoInput");
let ToDo = document.querySelector("#ToDo");

// 2 - Listen to the click on the button
buttonToDo.addEventListener ("click", function(){
    // 3 - we get th einput value
    let currentToDo = inputToDo.value; 

    // 4 - we create a list element
    // We use the backticks (`) to create a litteral template
    // within a litteral template we can mix html and js
    let newLiElement = `<li>${currentToDo}</li>`;


    // 5 - we add it inside the ul element
    ToDo.innerHTML += newLiElement;

})