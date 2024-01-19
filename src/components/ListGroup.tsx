import { useState } from "react";

// Props interface
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>There are no items in the list.</p>}
            <div>
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
            </div>
        </>
    );
}

export default ListGroup;
