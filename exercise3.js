//Creates a list of tasks
let tasks = ["work", "Eat", "Study"];
//Adds a new task
let addTask = (task) => {
    tasks.push(task);
    console.log(task + " has been added to my Tasks");
    return tasks.length;
}
//Displays all tasks
let listAllTasks=() => {
    tasks.forEach((element) => {
        console.log(element);
    });
}
//Deletes a task
let deleteTask = (task) => {
    let index = tasks.indexOf(task);

    tasks.splice(index, 1);
    console.log(task + " has been removed from my Tasks");
    return tasks.length;
}
//Runs the function
addTask("Sleep");
listAllTasks();
deleteTask("Eat");
