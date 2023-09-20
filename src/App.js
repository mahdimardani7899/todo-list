import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Box from "./Box";
import Todo from "./Todo";
import List from "./List";


function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodos((last) => [...last, { text, status: false }]);
      toast("The task has been added", {
        type: "success",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    }
    setText("");
  };
  
  const removeTask = (x) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos((last) => {
          const help = [...last];
          help.splice(x, 1);
          return [...help];
        });
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
    // setTodos((last) => last.filter((item, index) => index != x));
  };

  const changeStatus = (index) => {
    setTodos((last) => {
      const help = JSON.parse(JSON.stringify(last));
      help[index].status = !help[index].status;
      return [...help];
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Box>
        <Todo text={text} setText={setText} addTodo={addTodo} />
      </Box>

      <Box>
        <List todos={todos} changeStatus={changeStatus} removeTask={removeTask}/>
      </Box>
    </div>
  );
}
export default App;
