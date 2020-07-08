let todos = ["Buy new turtle"];

let input = prompt("What would you like to do?");


while (input !== "quit") {

    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }

    //ask again for new input
    input = prompt("What would you like to do?");
}

console.log("OK YOU QUIT THE APP");

function listTodos() {
    console.log("**********");
    todos.forEach(function name(todo, index) {
        console.log(index + ": " + todo);
    })
    console.log("**********");
}

function addTodo() {
    //Ask for new todo
    let newTodo = prompt("Enter new todo");
    //Add to todos array
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    //ask for index of todo to be deleted
    //delete that todo

    let index = prompt("Enter index of todo to delete")

    //splice()

    todos.splice(index, 1);
    console.log("Deleted todo");
}