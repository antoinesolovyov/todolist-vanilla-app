import { HeaderComponent } from "./components/HeaderComponent.js";
import { InputComponent } from "./components/InputComponent.js";
import { TableComponent } from "./components/TableComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";

import { ItemComponent } from "./components/ItemComponent.js";

import { Item } from "./objects/Item.js";
import { List } from "./objects/List.js";

const listObject = new List();

const bodyAnchor = document.body;

const headerAnchor = document.createElement("header");
const articleAnchor = document.createElement("article");
const footerAnchor = document.createElement("footer");

bodyAnchor.append(headerAnchor, articleAnchor, footerAnchor);

const headerComponent = new HeaderComponent(headerAnchor);
const inputComponent = new InputComponent(articleAnchor);
const tableComponent = new TableComponent(articleAnchor);
const footerComponent = new FooterComponent(footerAnchor);

headerComponent.render();
inputComponent.render();
tableComponent.render();
footerComponent.render();

// input button onclick
inputComponent.button.onclick = () => {
  try {
    if (inputComponent.input.value) {
      const itemObject = new Item(
        Date.now(),
        inputComponent.input.value,
        false
      );
      const itemComponent = new ItemComponent(itemObject);

      inputComponent.input.value = "";

      tableComponent.list.items[itemComponent.id] = itemComponent;

      localStorage.setItem(itemObject.id, JSON.stringify(itemObject));
      console.log(localStorage);
      listObject.getUnfinishedList();

      tableComponent.render();
    }
  } catch (ex) {
    console.log(ex);
  }

  return false;
};
