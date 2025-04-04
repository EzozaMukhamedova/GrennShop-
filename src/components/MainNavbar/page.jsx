// import React from "react";
// const [selectedFilter, setSelectedFilter] = useState(
//   searchParams.get("type") || "all-plants"
// );

// const MainNavbar = ({ setCategoryType, setSortOption, selectedFilter }) => {
//   return (
//     <div className="flex items-center justify-between border pl-[380px] gap-[300px]">
//       <div className="flex space-x-6">
//         <button
//           className="font-medium text-green-600 border-b-2 border-green-600 hover:text-black"
//           onClick={() => setCategoryType("all-plants")}
//         >
//           All Plants
//         </button>
//         <button
//           className="font-medium text-gray-900 hover:text-black"
//           onClick={() => setCategoryType("new-arrivals")}
//         >
//           New Arrivals
//         </button>
//         <button
//           className="font-medium text-gray-900 hover:text-black"
//           onClick={() => setCategoryType("sale")}
//         >
//           Sale
//         </button>
//       </div>

//       <div className="flex items-center justify-end space-x-2">
//         <span className="flex justify-end font-medium text-gray-700">
//           Sort by:
//         </span>
//         <select
//           className="border rounded-[10px] px-2 py-1 text-gray-700 focus:outline-none"
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="default">Default Sorting</option>
//           <option value="cheapest">The Cheapest</option>
//           <option value="expensive">Most Expensive</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default MainNavbar;
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MainNavbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("type") || "all-plants"
  );
  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sort") || "default"
  );

  const handleCategoryChange = (category) => {
    setSelectedFilter(category);
    setSearchParams({ type: category, sort: sortOrder });
  };

  const handleSortChange = (sortOption) => {
    setSortOrder(sortOption);
    setSearchParams({ type: selectedFilter, sort: sortOption });
  };

  return (
    <div className="flex items-center justify-between  pl-[380px] gap-[300px]">
      <div className="flex space-x-6">
        {[
          { label: "All Plants", value: "all-plants" },
          { label: "New Arrivals", value: "new-arrivals" },
          { label: "Sale", value: "sale" },
        ].map(({ label, value }) => (
          <button
            key={value}
            className={`font-medium ${
              selectedFilter === value
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-900"
            } hover:text-black`}
            onClick={() => handleCategoryChange(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end space-x-2">
        <span className="flex justify-end font-medium text-gray-700">
          Sort by:
        </span>
        <select
          className="border rounded-[10px] px-2 py-1 text-gray-700 focus:outline-none"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="default">Default Sorting</option>
          <option value="cheapest">The Cheapest</option>
          <option value="expensive">Most Expensive</option>
        </select>
      </div>
    </div>
  );
};

export default MainNavbar;
