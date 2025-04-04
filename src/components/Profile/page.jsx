// import React, { useState, useEffect } from "react";

// import AccountIcon from "../../assets/images/account.svg";
// import AccountDetailsIcon from "../../assets/images/accountDetails.svg";
// import ProductsIcon from "../../assets/images/location.svg";
// import LocationIcon from "../../assets/images/location.svg";
// import HeartIcon from "../../assets/images/heartIcon.svg";
// import TrackOrderIcon from "../../assets/images/location.svg";
// import LogoutIcon from "../../assets/images/logout.svg";

// function Profile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [username, setUsername] = useState("");
//   const [activeItem, setActiveItem] = useState("AccountDetails");

//   const token = "67e1514e2ac3b760a778e38a";

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           `https://green-shop-backend.onrender.com/api/user/account-details?access_token=${token}`
//         );

//         if (!response.ok) throw new Error("Failed to fetch data");

//         const data = await response.json();
//         const userData = data.data;

//         if (userData) {
//           setFirstName(userData.name);
//           setLastName(userData.surname);
//           setEmail(userData.email);
//           setPhone(userData.phone_number);
//           setUsername(userData.username);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }

//       const userData = JSON.parse(localStorage.getItem("userData"));
//       if (userData) {
//         setFirstName(userData.firstName);
//         setLastName(userData.lastName);
//         setEmail(userData.email);
//         setPhone(userData.phone);
//         setUsername(userData.username);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ma'lumotlarni yangilash logikasi
//     const updatedUserData = { firstName, lastName, email, phone, username };
//     localStorage.setItem("userData", JSON.stringify(updatedUserData));
//     alert("Maʼlumotlar yangilandi!");
//   };

//   return (
//     <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px]">
//       {/* my account */}
//       <div className="w-1/4 p-5 bg-gray-50">
//         <ul className="space-y-7">
//           <li
//             className={`flex items-center font-bold text-[24px] text-${
//               activeItem === "MyAccount" ? "green-500" : "black-800"
//             }`}
//             onClick={() => handleItemClick("MyAccount")}
//           >
//             My Account
//           </li>
//           <li
//             className={`flex items-center cursor-pointer text-[18px] hover:text-green-500 ${
//               activeItem === "AccountDetails"
//                 ? "text-green-500 border-l-4 border-green-500 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("AccountDetails")}
//           >
//             <img src={AccountIcon} className="mr-2" alt="Account Icon" />
//             Account Details
//           </li>
//           <li
//             className={`flex items-center cursor-pointer text-[18px] hover:text-green-500 ${
//               activeItem === "MyProducts"
//                 ? "text-green-500 border-l-4 border-green-500 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("MyProducts")}
//           >
//             <img src={AccountDetailsIcon} className="mr-2" alt="Details Icon" />
//             My Products
//           </li>
//           <li
//             className={`flex items-center cursor-pointer text-[18px] hover:text-green-500 ${
//               activeItem === "Address"
//                 ? "text-green-500 border-l-4 border-green-500 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("Address")}
//           >
//             <img src={ProductsIcon} className="mr-2" alt="Products Icon" />
//             Address
//           </li>
//           <li
//             className={`flex items-center cursor-pointer text-[18px] hover:text-green-500 ${
//               activeItem === "Wishlist"
//                 ? "text-green-500 border-l-4 border-green-500 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("Wishlist")}
//           >
//             <img src={HeartIcon} className="mr-2" alt="Wishlist Icon" />
//             Wishlist
//           </li>
//           <li
//             className={`flex items-center cursor-pointer text-[18px] hover:text-green-500 ${
//               activeItem === "TrackOrder"
//                 ? "text-green-500 border-l-4 border-green-500 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("TrackOrder")}
//           >
//             <img src={TrackOrderIcon} className="mr-2" alt="Track Order Icon" />
//             Track Order
//           </li>
//           <li
//             className={`flex items-center text-red-500 text-[18px] cursor-pointer hover:text-red-700 ${
//               activeItem === "Logout"
//                 ? "text-red-700 border-l-4 border-red-700 pl-2"
//                 : ""
//             }`}
//             onClick={() => handleItemClick("Logout")}
//           >
//             <img src={LogoutIcon} className="mr-2" alt="Logout Icon" />
//             Log out
//           </li>
//         </ul>
//       </div>

//       {/* information */}
//       <div className="w-3/4 mx-auto ">
//         <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
//           Personal Information
//         </h2>
//         <form
//           className="p-8 pt-0 space-y-6 bg-white rounded-lg "
//           onSubmit={handleSubmit}
//         >
//           <div className="grid grid-cols-2 gap-6 mb-[30px]">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * First name
//               </label>
//               <input
//                 id="firstName"
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * Last name
//               </label>
//               <input
//                 id="lastName"
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * Email address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * Phone Number
//               </label>
//               <input
//                 id="phone"
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Your phone number..."
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="profilePhoto"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 Profile photo
//               </label>
//               <button className="w-full px-4 py-2 text-black bg-gray-100 rounded">
//                 Upload
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-green-600 rounded "
//           >
//             Save changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// import React, { useState, useEffect } from "react";

// import AccountIcon from "../../assets/images/account.svg";
// import AccountDetailsIcon from "../../assets/images/accountDetails.svg";
// import ProductsIcon from "../../assets/images/accountDetails.svg";
// import LocationIcon from "../../assets/images/location.svg";
// import HeartIcon from "../../assets/images/heartIcon.svg";
// import TrackOrderIcon from "../../assets/images/accountDetails.svg";
// import LogoutIcon from "../../assets/images/logout.svg";

// function Profile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [username, setUsername] = useState("");
//   const [activeItem, setActiveItem] = useState("AccountDetails");

//   const [user, setUser] = useState({
//     name: "",
//     surname: "",
//     email: "",
//     password: "", // Agar parolni ko'rsatish talab qilinmasa, uni olib tashlash kerak.
//   });

//   const token = "67e1514e2ac3b760a778e38a";

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   useEffect(() => {
//     // Foydalanuvchi ma'lumotlarini localStorage'dan olish
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser));
//     }
//   }, []);

//   useEffect(() => {
//     let isMounted = true; // Flag to check if component is mounted
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           `https://green-shop-backend.onrender.com/api/user/account-details?access_token=${token}`
//         );

//         if (!response.ok) throw new Error("Failed to fetch data");

//         const data = await response.json();
//         const userData = data.data;

//         if (userData && isMounted) {
//           setFirstName(userData.name);
//           setLastName(userData.surname);
//           setEmail(userData.email);
//           setPhone(userData.phone_number);
//           setUsername(userData.username);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     fetchUsers();

//     return () => {
//       isMounted = false; // Set the flag as false when the component unmounts
//     };
//   }, [token]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedUserData = { firstName, lastName, email, phone, username };
//     localStorage.setItem("userData", JSON.stringify(updatedUserData));
//     alert("Maʼlumotlar yangilandi!");
//   };

//   return (
//     <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px]">
//       <div className="w-1/4 p-5 bg-gray-50">
//         <ul className="space-y-7">
//           <li
//             className={`flex items-center font-bold text-[24px] text-${
//               activeItem === "MyAccount" ? "green-500" : "black-800"
//             }`}
//             onClick={() => handleItemClick("MyAccount")}
//           >
//             My Account
//           </li>
//           {[
//             {
//               key: "AccountDetails",
//               icon: AccountIcon,
//               label: "Account Details",
//             },
//             {
//               key: "MyProducts",
//               icon: AccountDetailsIcon,
//               label: "My Products",
//             },
//             { key: "Address", icon: ProductsIcon, label: "Address" },
//             { key: "Wishlist", icon: HeartIcon, label: "Wishlist" },
//             { key: "TrackOrder", icon: TrackOrderIcon, label: "Track Order" },
//             {
//               key: "Logout",
//               icon: LogoutIcon,
//               label: "Log out",
//               textColor: "red-500",
//               hoverColor: "red-700",
//             },
//           ].map((item) => (
//             <li
//               key={item.key}
//               className={`flex items-center cursor-pointer text-[18px] hover:text-${
//                 item.hoverColor || "green-500"
//               } ${
//                 activeItem === item.key
//                   ? `text-${item.textColor || "green-500"} border-l-4 border-${
//                       item.textColor || "green-500"
//                     } pl-2`
//                   : ""
//               }`}
//               onClick={() => handleItemClick(item.key)}
//             >
//               <img
//                 src={item.icon}
//                 className="mr-2"
//                 alt={`${item.label} Icon`}
//               />
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-3/4 mx-auto">
//         <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
//           Personal Information
//         </h2>
//         <form
//           className="p-8 pt-0 space-y-6 bg-white rounded-lg"
//           onSubmit={handleSubmit}
//         >
//           <div className="grid grid-cols-2 gap-6 mb-[30px]">
//             {[
//               {
//                 id: "firstName",
//                 label: "First name",
//                 value: firstName,
//                 setValue: setFirstName,
//               },
//               {
//                 id: "lastName",
//                 label: "Last name",
//                 value: lastName,
//                 setValue: setLastName,
//               },
//               {
//                 id: "email",
//                 label: "Email address",
//                 value: email,
//                 setValue: setEmail,
//                 type: "email",
//               },
//               {
//                 id: "phone",
//                 label: "Phone Number",
//                 value: phone,
//                 setValue: setPhone,
//               },
//               {
//                 id: "username",
//                 label: "Username",
//                 value: username,
//                 setValue: setUsername,
//               },
//             ].map((field) => (
//               <div key={field.id}>
//                 <label
//                   htmlFor={field.id}
//                   className="block font-semibold text-left text-[#3D3D3D]"
//                 >
//                   * {field.label}
//                 </label>
//                 <input
//                   id={field.id}
//                   type={field.type || "text"}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder={field.label}
//                   value={field.value}
//                   onChange={(e) => field.setValue(e.target.value)}
//                 />
//               </div>
//             ))}
//             <div>
//               <label
//                 htmlFor="profilePhoto"
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 Profile photo
//               </label>
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 text-black bg-gray-100 rounded"
//               >
//                 Upload
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-green-600 rounded"
//           >
//             Save changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect } from "react";

import AccountIcon from "../../assets/images/account.svg";
import AccountDetailsIcon from "../../assets/images/accountDetails.svg";
import ProductsIcon from "../../assets/images/accountDetails.svg";
import LocationIcon from "../../assets/images/location.svg";
import HeartIcon from "../../assets/images/heartIcon.svg";
import TrackOrderIcon from "../../assets/images/accountDetails.svg";
import LogoutIcon from "../../assets/images/logout.svg";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [activeItem, setActiveItem] = useState("AccountDetails");

  useEffect(() => {
    const userData = localStorage.getItem("loggedInUser");
    if (userData) {
      const user = JSON.parse(userData);
      setFirstName(user.name || "");
      setLastName(user.surname || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setUsername(user.username || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { firstName, lastName, email, phone, username };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
    alert("Ma'lumotlar yangilandi!");
  };

  return (
    <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px]">
      <div className="w-1/4 p-5 bg-gray-50">
        <ul className="space-y-7">
          <li
            className={`flex items-center font-bold text-[24px] text-${
              activeItem === "MyAccount" ? "green-500" : "black-800"
            }`}
            onClick={() => handleItemClick("MyAccount")}
          >
            My Account
          </li>
          {[
            {
              key: "AccountDetails",
              icon: AccountIcon,
              label: "Account Details",
            },
            {
              key: "MyProducts",
              icon: AccountDetailsIcon,
              label: "My Products",
            },
            { key: "Address", icon: LocationIcon, label: "Address" },
            { key: "Wishlist", icon: HeartIcon, label: "Wishlist" },
            { key: "TrackOrder", icon: TrackOrderIcon, label: "Track Order" },
            {
              key: "Logout",
              icon: LogoutIcon,
              label: "Log out",
              textColor: "red-500",
              hoverColor: "red-700",
            },
          ].map((item) => (
            <li
              key={item.key}
              className={`flex items-center cursor-pointer text-[18px] hover:text-${
                item.hoverColor || "green-500"
              } ${
                activeItem === item.key
                  ? `text-${item.textColor || "green-500"} border-l-4 border-${
                      item.textColor || "green-500"
                    } pl-2`
                  : ""
              }`}
              onClick={() => setActiveItem(item.key)}
            >
              <img
                src={item.icon}
                className="mr-2"
                alt={`${item.label} Icon`}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
          Personal Information
        </h2>
        <form
          className="p-8 pt-0 space-y-6 bg-white rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-6 mb-[30px]">
            {[
              {
                id: "firstName",
                label: "First name",
                value: firstName,
                setValue: setFirstName,
              },
              {
                id: "lastName",
                label: "Last name",
                value: lastName,
                setValue: setLastName,
              },
              {
                id: "email",
                label: "Email address",
                value: email,
                setValue: setEmail,
                type: "email",
              },
              {
                id: "phone",
                label: "Phone Number",
                value: phone,
                setValue: setPhone,
              },
              {
                id: "username",
                label: "Username",
                value: username,
                setValue: setUsername,
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block font-semibold text-left text-[#3D3D3D]"
                >
                  * {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type || "text"}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={field.label}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
