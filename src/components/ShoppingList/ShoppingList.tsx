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
        </TWShoppingContainer>
    );
}

const TWShoppingContainer = tw.div`
    flex
    flex-col
    items-center
    space-y-2
`

export default ShoppingList