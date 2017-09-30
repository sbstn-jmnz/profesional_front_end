import { TodoListController } from "components/todoList.component"

describe("TodoListComponent", () => {
    let controller

    beforeEach(() => {
        controller = new TodoListController()
    })

    it("Should have a defined controller", () => {
        expect(controller).toBeInstanceOf(TodoListController)
    })

})
