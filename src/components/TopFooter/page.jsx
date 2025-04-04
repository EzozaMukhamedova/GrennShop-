import React from "react";
import Gul1 from "../../assets/images/footer_flower_1.svg";
import Gul2 from "../../assets/images/footer_flower_2.svg";

export default function TopFooter() {
  return (
    <div className="flex w-[1140px] mx-auto ">
      <div className="border-r m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
        <img
          src={Gul1}
          alt="gul"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
        <p className="text-xs font-light">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="border-r  m-[23px] pr-[23px] border-[#46A358] w-[200px] h-[210px] ">
        <img
          src={Gul2}
          alt="gul"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
        <p className="text-xs font-light">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className=" w-[200px]  m-[23px] pr-[23px] h-[210px] ">
        <img
          src={Gul1}
          alt="gul"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <h3 className="font-bold text-base mt-[17px] mb-[9px]">Garden Care</h3>
        <p className="text-xs font-light">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="p-[23px] w-[473.68px] ">
        <h3 className="font-bold text-base mt-[17px] mb-[9px]">
          Would you like to join newsletters?
        </h3>
        <div className="flex w-full h-[40px] mb-[17px]">
          <input
            className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
            placeholder="enter your email address..."
          />
          <button className="bg-[#46A358] flex  items-center justify-center gap-1 text-base text-white h-full w-1/5 rounded-none rounded-e-xl">
            JOIN
          </button>
        </div>
        <p className="text-xs font-light leading-6">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!{" "}
        </p>
      </div>
    </div>
  );
}
