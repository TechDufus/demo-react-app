import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>ListGroup</h1>
            {items.length === 0 && <p>There are no items in the list.</p>}
            < ul className="list-group" >
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul >
        </>
    );
}

export default ListGroup;
