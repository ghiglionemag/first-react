import { state } from "../../state";

export function initHomePage(conteinerEl) {
  const div = document.createElement("div");

  const tasks = state.getEnabledTasks();


  div.innerHTML = `
  <my-text tag="h1"> Mis pendientes </my-text>
  <div class="addPendiente">
  <input class="inputEl" type="text" placeholder="Nuevo pendiente">
  <my-button class="add-button">Agregar</my-button>
  </div>
  <div class ="listaConteiner">
   <ul class="lista"> 
   </ul>
  </div>
  `;

  const listaEl = div.querySelector(".lista");

  function createTasks(items) {
    listaEl.innerHTML = "";
    for (const item of items) {
      const toDoItemEl = document.createElement("my-todoitem");
      toDoItemEl.setAttribute("title", item.title);
      toDoItemEl.setAttribute("id", item.id);
      if (item.completed) {
        toDoItemEl.setAttribute("checked", "true");
      }
      toDoItemEl.addEventListener("change", (e: any) => {
        state.changeItemState(e.detail.id, e.detail.value)
      })
      listaEl.appendChild(toDoItemEl);
    }
  }

  state.subscribe(() => {
    createTasks(state.getEnabledTasks());
  });

  createTasks(tasks);

  const listaDeItemsHTML = tasks.map(
    (t) => `
  <my-todoitem title=${t.title} ${t.completed ? "checked" : ""}></my-todoitem>
  `
  );

  div.querySelector(".add-button").addEventListener("click", () => {
    const inputEl = document.querySelector("input");
    let title = inputEl.value
    state.addTask(Math.random(), title);
  });

  const style = document.createElement("style");
  style.innerText = `
  * {
    box-sizing: border-box;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  .addPendiente{
    padding: 0px 30px;
  }
  .listaConteiner{
    padding: 0px 30px;
  }
  @media (min-width: 899px){
    .addPendiente{
     flex-direction: row;
     align-items: center;
     justify-content: space-around
     
    }
    .lista{
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      gap: 15px;
    }
  }
  .lista{
    padding-inline-start: 0px;
    list-style-type: none;
  }
  input{
    width: 100%; 
    line-height: 55px;
    margin: 12px 0px;
    border-radius: 20px;
    font-family: "Roboto";
    font-size: 22px;
    text-align: center;
  }
  @media (min-width: 899px){
    input{
     flex-grow: 1;
    }
  }
  `;
  conteinerEl.appendChild(style);
  conteinerEl.appendChild(div);
}
