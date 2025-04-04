import React from "react";
import Logo from "../../assets/images/green_logo.svg";
import Location from "../../assets/images/location.svg";
import Email from "../../assets/images/email.svg";
import Call from "../../assets/images/call.svg";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import LinkedIn from "../../assets/images/linkedin.svg";

import PayPal from "../../assets/images/paypal.png";
import MasterCard from "../../assets/images/mastercard.png";
import VisaCard from "../../assets/images/visaCard.svg";
import Amex from "../../assets/images/amex.svg";

export default function Footer() {
  return (
    <>
      <div className="flex w-[1140px] mx-auto  justify-between p-[23px] max-lg:flex-col max-lg:items-center gap-2.5  text-black ">
        <div>
          <img
            src={Logo}
            alt="gul"
            style={{ width: "160px", height: "100px" }}
          />
        </div>
        <div className="flex gap-2.5 items-center ">
          <img
            src={Location}
            alt="location"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="text-sm">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src={Email}
            alt="email"
            style={{ width: "20px", height: "20px" }}
          />
          <p className="text-sm">contact@greenshop.com</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src={Call}
            alt={Call}
            style={{ width: "20px", height: "20px" }}
          />
          <p className="text-sm">+88 01911 717 490</p>
        </div>
      </div>
      <div className="flex w-[1140px] mx-auto text-left justify-between p-[23px] max-sm:flex-col max-sm:gap-4 bg-white">
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="font-bold">My Account</h3>
          <p className="font-light cursor-pointer">My Account</p>
          <p className="font-light cursor-pointer">Address</p>
          <p className="font-light cursor-pointer">Wishlist</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5">
          <h3 className="font-bold">Categories</h3>
          <p className="font-light cursor-pointer">House Plants</p>
          <p className="font-light cursor-pointer">Potter Plants</p>
          <p className="font-light cursor-pointer">Seeds</p>
          <p className="font-light cursor-pointer">Small Plants</p>
          <p className="font-light cursor-pointer">Accessories</p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-3 mt-[20px] bg-white ">
            <div className="border border-[#46A35833] p-[10px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={Facebook}
                alt="facebook"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="border border-[#46A35833] p-[7px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-white">
              <img
                src={Instagram}
                alt="instagram"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="border border-[#46A35833] p-[7px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={Twitter}
                alt="twitter"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="border border-[#46A35833] p-[7px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <img
                src={LinkedIn}
                alt="linkedin"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <h3 className="font-bold mt-[33px]">We accept</h3>
          <div className="flex gap-3 mt-[20px]">
            <img
              src={PayPal}
              alt="paypal"
              style={{ width: "30px", height: "30px" }}
            />
            <img
              src={MasterCard}
              alt="mastercard"
              style={{ width: "30px", height: "30px" }}
            />
            <img
              src={VisaCard}
              alt="visa"
              style={{ width: "30px", height: "30px" }}
            />
            <img
              src={Amex}
              alt="amex" 
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
      </div>
      <h3 className="text-center  pt-[30px] font-normal text-sm bg-white border-t-2 border-green-300">
        © 2023 GreenShop. All Rights Reserved.
      </h3>
    </>
  );
}
