import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/images/search.png";
import bell from "../../assets/images/bell.png";
import savat from "../../assets/images/savat.png";
import green from "../../assets/images/green.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const notify = (message, type = "success") => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "info") {
      toast.info(message);
    }
  };

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Parollar mos emas!");
      return;
    }
    const existingUser = JSON.parse(localStorage.getItem(email));
    if (existingUser) {
      alert("Bu User allaqachon mavjud!");
      return;
    }
    const newUser = { name, surname, email, password };
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    // sessionStorage.setItem("loggedInUser", JSON.stringify(newUser));
    localStorage.setItem(email, JSON.stringify(newUser));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    setIsModalOpen(false);
    alert("Ro‘yxatdan o‘tish muvaffaqiyatli amalga oshirildi!");
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem(email));
    if (savedUser && savedUser.password === password) {
      setUser(savedUser);
      // sessionStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      alert("Login muvaffaqiyatli yakunlandi!");
      setIsModalOpen(false);
    } else {
      alert("Email yoki password xato!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <ToastContainer />
      <nav className="flex items-center justify-between w-[1240px] p-6 mx-auto bg-white border-b border-green-500 fixed top-0 left-1/2 transform -translate-x-1/2 z-20">
        <img src={green} alt="Logo" />
        <div className="flex gap-[20px] text-[16px] font-600 ">
          <h2
            onClick={() => navigate("/")}
            className="transition-colors duration-500 cursor-pointer hover:text-green-500 hover:border-b ease hover:border-green-500"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/blog")}
            className="transition-colors duration-500 cursor-pointer hover:text-green-500 hover:border-b hover:border-green-500 ease "
          >
            Blog
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <img src={search} alt="Search" />
          <img src={bell} alt="Notifications" />
          <img src={savat} alt="Cart" />
          {user ? (
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center px-4 py-2 text-white bg-green-600 rounded-lg cursor-pointer"
            >
              {user.name}
            </div>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 text-white bg-green-600 rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-[400px] p-6 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
            >
              X
            </button>
            <div className="flex justify-center mb-4 space-x-4">
              <button
                className={`px-3 py-2 text-lg font-semibold rounded ${
                  !isRegister ? "bg-green-600 text-white" : "text-gray-500"
                }`}
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>
              <button
                className={`px-3 py-2 text-lg font-semibold rounded ${
                  isRegister ? "bg-green-600 text-white" : "text-gray-500"
                }`}
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
            </div>
            <form
              onSubmit={isRegister ? handleRegister : handleLogin}
              className="space-y-4"
            >
              {isRegister && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Surname"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </>
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border rounded-md"
                required
              />
              {isRegister && (
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full p-2 border rounded-md"
                  required
                />
              )}
              <button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-green-600 rounded-md"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
