import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1,
                title: "Go shopping",
                completed: false
            }, {
                id: 2,
                title: "Go for a walk",
                completed: true
            }
        ]
    }

    createTodo(title) {
        const id = Date.now();
        this.todos.push({
            id,
            title,
            complete: false
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch (action.type){
            case "CREATE_TODO": {
                this.createTodo(action.title)
            }
        }
    }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;