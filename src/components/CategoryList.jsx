const CategoryList = ({ categories, onSelectCategory }) => {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CategoryList;
  