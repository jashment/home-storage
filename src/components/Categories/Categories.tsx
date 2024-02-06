import tw from 'tailwind-styled-components';
import Category from '../Category';
import { Link } from 'react-router-dom';

const Categories = () => {
	const categoryNames = ['Food', 'Bathroom', 'First Aid'];
	return (
		<AllCategories>
			{categoryNames.map((name, i) => {
				return (
					<Link to={name.toLowerCase()}>
						<Category
							key={i}
							categoryName={name}
						/>
					</Link>
				);
			})}
		</AllCategories>
	);
};

const AllCategories = tw.div`
  border-black
  mx-auto
  flex
  flex-col
  md:flex-row
  flex-wrap
  justify-around
  -z-10
`;

export default Categories;
