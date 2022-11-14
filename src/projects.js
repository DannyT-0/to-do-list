import { format, compareAsc } from "date-fns";
import "./index.js";

const addProject = document.querySelector(".addProj");
const projInput = document.querySelector(".projectInput");
const submitButton = document.querySelector(".submitBtn");
const cancelButton = document.querySelector(".cancelBtn");
const todoItems = document.querySelector(".list");
const listItems = document.querySelector(".listItems");

const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#dueDate");
const taskHighPriority = document.querySelector("#highPriority");
const taskLowPriority = document.querySelector("#lowPriority");

class toDos {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}

todoItems.appendChild(listItems);

addProject.addEventListener("click", () => {
	projInput.removeAttribute("hidden");
});

cancelButton.addEventListener("click", () => {
	projInput.hidden = true;
});

submitButton.addEventListener("click", () => {
	const itemDefault = document.createElement("li");
	listItems.appendChild(itemDefault);
	const newToDo = new toDos(
		taskTitle.value,
		taskDescription.value,
		taskDueDate.value,
		taskHighPriority.value,
		taskLowPriority.value
	);
	itemDefault.innerText = `Title:${newToDo.title}
    Description:${taskDescription.value}
    Due Date:${taskDueDate.value}
    Priority:${taskHighPriority.value}
    OtherPrj: ${taskLowPriority.value}`;
	projInput.hidden = true;
});
