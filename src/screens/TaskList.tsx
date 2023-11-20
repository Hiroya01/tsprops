import React,{useEffect} from "react";
import Task from "./Task";

const TaskList = () => {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response= await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                const json_= await response.json();
                setTodos(json_);
            }catch (e) {
                 console.log(e);
            }
        };
        fetchData();
    }, []);
   
    return (
        <div>
            {todos.map((todo:{id:number;title:string}) => (
                <Task key={todo.id} {...todo} />
            ))}
        </div>
    );
}
export default TaskList;
