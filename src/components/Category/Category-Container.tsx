import Category from './Category';

interface CategoryContainerTypes {
	categoryName: string;
}

const CategoryContainer = ({ categoryName }: CategoryContainerTypes) => {
	return <Category categoryName={categoryName} />;
};

export default CategoryContainer;
