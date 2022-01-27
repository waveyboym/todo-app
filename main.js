let variableNumtoPass = 0;
let compltedToDo = 100;

let addNewToDo = function(){
    let getToDoVariable = document.getElementById("myText").value;
    let getIncompleteSection = document.querySelector(".incomplete-section");

    if(variableNumtoPass < 100 && (getToDoVariable != "")){
        getIncompleteSection.innerHTML = getIncompleteSection.innerHTML
                                        +'<div class="toDo toDo'+ variableNumtoPass +'">'                    
                                            +'<nav class="word"><h2>'+ getToDoVariable +'</h2></nav>'
                                            +'<nav class="delete" onclick="deleteTodo('+ variableNumtoPass +')"><h3>delete</h3></nav>'
                                            +'<div class="bar">'
                                            +'</div>'
                                            +'<nav class="complete" onclick="completeTodo('+ variableNumtoPass +')"><h4>complete</h4></nav>'
                                        +'</div>';
        ++variableNumtoPass;
    }
    else if(variableNumtoPass >= 100){
        alert("please refresh the browser as no more items can be added to the list");
    }
    else if(getToDoVariable == ""){
        alert("please enter text in the textbox");
    }
}

let deleteTodo = function(numTodDel){
    if(numTodDel < 100){
        let getToDoClass = document.querySelector(".toDo" + numTodDel);
        getToDoClass.remove();
    }
    else if(numTodDel >= 100){
        let getCompletedClass = document.querySelector(".completed" + numTodDel);
        getCompletedClass.remove();
    }
}

let completeTodo = function(numCompleteTodo){
    if(numCompleteTodo < 100){
        let getToDoClass = document.querySelector(".toDo" + numCompleteTodo + " .word h2");
        let getCompleteSection = document.querySelector(".complete-section");

        getCompleteSection.innerHTML = getCompleteSection.innerHTML
                                    + '<div class="completed completed'+ compltedToDo +'">'
                                        +'<nav class="word"><h2>'+getToDoClass.innerHTML +'</h2></nav>'
                                        +'<nav class="delete" onclick="deleteTodo('+ compltedToDo +')"><h3>delete</h3></nav>'
                                    +'</div>'
        ++compltedToDo;
        deleteTodo(numCompleteTodo);
    }
}