import { FormEvent, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SyntheticEvent, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

interface idNameType {
	id: number | null
	text: string
	checked: boolean
}

const ShoppingList = () => {

	let allItems: any = [
		{ id: 1, text: 'Item 1', checked: false },
		{ id: 2, text: 'Item 2', checked: false }
	]

	const [items, setItems] = useState(allItems);
	const [idName, setIdName] = useState<idNameType>({ id: null, text: '', checked: false })

	const handleCheckboxChange = (itemId: Key | null | undefined) => {
		setItems((prevItems: any[]) =>
			prevItems.map((item: { id: number; checked: any; }) =>
				item.id === itemId ? { ...item, checked: !item.checked } : item
			)
		);
	};

	const handleTextInputChange = (e: { preventDefault: () => void; target: { value: any; }; }) => {
		e.preventDefault()
		console.log(items.length)
		setIdName({ id: items.length + 1, text: e.target.value, checked: false })
	}

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		if (!idName.text) {
			return
		}
		console.log(idName.id && (idName.id in items[items.length - 1]))
		if (idName.id &&  items[items.length - 1].id === idName.id) {
			return
		}
		setItems([...items, { id: idName.id, text: idName.text, checked: idName.checked }])
	}

	useEffect(() => {

	}, [items])

	return (
		<TWShoppingContainer>
			<TWItemsContainer>
				{items.map((item: { id: Key | null | undefined; checked: boolean | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
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
					<form onSubmit={handleSubmit}>
						<TWInput type="text" onChange={handleTextInputChange} value={idName.text || ''}></TWInput>
						<TWButton type='submit'>Add</TWButton>
					</form>
				</div>
			</TWItemsContainer>
		</TWShoppingContainer>
	);
};

const TWItemsContainer = tw.div`
    flex
    flex-col
    items-center
    space-y-2
`;

const TWShoppingContainer = tw.h1`
    flex
    flex-col
`;

const TWInput = tw.input`
    border-solid
    border
    border-black
    rounded-md
`;

const TWButton = tw.button`
	bg-blue-500 
	hover:bg-blue-700 
	text-white 
	font-bold 
	border-b-4 
	border-blue-800 
	rounded-md 
	shadow-md 
	transition-transform 
	transform 
	hover:scale-105
	hover:shadow-lg
	p-3
	mx-1
`;

export default ShoppingList;
