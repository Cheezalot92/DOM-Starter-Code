function madLibGame() {

const input1 = document.getElementById("name1").value;
const input2 = document.getElementById("game1").value;
const input3 = document.getElementById("character1").value;
const input4 = document.getElementById("noun1").value;
 



const textarea1 = `Hello my name is ${input1} , 
I like to play ${input2} 
and my favorite character is ${input3}. 
This lesson was actually ${input4}`;
document.getElementById("textarea").textContent = textarea1;
}