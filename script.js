const inputElement = document.getElementById('display');
const addTaskBtn = document.getElementById('add-button');
const listElement = document.getElementById('toDoList');

// Load saved tasks from localStorage on page load
window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(savedTasks) || [];

    taskList.forEach((task) => {
        const newItem = document.createElement('li');
        newItem.textContent = task.text;

        if (task.done) {
            newItem.style.textDecoration = "line-through";
        }

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        // ✅ toggle done/undone
        doneBtn.addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.forEach((t) => {
                if (t.text === newItem.firstChild.textContent) {
                    if (t.done) {
                        newItem.style.textDecoration = "none";
                        t.done = false;
                    } else {
                        newItem.style.textDecoration = "line-through";
                        t.done = true;
                    }
                }
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // ❌ delete task
        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(t => t.text !== newItem.firstChild.textContent);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    });
});

// Add new task
addTaskBtn.addEventListener('click', () => {
    const inputText = inputElement.value;

    if (inputText !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputText;

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push({
            text: inputText,
            done: false
        });
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        inputElement.value = "";

        // ✅ toggle done/undone
        doneBtn.addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.forEach((t) => {
                if (t.text === newItem.firstChild.textContent) {
                    if (t.done) {
                        newItem.style.textDecoration = "none";
                        t.done = false;
                    } else {
                        newItem.style.textDecoration = "line-through";
                        t.done = true;
                    }
                }
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // ❌ delete task
        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(t => t.text !== newItem.firstChild.textContent);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    } else {
        alert("Please type something before adding!");
    }
});

// Add task with Enter key
inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});






/* function createTaskElement(task) {
    // 1. Make <li>
    // 2. Add text
    // 3. Add ✅ and ❌ buttons
    // 4. Attach event listeners (toggle + delete)
    // 5. Append to list
}
 */




/* const inputElement = document.getElementById('display');
const addTaskBtn = document.getElementById('add-button');
const listElement = document.getElementById('toDoList');

// ✅ Reusable function
function createTaskElement(task) {
    const newItem = document.createElement('li');
    newItem.textContent = task.text;

    if (task.done) {
        newItem.style.textDecoration = "line-through";
    }

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "✅";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";

    newItem.appendChild(doneBtn);
    newItem.appendChild(deleteBtn);
    listElement.appendChild(newItem);

    // ✅ Toggle done/undone
    doneBtn.addEventListener('click', () => {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.forEach((t) => {
            if (t.text === task.text) {
                t.done = !t.done;
                newItem.style.textDecoration = t.done ? "line-through" : "none";
            }
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // ❌ Delete task
    deleteBtn.addEventListener('click', () => {
        listElement.removeChild(newItem);

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t.text !== task.text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

// Load tasks from localStorage
window.addEventListener('load', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => createTaskElement(task));
});

// Add new task
addTaskBtn.addEventListener('click', () => {
    const inputText = inputElement.value;

    if (inputText !== "") {
        const task = { text: inputText, done: false };

        createTaskElement(task); // 👈 No duplicate code!

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        inputElement.value = "";
    } else {
        alert("Please type something before adding!");
    }
});

// Add with Enter key
inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
 */