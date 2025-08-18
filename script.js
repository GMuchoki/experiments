const inputElement = document.getElementById('display');
const addTaskBtn = document.getElementById('add-button');
const listElement = document.getElementById('toDoList');

addTaskBtn.addEventListener('click', () => {

    const inputText = inputElement.value;

    if (inputText !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputText;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = "✅";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        inputElement.value = "";

        doneBtn.addEventListener('click', () => {
            newItem.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);
        });

        

    } else {
        alert("Please type something before adding!");
    }
});



inputElement.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        addTaskBtn.click()
    }
});
