/*function addItem() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput");
    li.innerHTML = input.value;
    input.value = " ";
    document.getElementById("myList").appendChild(li);
}*/
 


let ul = document.getElementById("myList");
let btn = document.getElementById("btn");
let input = document.getElementById("myInput");
let feedback = document.getElementById("feedback");

function addItem() {
   
    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
        input.focus();
        
        // clear input //
        
    } else {
        feedback.textContent = "Please write something first.";
    }
}
 
btn.addEventListener("click", addItem);
