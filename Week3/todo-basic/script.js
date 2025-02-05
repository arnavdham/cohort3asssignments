let todos=[];
function Add()
{
const todo=document.querySelector("input").value;
todos.push(todo);
render();
}

function Delete(index)
{
    todos.splice(index,1);
    render();
}

function Edit(index) {
    const todoDiv = document.getElementById("todo-" + index); 
    const currentText = todos[index]; 

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    const saveButton = document.createElement("button");
    saveButton.innerHTML = "<img src='https://static-00.iconduck.com/assets.00/save-icon-512x512-552twxqx.png' border='0' width='20px' height='20px'/>";
    saveButton.onclick = function () {
        SaveEdit(index, input.value); 
    };

    todoDiv.innerHTML = "";
    todoDiv.appendChild(input);
    todoDiv.appendChild(saveButton);
}

function SaveEdit(index, newText) {
    todos[index] = newText; 
    render(); 
}

function createnewdiv(todo, index) {
    const div = document.createElement("div");
    div.id = "todo-" + index;
    const h1 = document.createElement("h1");
    h1.innerHTML = todo;

    const button1 = document.createElement("button");
    button1.setAttribute("onclick", "Edit(" + index + ")");
    button1.innerHTML = 
    "<img src='https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png' border='0' width='20px' height='20px'/>";

    const button = document.createElement("button");
    button.setAttribute("onclick", "Delete(" + index + ")");
    button.innerHTML = 
    "<img src='https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png' border='0' width='20px' height='20px'/>";


    div.style.display = "flex";
    div.style.alignItems = "center"; 
    div.style.gap = "10px"; 

    div.appendChild(h1);
    div.appendChild(button1);
    div.appendChild(button);
    return div;
}


function render()
{
    document.getElementById("listoftodo").innerHTML="";
    for(let i=0;i<todos.length;i++)
    {
        const div=createnewdiv(todos[i],i);
        document.getElementById("listoftodo").appendChild(div);
    }
}