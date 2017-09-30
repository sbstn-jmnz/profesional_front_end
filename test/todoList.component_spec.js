import { TodoListController } from "components/todoList.component"

describe("TodoListComponent", () => {
    let controller

    beforeEach(() => {
        controller = new TodoListController()
    })

    it("Should have a defined controller", () => {
        expect(controller).toBeInstanceOf(TodoListController)
    })

    it("Should add a todo item", () => {
        const todo = {
            name: "Learn Programming using component based approach",
            completed: false
        }
        controller.todosList = []

        controller.addTodo(todo)

        expect(controller.todosList.length).toBe(1)
        expect(controller.todosList[0]).toEqual(todo)
    })
})
