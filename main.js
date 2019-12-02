import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

import { Input } from "./components/Input.js";
import { Table } from "./components/Table.js";

const header = new Header();
const footer = new Footer();

const input = new Input();
const table = new Table();

header.render(document.body);

input.render(document.body);
table.render(document.body);

footer.render(document.body);
