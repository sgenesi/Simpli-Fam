import React from "react";
import "./Item.css";

const Item = ({ id, item, list, setList, complete }) => {
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
    );
};
export default Item;
