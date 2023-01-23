import React, { useState } from "react";
import "./UI.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/index";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppBar } from "@mui/material";

const UI = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.Reducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <AppBar>
          <h2 style={{fontFamily:'georgia'}}>Welcome to Todo List</h2>
        </AppBar>
      </div>

      <div>
        <h3 style={{paddingTop:'1cm'}}>Add Your Todo List Here</h3>
      </div>
      <div>
        <input
          className="Input"
          placeholder="Add Items here..."
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />
        <AddIcon
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        />
        <div>
          {list.map((elem) => {
            return (
              <>
                <section style={{ display: "flex" }} key={elem.id}>
                  <h3 className="List">{elem.data}</h3>
                  <DeleteIcon
                    style={{ paddingTop: "1cm" }}
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  />
                </section>
              </>
            );
          })}
        </div>
      </div>

      <div style={{ paddingTop: "1cm" }}>
        <button className="Button" onClick={() => dispatch(removeTodo())}>
          Remove All
        </button>
      </div>
      
      
    </>
  );
};

export default UI;
