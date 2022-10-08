document.getElementById("add_btn").onclick = action;
document.getElementById("remove_btn").onclick = action;
document.getElementById("clear_btn").onclick = action;

let todolist = [];


function action(e){
    let btn = e.target || e.srcElement;
    var list_screen = document.getElementById("list");
    
    if(btn.id == "add_btn"){
        todolist.push(input_bar.value)
        input_bar.value = null;
    }
    else if(btn.id == "remove_btn"){
        todolist.pop();
    }
    else{
        todolist = [];
    }

    list_screen.innerHTML = "";
    for(let i of todolist){
        list_screen.innerHTML += (todolist.indexOf(i)+1)+"."+" "+i+"<br />";
    }
    

}

