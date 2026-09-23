let tasks = ["work", "Eat", "Study"];

let addTask = (task) => {
    tasks.push(task);
    console.log(task + " has been added to my Tasks");
    return tasks.length;
}

let listAllTasks=() => {
    tasks.forEach((element) => {
        console.log(element);
    });
}

let deleteTask = (task) => {
    let index = tasks.indexOf(task);

    tasks.splice(index, 1);
    console.log(task + " has been removed from my Tasks");
    return tasks.length;
}

addTask("Sleep");
listAllTasks();
deleteTask("Eat");