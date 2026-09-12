import { useState,useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [isSticky,setIsSticky] = useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      const trigger=64;
      setIsSticky(window.scrollY>trigger)
    }
    window.addEventListener("scroll",handleScroll)
    return()=>window.addEventListener("scroll",handleScroll)
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`flex items-center  justify-between px-4 text-black  w-screen  h-[64px] fixed transition-all duration-300 
        ${isSticky?"fixed top-0 left-0 bg-white": "bg-transparent"}` } 
    >
      <div>
        <Link
        to="/"
        >
          <span className="text-2xl">PERFUME</span>
        </Link>

      </div>
      {/* desktop nav bar */}
      <div className="hidden sm:flex flex-row  gap-2  items-center justify-center ">
        
        <Link
          to="/"
          className="flex justify-center items-center px-2 transition-all duration-300 transform hover:bg-black/5 hover:py-5"
        >
          <span>HOME</span>
        </Link>
        
        <Link
          to="/shop"
          className="flex justify-center items-center  px-2 transition-all duration-300 transform hover:bg-black/5 hover:py-5"
        >
         
          <span className=" nav-item-name ">SHOP</span>
        </Link>

        <Link to="/cart" className="flex relative">
          <div className="flex justify-center items-center px-2 transition-all duration-300 transform hover:bg-black/5 hover:py-5">
            
            <span className=" nav-item-name ">Cart</span>{" "}
            <div className="absolute -top-2 left-8">
              {cartItems.length > 0 && (
                <span>
                  <span className="px-1 py-0 text-sm text-white bg-[#151515] rounded-full ml-4">
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                </span>
              )}
            </div>
          </div>
        </Link>

        <Link to="/favorite" className="flex relative">
          <div className="flex justify-center items-center px-2 transition-all duration-300 transform hover:bg-black/5 hover:py-5">

            <span className=" nav-item-name ">
              Favorites
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
        <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-black ">{userInfo.username}</span>
          ) : (
            <></>
          )}
          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-all ${
                dropdownOpen ? "transform rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={`absolute right-0 mt-2 mr-1 space-y-2 bg-black/5 text-gray-600 ${
              !userInfo.isAdmin ? "top-10" : "top-50"
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/productlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
        {!userInfo && (
         <div className="flex flex-row  gap-2  items-center justify-center ">
          
              <Link
                to="/signup"
                className="flex items-center  px-2 transition-all duration-300 transform hover:bg-black/5 hover:py-5"
              >
                <span>JOIN</span>
              </Link>
              
            
          </div>
        )}
      </div>
      </div>
      <button className="sm:hidden text-3xl cursor-pointer" onClick={()=>setOpen(!open)}><IoIosMenu /></button>
      {/* mobile navbar */}
      {open &&(<div className=" fixed left-64 -top-20 px-4 flex flex-col  gap-2  items-left justify-center sm:hidden mt-32 ">
        
        <Link
          to="/"
          className="flex items-center  transition-all duration-300 transform hover:bg-black/5 hover:py-5 px-2"
        >
          <span className=" nav-item-name">HOME</span>
        </Link>
        
        <Link
          to="/shop"
           className="flex items-center  transition-all duration-300 transform hover:bg-black/5 hover:py-5 px-2"
        >
         
          <span className=" nav-item-name ">SHOP</span>
        </Link>

        <Link to="/cart" className="flex relative">
          <div  className="flex items-center  transition-all duration-300 transform hover:bg-black/5 hover:py-5 px-2">
            
            <span className=" nav-item-name ">Cart</span>{" "}
            <div className="absolute top-9">
              {cartItems.length > 0 && (
                <span>
                  <span className="px-1 py-0 text-sm text-white bg-[#151515] rounded-full ml-4">
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                </span>
              )}
            </div>
          </div>
        </Link>

        <Link to="/favorite" className="flex relative">
          <div  className="flex items-center  transition-all duration-300 transform hover:bg-black/5 hover:py-5 px-2">
           
            <span className=" nav-item-name ">
              Favorites
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
        <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-black">{userInfo.username}</span>
          ) : (
            <></>
          )}
          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-all  ${
                dropdownOpen ? "transform rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={`absolute right-0 mt-2 mr-1 space-y-2 bg-black/5 text-gray-600 ${
              !userInfo.isAdmin ? "top-100" : "top-500"
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/productlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
        {!userInfo && (
         <div className="flex flex-row  gap-2  items-center justify-center ">
          
              <Link
                to="/signup"
                className="flex items-center  transition-transform transform hover:-translate-y-2"
              >
                <span>JOIN</span>
              </Link>
            
          </div>
        )}
      </div>
      </div>)}
      
       

    </div>
  );
};

export default Navigation;
