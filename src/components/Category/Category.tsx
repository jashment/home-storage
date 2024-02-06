import tw from 'tailwind-styled-components';

interface CategoryTypes {
    categoryName: string;
}

const Category = ({ categoryName }: CategoryTypes) => {
    return (
        <Box>
            <TWCategoryName>{categoryName}</TWCategoryName>
        </Box>
    );
};

const Box = tw.div`
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
    p-5
    m-3
`;

const TWCategoryName = tw.p`
    flex
    items-center
    justify-center
    my-auto
    h-full
`;

export default Category;
