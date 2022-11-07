import { format, compareAsc } from "date-fns";
import "./index.js";

const addProject = document.querySelector(".addProj");
const projInput = document.querySelector(".projectInput");
const submitButton = document.querySelector(".submitBtn");
const cancelButton = document.querySelector(".cancelBtn");
const todoItems = document.querySelector(".list");
const listItems = document.querySelector(".listItems");

class toDos {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}

const defaultItem = new toDos(
	"Climbing",
	"Go climbing at least 5 days a week",
	"Everyday",
	"High Priority"
);

todoItems.appendChild(listItems);
const itemDefault = document.createElement("li");
listItems.appendChild(itemDefault);

itemDefault.innerText = `Title:${defaultItem.title}
Description:${defaultItem.description} 
Due Date:${defaultItem.dueDate} 
Priority:${defaultItem.priority}`;

addProject.addEventListener("click", () => {
	projInput.removeAttribute("hidden");
});

cancelButton.addEventListener("click", () => {
	projInput.hidden = true;
});

submitButton.addEventListener("click", () => {});
