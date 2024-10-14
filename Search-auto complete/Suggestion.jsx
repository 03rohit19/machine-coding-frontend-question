const Suggestion = ({ data, handleClick }) => {
  return (
    <div className="absolute bg-white border rounded-md mt-1 w-full shadow-lg z-10">
      <ul className="max-h-60 overflow-y-auto">
        {data && data.length ? (
          data.map((item, index) => (
            <li
              onClick={(e) => handleClick({ target: { value: item } })}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};
export default Suggestion;
