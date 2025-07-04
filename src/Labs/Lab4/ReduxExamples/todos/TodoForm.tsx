import { ListGroup, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <Button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      <Form.Control
        value={todo.title}
        onChange={(e: any) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </ListGroup.Item>
  );
}

// breaks out todo form
// todo to be added or edited
// event handler to update todo's title
// event handler to add new todo
// event handler to update todo
// invoke add new todo
// invoke update todo
// input field to update todo's title
// update title on each key stroke 