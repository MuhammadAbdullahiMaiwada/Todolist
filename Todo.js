document.addEventListener("DOMContentLoaded", function() {
var task = document.getElementById("task");
var add = document.getElementById("add");
var taskList = document.getElementById("taskList");


add.addEventListener("click", function(){
var taskVal = task.value;

console.log(taskVal);   
if(taskVal.trim() === ""){
    alert("Cannot add an empty task !!!");
    //return;
} ;

var taskItem = document.createElement("li");

taskItem.innerHTML = `
    <span>${taskVal}<span/>
    <button class="delete">Delete<button/>
`;
taskList.appendChild(taskItem);

var deleteBtn = taskItem.querySelector(".delete")

deleteBtn.addEventListener("click", function(){
    taskList.removeChild(taskItem);
})
taskList.appendChild(taskItem);
}); 
})