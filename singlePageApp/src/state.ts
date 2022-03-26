const state = {
  data: {
    tasks: [
      { id: 1, title: "Ir al banco", completed: false },
      { id: 2, title: "Curso manejo", completed: false },
      { id: 3, title: "Terce ítem", deleted: true },
    ],
  },
  listeners: [],

 init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData))
   },

  getState() {
    return this.data;
  },

  getEnabledTasks() {
    const currentState = this.getState();
    return currentState.tasks.filter((t) => !t.deleted);
  },
  addTask(id, title) {
    const currentState = this.getState();
    currentState.tasks.push({ id: id, title, completed: false });
    this.setState(currentState);
  },
  changeItemState(id, value) {
    const currentState = this.getState();
    const found = currentState.tasks.find((t) => t.id == id)
    found.completed = value;
    this.setState(currentState);
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
     localStorage.setItem("saved-state", JSON.stringify(newState))
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
