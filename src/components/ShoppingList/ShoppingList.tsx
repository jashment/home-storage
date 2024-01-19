import { useState } from "react";
import tw from "tailwind-styled-components";

const ShoppingList = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1', checked: false },
        { id: 2, text: 'Item 2', checked: false },
        // Add more items as needed
    ]);

    const handleCheckboxChange = (itemId: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <TWShoppingContainer>
            <TWItemsContainer>
                {items.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`item-${item.id}`}
                            checked={item.checked}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="mr-2"
                        />
                        <label
                            htmlFor={`item-${item.id}`}
                            className={item.checked ? 'line-through text-gray-500' : ''}
                        >
                            {item.text}
                        </label>
                    </div>
                ))}
                <div className="flex flex-row">
                    <TWInput
                        type="text"
                    ></TWInput>
                    <TWButton>Add</TWButton>
                </div>
            </TWItemsContainer>
        </TWShoppingContainer>
    );
}

const TWItemsContainer = tw.div`
    flex
    flex-col
    items-center
    space-y-2
`

const TWShoppingContainer = tw.h1`
    flex
    flex-col
`

const TWInput = tw.input`
    border-solid
    border
    border-black
    rounded-md
`

const TWButton = tw.button`
    border-solid
    border
    border-lime-300
    rounded-md
    ml-2
`

export default ShoppingList