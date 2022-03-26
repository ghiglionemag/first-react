import { state } from "../../state";

export class ToDoItem extends HTMLElement {
  shadow: ShadowRoot;
  title: string;
  checked: boolean = false;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.title = this.getAttribute("title") || "";
    this.checked = this.hasAttribute("checked");
    this.id = this.getAttribute("id");

    const style = document.createElement("style");
    style.innerText = `
    .root{
        display: flex;
        flex-direction: column;
        justify-content: left;
      
        font-size: 19px;
        padding: 22px 13px;
        background: #FFF599;
        min-width: 311px;
        height: 112px;
        margin: 19px 0px;
        border-radius: 20px;
    }
    @media (min-width: 899px){
      .root{
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       
      }
    }
    .checkbox-input{
      background: #FFFFFF;
      border: 1px solid #000000;
      width: 31px;
      height: 31px;
    }
    .titulo.checked{
      text-decoration: line-through;
    }  
    
    `;
    this.shadow.appendChild(style);
    this.render();
  }
  addListeners() {

    const checkEl = this.shadow.querySelector(".checkbox-input");
    checkEl.addEventListener("click", (e) => {
      const target = e.target as any;
      checkEl.classList.add("titulo.checked");
      console.log(checkEl);
      const event = new CustomEvent("change", {
        detail: {
          id: this.id,
          value: target.checked,

        }
      });
      this.dispatchEvent(event)
    });
  }
  render() {
    const divEl = document.createElement("div");
    divEl.innerHTML = `
    <div class="root">
    <my-text tag="p" class="titulo ${this.checked ? "checked" : ""}">${this.title}</my-text>
    <div>
    <input class="checkbox-input" type="checkbox" ${this.checked ? "checked" : ""}/>
    </div>
    </div>
    `;

    this.shadow.appendChild(divEl);
    this.addListeners();

  }

}
customElements.define("my-todoitem", ToDoItem);
