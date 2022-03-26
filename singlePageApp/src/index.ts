import { state } from "./state";

import "./components/text";
import "./components/button";
import "./components/to-do-item";
import { initHomePage } from "./pages/home";


(function () {

  initHomePage(document.querySelector(".root"));
  state.init();
})();
