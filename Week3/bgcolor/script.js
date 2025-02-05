let colors=["red","yellow","black","purple","green","blue"];
render();

function Add()
{
const newcolor=document.querySelector("input").value;
colors.push(newcolor);
render();
}

function createnewbutton(color,index)
{
    const div = document.createElement("div");
    div.id = "Colour-" + index;
    const button = document.createElement("button");
    button.setAttribute("onclick", "Change(" + index + ")");
    button.innerHTML = color;
    button.style.color="white";
    button.style.backgroundColor=color;
    div.appendChild(button);
    return div;
}

function render()
{
    document.getElementById("Colorbuttonlist").innerHTML="";
    for(let i=0;i<colors.length;i++)
    {
        const div=createnewbutton(colors[i],i);
        document.getElementById("Colorbuttonlist").appendChild(div);
    }
}

function Change(index)
{
const body=document.querySelector("body");
body.style.backgroundColor=colors[index];
}