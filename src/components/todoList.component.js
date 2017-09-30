export class TodoListController {
    constructor(){
        this.todosList = []
    }
    addTodo(todo){
        this.todosList.push(todo)
    }
    toggleCheckTodo(index){
        this.todosList[index].completed = !this.todosList[index].completed
    }
}

export const TodoListComponent = {
    controller: TodoListController
}
