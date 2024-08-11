import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CartImg from "/icons/cart-shopping-solid.svg";
import HistoryImg from "/icons/clock-rotate-left-solid.svg";
import HomeImg from "/icons/house-solid.svg";
import LogoutImg from "/icons/door-open-solid.svg";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const Header = () => {
  const [isAuthState, setIsAuthState] = useState(
    Cookies.get("Authorization") ? true : false
  );
  const [isAdminState, setIsAdminState] = useState(
    Cookies.get("Authorization") === "administrator" ? true : false
  );

  const [currentPage] = useState(window.location.pathname);

  const [userName, setUserName] = useState("");

  const logOut = () => {
    Cookies.remove("Authorization");
    Cookies.remove("UserId");
  };

  useEffect(() => {
    if (!isAuthState) {
      return;
    }
    const getUserName = async () => {
      try {
        const res = await axios.get(`${API_URL}/getusername`, {
          params: {
            userId: Cookies.get("userId"),
          },
        });
        setUserName(res.data.fio);
      } catch (error) {
        console.log(error);
      }
    };
    getUserName();
  });

  return (
    <header className="bg-c-green flex justify-center w-full shadow-c-sh">
      <div className="w-2/3 flex gap-1 flex-col md:flex-row items-center justify-between py-4 text-c-white">
        <a href="/" className="uppercase font-semibold text-2xl 2xl:text-4xl">
          Жизньфарм
        </a>
        {isAuthState ? (
          <nav className="flex flex-col md:flex-row gap-4  items-center">
            <h3 className="underline">{userName}</h3>
            <div className="flex gap-8 md:gap-4">
              {!isAdminState && (
                <a href="/cart" className="w-8">
                  <img src={CartImg} alt="" className={currentPage == "/cart" ? 'brightness-125' : undefined}/>
                </a>
              )}
              <a href="/history" className="w-7" >
                <img src={HistoryImg} alt="" className={currentPage == "/history" ? 'brightness-125' : undefined}/>
              </a>
              <a href="/" className="w-8" >
                <img src={HomeImg} alt="" className={currentPage == "/" ? 'brightness-125' : undefined}/>

              </a>
              <a onClick={logOut} href="/" className="w-8">
                <img src={LogoutImg} alt="" />

              </a>
            </div>
          </nav>
        ) : (
          <a
            href="/reg"
            className="bg-c-yellow text-c-black-500 block  py-1 2xl:py-3 px-6 2xl:px-12 rounded-lg 2xl:rounded-2xl shadow-c-sh 2xl:text-2xl"
          >
            Войти
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
