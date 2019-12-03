import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

import { Input } from "./components/Input.js";
import { Table } from "./components/Table.js";

import { Item } from "./components/Item.js";

const anchor = document.body;

const headerEl = document.createElement("header");
const articleEl = document.createElement("article");
const footerEl = document.createElement("footer");

anchor.append(headerEl, articleEl, footerEl);

const header = new Header(headerEl);
const footer = new Footer(footerEl);

const input = new Input();
const table = new Table();

render();

// unfinished tab click event
table.bar.unfinished.addEventListener("click", () => {
  table.bar.isUnfinished = true;
  table.bar.isFinished = false;
  table.bar.isAll = false;

  render();
});

// finished tab click event
table.bar.finished.addEventListener("click", () => {
  table.bar.isUnfinished = false;
  table.bar.isFinished = true;
  table.bar.isAll = false;

  render();
});

// all tab click event
table.bar.all.addEventListener("click", () => {
  table.bar.isUnfinished = false;
  table.bar.isFinished = false;
  table.bar.isAll = true;

  render();
});

// input button onclick
input.button.onclick = () => {
  if (input.input.value) {
    const item = new Item(input.input.value);

    input.input.value = "";

    table.list.items[item.id] = item;
    table.list.count++;
    table.list.unfinishedCount++;

    table.bar.unfinishedCount = table.list.unfinishedCount;
    table.bar.finishedCount = table.list.finishedCount;
    table.bar.allCount = table.list.count;

    // checkbox click event
    item.checkbox.addEventListener("click", () => {
      if (item.isFinished) {
        item.task.style.textDecoration = "none";
        item.checkbox.style.backgroundImage = "url('icons/square-icon.svg')";
        item.isFinished = false;
        table.list.unfinishedCount++;
        table.list.finishedCount--;
        table.bar.unfinishedCount = table.list.unfinishedCount;
        table.bar.finishedCount = table.list.finishedCount;
      } else {
        item.task.style.textDecoration = "line-through";
        item.checkbox.style.backgroundImage =
          "url('icons/check-square-icon.svg')";
        item.isFinished = true;
        table.list.unfinishedCount--;
        table.list.finishedCount++;
        table.bar.unfinishedCount = table.list.unfinishedCount;
        table.bar.finishedCount = table.list.finishedCount;
      }

      render();
    });

    // delete click event
    item.delete.addEventListener("click", () => {
      if (item.isFinished) {
        table.list.finishedCount--;
        table.bar.finishedCount = table.list.finishedCount;
      } else {
        table.list.unfinishedCount--;
        table.bar.unfinishedCount = table.list.unfinishedCount;
      }

      delete table.list.items[item.id];
      table.list.count--;
      table.bar.allCount = table.list.count;

      render();
    });

    render();
  }

  return false;
};

function render() {
  header.render();
  input.render(articleEl);
  table.render(articleEl);
  footer.render();
}
