import React, { useEffect, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/User/authSlice";
import { LoggedInUser } from "../redux/features/User/authAction";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar({ scrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(LoggedInUser());
  }, [dispatch]);

  const { userInfo } = useSelector((state) => state.auth);
  console.log('498:',userInfo);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setMenuOpen(false);
  };

  const navItems = [
    { title: "Home", path: userInfo?.role === 1 ? "/admin" : "/" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "FAQs", path: "/faqs" },
    { title: "Terms & Conditions", path: "/termsc" },
    { title: "Attractions", path: "/attractions" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? "bg-[#A15E48] shadow-md border-b-[1.5px] border-[#DCA689]"
          : "bg-[#8B4D3A] border-b-[1.5px] border-[#DCA689]"
      } transition-all duration-300`}
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="h-40 w-auto mt-4"
              src="/images/BikeForRentFinalLogo.png"
              alt="Bike4Rent"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 pr-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[#FFD9A0] px-3 py-1.5 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#FFE9CC] hover:text-[#5B2C1D] hover:shadow-md"
            >
              {item.title}
            </Link>
          ))}
          {userInfo ? (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center text-[#FFD9A0] text-lg font-semibold">
                  <img
                    src={userInfo.gender==='male' ? '/avatarmale.png' : '/avatarfemale.jpeg'}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {userInfo.name}
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </Menu.Button>
              
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/userProfile"
                          className={`${
                            active
                              ? "bg-[#FFE9CC] text-[#5B2C1D]"
                              : "text-gray-900"
                          } block px-4 py-2 text-sm`}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active
                              ? "bg-[#FFE9CC] text-[#5B2C1D]"
                              : "text-gray-900"
                          } block w-full text-left px-4 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link
              to="/login"
              className="text-[#FFD9A0] px-3 py-1.5 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#FFE9CC] hover:text-[#5B2C1D] hover:shadow-md"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden pr-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#FFD9A0] focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-[#592B1E] shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-[#FFD9A0] px-4 py-2 rounded-md text-base font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]"
            >
              {item.title}
            </Link>
          ))}
          {userInfo ? (
            <>
              <Link
                to="/orderdropdown"
                onClick={() => setMenuOpen(false)}
                className="text-[#FFD9A0] px-4 py-2 rounded-md text-base font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]"
              >
                Your Orders
              </Link>
              <button
                onClick={handleLogout}
                className="text-[#FFD9A0] px-4 py-2 rounded-md text-base font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-[#FFD9A0] px-4 py-2 rounded-md text-base font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
