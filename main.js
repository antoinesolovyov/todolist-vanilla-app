import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

import { Input } from "./components/Input.js";
import { Table } from "./components/Table.js";

import { Item } from "./components/Item.js";
import { List } from "./components/List.js";

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

input.button.onclick = () => {
  if (input.input.value !== "") {
    const item = new Item(input.input.value);

    item.delete.addEventListener("click", () => {
      console.log(table.list.items);
      console.log(delete table.list.items[item.id]);
      table.list.count--;
      table.bar.unfinishedCount = table.list.count;
      table.bar.allCount = table.list.count;
      console.log(table.list.items, table.list.count);
      render();
    });

    table.list.items[item.id] = item;
    table.list.count++;

    table.bar.unfinishedCount = table.list.count;
    table.bar.allCount = table.list.count;

    render();
  }

  return false;
};

function render() {
  header.render(headerEl);
  input.render(articleEl);
  table.render(articleEl);
  footer.render(footerEl);
}
