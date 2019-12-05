import { HeaderComponent } from "./components/HeaderComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";
import { InputComponent } from "./components/InputComponent.js";
import { TableComponent } from "./components/TableComponent.js";

import { ItemComponent } from "./components/ItemComponent.js";
import { ItemObject } from "./ItemObject.js";

const headerAnchor = document.createElement("header");
const articleAnchor = document.createElement("article");
const footerAnchor = document.createElement("footer");

document.body.append(headerAnchor, articleAnchor, footerAnchor);

const headerComponent = new HeaderComponent(headerAnchor);
const footerComponent = new FooterComponent(footerAnchor);
const inputComponent = new InputComponent(articleAnchor);
const tableComponent = new TableComponent(articleAnchor);

headerComponent.render();
footerComponent.render();
inputComponent.render();
tableComponent.render();

// load items from local storage
const keys = Object.keys(localStorage);

for (let key of keys) {
    const itemObject = JSON.parse(localStorage.getItem(key));
    const itemComponent = new ItemComponent(itemObject);

    tableComponent.list.items[itemComponent.id] = itemComponent;
	tableComponent.list.count++;
	
    if (!itemComponent.isFinished) tableComponent.list.unfinishedCount++;
    else tableComponent.list.finishedCount++;

    tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
    tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
    tableComponent.bar.allTabText = tableComponent.list.count;

    // checkbox click event
    itemComponent.checkbox.addEventListener("click", () => {
		checkboxHandler(itemObject, itemComponent)
	});

    // delete click event
    itemComponent.delete.addEventListener("click", () => {
        deleteHandler(itemObject, itemComponent)
    });

    tableComponent.render();
}

// input button onclick
inputComponent.button.onclick = () => {
    try {
        if (inputComponent.input.value) {
            const itemObject = new ItemObject(Date.now(), inputComponent.input.value, false
            );
            const itemComponent = new ItemComponent(itemObject);

            inputComponent.input.value = "";

            tableComponent.list.items[itemComponent.id] = itemComponent;
			tableComponent.list.count++;
			
            if (!itemComponent.isFinished) tableComponent.list.unfinishedCount++;
            else tableComponent.list.finishedCount++;

            localStorage.setItem(itemObject.id, JSON.stringify(itemObject));

            tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
            tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
            tableComponent.bar.allTabText = tableComponent.list.count;

            // checkbox click event
			itemComponent.checkbox.addEventListener("click", () => {
				checkboxHandler(itemObject, itemComponent)
			});

            // delete click event
            itemComponent.delete.addEventListener("click", () => {
                deleteHandler(itemObject, itemComponent)
            });

            tableComponent.render();
        }
    } catch (e) {
        console.log(e);
    }

    return false;
};

// unfinished tab click event
tableComponent.bar.unfinished.addEventListener("click", () => {
    tableComponent.bar.isUnfinished = true;
    tableComponent.bar.isFinished = false;
    tableComponent.bar.isAll = false;

    tableComponent.render();
});

// finished tab click event
tableComponent.bar.finished.addEventListener("click", () => {
    tableComponent.bar.isUnfinished = false;
    tableComponent.bar.isFinished = true;
    tableComponent.bar.isAll = false;

    tableComponent.render();
});

// all tab click event
tableComponent.bar.all.addEventListener("click", () => {
    tableComponent.bar.isUnfinished = false;
    tableComponent.bar.isFinished = false;
    tableComponent.bar.isAll = true;

    tableComponent.render();
});

// checkbox handler
function checkboxHandler(itemObject, itemComponent) {
	if (itemComponent.isFinished) {
		itemComponent.task.style.textDecoration = "none";
		itemComponent.checkbox.style.backgroundImage = "url('icons/square-icon.svg')";
		itemComponent.isFinished = false;
		tableComponent.list.unfinishedCount++;
		tableComponent.list.finishedCount--;
		tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
		tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;

		itemObject.isFinished = false;
		itemObject.textDecoration = "none";
		itemObject.backgroundImage = "url('icons/square-icon.svg')";
	} else {
		itemComponent.task.style.textDecoration = "line-through";
		itemComponent.checkbox.style.backgroundImage = "url('icons/check-square-icon.svg')";
		itemComponent.isFinished = true;
		tableComponent.list.unfinishedCount--;
		tableComponent.list.finishedCount++;
		tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
		tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;

		itemObject.isFinished = true;
		itemObject.textDecoration = "line-through";
		itemObject.backgroundImage =
			"url('icons/check-square-icon.svg')";
	}

	localStorage.setItem(itemObject.id, JSON.stringify(itemObject));

    tableComponent.render();
}

// delete handler
function deleteHandler(itemObject, itemComponent) {
	if (itemComponent.isFinished) {
		tableComponent.list.finishedCount--;
		tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
	} else {
		tableComponent.list.unfinishedCount--;
		tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
	}

	localStorage.removeItem(itemObject.id);
	delete tableComponent.list.items[itemComponent.id];
	tableComponent.list.count--;
	tableComponent.bar.allTabText = tableComponent.list.count;

	tableComponent.render();
}