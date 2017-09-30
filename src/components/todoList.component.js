export class TodoListController {
    constructor(){
        this.todosList = []
    }
    addTodo(todo){
        this.todosList.push(todo)
    }
}

export const TodoListComponent = {
    controller: TodoListController
}
