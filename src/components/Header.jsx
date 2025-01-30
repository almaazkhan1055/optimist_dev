import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Header = ({ headerData }) => {
  const [hamburger, setHamburger] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login";

  const navigate = useNavigate();

  const isLoginOrSignupPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleRouteChange = (obj) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(obj.href);
      setHamburger(false);
    }, 3000);
  };

  const handleLogout = () => {
    setHamburger(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <header
        className={`bg-[--header-bg] flex items-center lg:justify-between px-24  max-lg:px-5 fixed top-0 w-full z-50`}
      >
        <div className="relative flex items-center justify-between w-full">
          {isAuthPage ? (
            <img src={headerData?.logo} alt="logo" className="cursor-pointer" />
          ) : (
            <Link to="/">
              <img
                src={headerData?.logo}
                alt="logo"
                className="cursor-pointer"
              />
            </Link>
          )}
          {!hamburger ? (
            <RiMenu3Fill
              color="lightgray"
              size={30}
              className={`${isAuthPage && "hidden"} lg:hidden`}
              onClick={() => setHamburger(true)}
              style={{
                display: `${isAuthPage && "hidden"}`,
              }}
            />
          ) : !loading ? (
            <IoCloseSharp
              color="lightgray"
              size={30}
              className={`${isAuthPage ? "hidden" : ""} lg:hidden`}
              onClick={() => setHamburger(false)}
            />
          ) : (
            <PuffLoader size={30} color="#fff" />
          )}
          {!isAuthPage && !isLoginOrSignupPage && (
            <ul className="flex items-center gap-5 max-lg:hidden">
              {headerData?.links.map((obj, index) => (
                <li
                  key={index}
                  className="text-[--goat-milk] cursor-pointer hover:text-[--text-color]"
                  onClick={() => handleRouteChange(obj)}
                >
                  {obj?.name}
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="text-[--goat-milk] cursor-pointer hover:text-[--text-color]"
              >
                {user ? "Logout" : "Login"}
              </li>
              <FaUserCircle color="lightgray" size={30} />
            </ul>
          )}
          {loading && (
            <div className="absolute top-0 -right-20 translate-y-[50%]">
              <PuffLoader size={30} color="#fff" />
            </div>
          )}
        </div>
      </header>
      <ul
        className="bg-[--header-bg] flex flex-col items-start gap-3 lg:hidden w-full p-5 top-12"
        style={{
          position: "fixed",
          transform: `translateY(${hamburger ? "0" : "-100%"})`,
          opacity: hamburger ? 1 : 0,
          visibility: hamburger ? "visible" : "hidden",
          transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
          width: "100%",
          zIndex: "999",
        }}
      >
        {headerData?.links.map((obj, index) => (
          <li
            key={index}
            className="text-[--goat-milk] cursor-pointer hover:text-[--text-color]"
            onClick={() => handleRouteChange(obj)}
          >
            {obj?.name}
          </li>
        ))}
        {!isLoginOrSignupPage && (
          <li
            onClick={handleLogout}
            className="text-[--goat-milk] cursor-pointer hover:text-[--text-color]"
          >
            {user ? "Logout" : "Login"}
          </li>
        )}
        <FaUserCircle color="lightgray" size={30} />
      </ul>
    </>
  );
};

export default Header;
