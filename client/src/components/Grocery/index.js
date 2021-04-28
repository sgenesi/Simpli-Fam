import React, { useState } from "react";
import "./Grocery.css";
import styled from 'styled-components';
import { v4 as uuidv4 } from "uuid";

const arr = () => {
    let data = localStorage.getItem("data");
    if (data) return JSON.parse(localStorage.getItem("data"));
    else return [];
};

const Item = ({ id, complete }) => {
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

    const [item, setItem] = useState("");
    const [list, setList] = useState(arr);
    const [value, onChange] = useState(new Date());

    const handleSubmit = (e) => {
        const newItem = {
            id: uuidv4(),
            item: item,
            complete: false,
        };
        e.preventDefault();
        if (item && item.length <= 25) {
            setList([...list, newItem]);
            setItem("");
        }
    };

    React.useEffect(() => {
        localStorage.setItem("data", JSON.stringify(list));
    }, [list]);

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const Button = styled.button`
  color: #023047;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #023047;
  border-radius: 3px;
`;
    return (
        <container>
            <h1>Grocery List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    value={item}
                    placeholder="Enter the items"
                    onChange={handleChange}
                />
                <Button>Add Item</Button>
                <br></br>
                <br></br>
            </form>
            <div>
                {list.map((c, id) => (
                    <Item
                        key={id}
                        id={c.id}
                        item={c.item}
                        list={list}
                        setList={setList}
                        complete={c.complete}
                        setItem={setItem}
                    />
                ))}
            </div>
            <div className="item">
                <input
                    type="text"
                    value={item}
                    style={{
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        color: "#219EBC",
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
        </container>

    );
};
export default Item;


