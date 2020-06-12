import { h, render } from "preact";
import { App } from "./components/app/App";

let root;
function init() {
  root = render(<App />, document.body, root);
}

init();
