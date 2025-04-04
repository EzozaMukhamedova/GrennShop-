import { Slider } from "antd";
// import Discount from "./Discount";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AllDiscounts from "../AllDiscounts/page";
import { RingLoader } from "react-spinners";

const api = import.meta.env.VITE_API;

const token = "67e1514e2ac3b760a778e38a";

const fetchUsers = async () => {
  const { data } = await axios.get(
    `${api}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`
  );
  return data;
};

const CategoriesMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [range, setRange] = useState([
    searchParams.get("range_min") || 0,
    searchParams.get("range_max") || 1000,
  ]);

  const category = searchParams.get("category") || "house-plants";

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const updateSort = (sortType) => {
    searchParams.set("category", sortType);
    setSearchParams(searchParams);
  };

  const updateRange = (min, max) => {
    searchParams.set("range_min", min);
    searchParams.set("range_max", max);
    setSearchParams(searchParams);
  };

  if (isLoading)
    return (
      <div className="w-[310px] bg-[#F5F5F580] p-[15px] flex items-center justify-center">
        <RingLoader color="#36D7B7" />
      </div>
    );
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <>
      <div className="w-[310px] bg-[#F5F5F580] p-[15px]">
        <h3 className="font-bold text-left text-[20px] text-[#3D3D3D]">
          Categories
        </h3>
        <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
          {data?.data?.map(({ title, count, route_path }, index) => {
            return (
              <div
                onClick={() => updateSort(route_path)}
                key={index}
                className={`flex w-full justify-between text-base font-normal cursor-pointer text-[18px] text-[#3D3D3D] hover:text-[#46A358] transition-colors ${
                  category === route_path && "text-[#46A358] font-extrabold"
                }`}
              >
                <h3>{title}</h3>
                <p>{count}</p>
              </div>
            );
          })}
        </div>
        <div className="my-[35px]">
          <h3 className="font-bold">Price Range</h3>
          <Slider
            range
            defaultValue={[0, 1000]}
            max={1000}
            onChange={(e) => setRange(e)}
          />
          <p className="font-normal">
            Price:{" "}
            <span className="font-bold text-[#46A358]">
              {range[0]}$ - {range[1]}$
            </span>
          </p>
          <button
            onClick={() => updateRange(range[0], range[1])}
            className="mt-[26px] float-left mb-[20px] bg-[#46A358] font-semibold text-white px-[30px] py-[8px] rounded-lg"
          >
            Filter
          </button>
        </div>
        <div className="mt-[100px]  ">
          <h3 className="font-bold text-left text-[20px] text-[#3D3D3D]">
            Size
          </h3>
          <ul className="text-left text-[18px]  text-[#3D3D3D] list-none">
            <li className="mb-2 mt-[20px]">
              Small <span className="float-right text-right ">(119)</span>
            </li>
            <li className="mb-2 mt-[20px]">
              Medium <span className="float-right text-gray-500">(86)</span>
            </li>
            <li className="mb-2 mt-[20px]">
              Large <span className="float-right text-gray-500">(78)</span>
            </li>
          </ul>
        </div>
        {/* #EDF6EF */}
        <AllDiscounts token={token} />
        {/* <Discount /> */}
      </div>
    </>
  );
};

export default CategoriesMain;
