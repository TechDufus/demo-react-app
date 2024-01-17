import { useState } from "react";

// typeProps is an interface that defines the type of the props object
interface typeProps {
    items: string[];
    heading: string;
    // (item: string | number) => void is a function that takes a string or number and returns nothing
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: typeProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
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
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul >
        </>
    );
}

export default ListGroup;
