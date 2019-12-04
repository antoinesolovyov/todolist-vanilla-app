import { HeaderComponent } from "./components/HeaderComponent.js";
import { InputComponent }  from "./components/InputComponent.js";
import { TableComponent }  from "./components/TableComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";

import { ItemComponent } from "./components/ItemComponent.js";

const bodyAnchor = document.body;

const headerAnchor  = document.createElement("header");
const articleAnchor = document.createElement("article");
const footerAnchor  = document.createElement("footer");

bodyAnchor.append(headerAnchor, articleAnchor, footerAnchor);

const headerComponent = new HeaderComponent(headerAnchor);
const inputComponent  = new InputComponent(articleAnchor);
const tableComponent  = new TableComponent(articleAnchor);
const footerComponent = new FooterComponent(footerAnchor);

headerComponent.render();
inputComponent.render();
tableComponent.render();
footerComponent.render();

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

// input button onclick
inputComponent.button.onclick = () => {

  try {
    
    if (inputComponent.input.value) {
      const itemComponent = new ItemComponent(inputComponent.input.value);

      inputComponent.input.value = "";

      tableComponent.list.items[itemComponent.id] = itemComponent;
      tableComponent.list.count++;
      tableComponent.list.unfinishedCount++;

      tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
      tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
      tableComponent.bar.allTabText = tableComponent.list.count;

      // checkbox click event
      itemComponent.checkbox.addEventListener("click", () => {
        if (itemComponent.isFinished) {
          itemComponent.task.style.textDecoration = "none";
          itemComponent.checkbox.style.backgroundImage = "url('icons/square-icon.svg')";
          itemComponent.isFinished = false;
          tableComponent.list.unfinishedCount++;
          tableComponent.list.finishedCount--;
          tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
          tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
        } else {
          itemComponent.task.style.textDecoration = "line-through";
          itemComponent.checkbox.style.backgroundImage =
            "url('icons/check-square-icon.svg')";
          itemComponent.isFinished = true;
          tableComponent.list.unfinishedCount--;
          tableComponent.list.finishedCount++;
          tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
          tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
        }

        tableComponent.render();
      });

      // delete click event
      itemComponent.delete.addEventListener("click", () => {
        if (itemComponent.isFinished) {
          tableComponent.list.finishedCount--;
          tableComponent.bar.finishedTabText = tableComponent.list.finishedCount;
        } else {
          tableComponent.list.unfinishedCount--;
          tableComponent.bar.unfinishedTabText = tableComponent.list.unfinishedCount;
        }

        delete tableComponent.list.items[itemComponent.id];
        tableComponent.list.count--;
        tableComponent.bar.allTabText = tableComponent.list.count;

        tableComponent.render();
      });

      tableComponent.render();
    }

  } catch(ex) {
    console.log(ex);
  }

  return false;
};
