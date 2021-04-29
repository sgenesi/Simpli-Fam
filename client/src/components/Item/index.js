import React, { useState } from "react";
import "./Item.css";
import { v4 as uuidv4 } from "uuid";

const Item = ({ id, complete }) => {
    const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

    
    const remove = (id) => {
        setList(list.filter((el) => el.id !== id));
    };

    const handleComplete = (id) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        complete: !item.complete,
                    };
                }
                return item;
            })
        );
    };

    const handleItem = (e) => {
        if (e.target.value.length <= 25) {
            setList(
                list.map((el) => {
                    if (el.id === id) {
                        return {
                            ...el,

                            item: e.target.value,
                        };
                    }

                    return el;
                })
            );
        }
    };

    return (
        <div className="App">
            <h1>Grocery List</h1>
            <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit">Add Groceries</button>
      </form>
        <div className="item">
            <input
                type="text"
                value={item}
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "black",
                    fontSize: "20px",
                }}
                onChange={handleItem}
                className={complete ? "complete" : ""}
            />
            <img
                onClick={() => handleComplete(id)}
                src="https://img.icons8.com/metro/26/000000/checkmark.png"
                alt="Complete"
            />
            <img
                onClick={() => remove(id)}
                src="https://img.icons8.com/metro/26/000000/delete-sign.png"
                alt="Delete"
            />
        </div>
        </div>
    );
};
export default Item;