import dispatcher from "../dispatcher";

export function createTodo(title) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        title
    });
}