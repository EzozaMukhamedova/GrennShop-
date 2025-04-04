import React from "react";
import CategoriesMain from "./Main";
import MainMapping from "./MainMapping";
import MainNavbar from "../../MainNavbar/page";
// import ProductList from "./MainMapping";

const Categories = () => {
  return (
    <>
      <MainNavbar />

      <div className="flex">
        {/* <ProductList /> */}
        <CategoriesMain />
        <MainMapping />
      </div>
    </>
  );
};

export default Categories;
