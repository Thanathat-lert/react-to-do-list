// @flow
import "./App.css";
import { ToDoItem } from "./model";

const logo = new URL("./assets/google_ai_gemini.svg", import.meta.url);

export function App() {
  const toDoTitle = {
    ToDo: "To Do",
    Done: "Done",
  };
  const toDoItem: ToDoItem[] = [
    { name: "Do something", dueDate: "12-03-2025", statusId: 1 },
    { name: "Do something 2", dueDate: "12-03-2025", statusId: 1 },
  ];
  return (
    <>
      <StatusTitle title={toDoTitle.ToDo} />
      <ToDoTable toDoList={toDoItem} />
      <StatusTitle title={toDoTitle.Done} />
      <ToDoTable toDoList={toDoItem} />
    </>
  );
}

function ToDoItem({ name, dueDate }) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" name="todo-checkbox" />
        </td>
        <td>{name}</td>
        <td>
          <input type="date" name="todo-duedate" />
        </td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </>
  );
}

function ToDoTable({ toDoList }) {
  const ToDoList = toDoList as ToDoItem[];
  const toDoRows = toDoList.map((item) => (
    <ToDoItem name={item.name} dueDate={item.dueDate} />
  ));
  return (
    <>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
        {toDoRows}
      </table>
    </>
  );
}

function StatusTitle({ title }) {
  return (
    <>
      <h1 className="status-title">{title}</h1>
    </>
  );
}
