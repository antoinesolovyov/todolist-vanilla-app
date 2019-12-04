import { HeaderComponent } from "./components/HeaderComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";

import { InputComponent } from "./components/InputComponent.js";
import { TableComponent } from "./components/TableComponent.js";

import { ItemComponent } from "./components/ItemComponent.js";

const anchor = document.body;

const headerElement = document.createElement("header");
const articleElement = document.createElement("article");
const footerElement = document.createElement("footer");

anchor.append(headerElement, articleElement, footerElement);

const headerComponent = new HeaderComponent(headerElement);
const footerComponent = new FooterComponent(footerElement);
headerComponent.render();
footerComponent.render();

const input = new InputComponent(articleElement);
const table = new TableComponent(articleElement);

table.render();

const bar = table.bar;
const list = table.list;

// unfinished tab click event
bar.unfinished.addEventListener("click", () => {
  bar.isUnfinished = true;
  bar.isFinished = false;
  bar.isAll = false;

  table.render();
});

// finished tab click event
bar.finished.addEventListener("click", () => {
  bar.isUnfinished = false;
  bar.isFinished = true;
  bar.isAll = false;

  table.render();
});

// all tab click event
bar.all.addEventListener("click", () => {
  bar.isUnfinished = false;
  bar.isFinished = false;
  bar.isAll = true;

  table.render();
});

// input button onclick
input.button.onclick = () => {
  if (input.input.value) {
    const item = new ItemComponent(input.input.value);

    input.input.value = "";

    list.addItem(item);

    bar.unfinishedTabText = list.unfinishedCount;
    bar.finishedTabText = list.finishedCount;
    bar.allTabText = list.count;

    // checkbox click event
    item.checkbox.addEventListener("click", () => {
      if (item.isFinished) {
        item.task.style.textDecoration = "none";
        item.checkbox.style.backgroundImage = "url('icons/square-icon.svg')";
        item.isFinished = false;
        list.unfinishedCount++;
        list.finishedCount--;
        bar.unfinishedTabText = list.unfinishedCount;
        bar.finishedTabText = list.finishedCount;
      } else {
        item.task.style.textDecoration = "line-through";
        item.checkbox.style.backgroundImage =
          "url('icons/check-square-icon.svg')";
        item.isFinished = true;
        list.unfinishedCount--;
        list.finishedCount++;
        bar.unfinishedTabText = list.unfinishedCount;
        bar.finishedTabText = list.finishedCount;
      }

      table.render();
    });

    // delete click event
    item.delete.addEventListener("click", () => {
      if (item.isFinished) {
        list.finishedCount--;
        bar.finishedTabText = list.finishedCount;
      } else {
        list.unfinishedCount--;
        bar.unfinishedTabText = list.unfinishedCount;
      }

      delete list.items[item.id];
      list.count--;
      bar.allTabText = list.count;

      table.render();
    });

    table.render();
  }

  return false;
};
