import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { logout } from "../redux/features/User/authSlice";
import { LoggedInUser } from "../redux/features/User/authAction";

export default function Navbar({ scrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(LoggedInUser());
  }, [dispatch]);

  const { userInfo } = useSelector((state) => state.auth);
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? "bg-teal-100 opacity-100 transition-all duration-300"
          : "bg-slate-50"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Left Hamburger */}
              <div className="flex items-left ml-[-140px] ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:bg-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>

              {/* Center Logo */}
               <div className="flex items-left absolute left-0 -ml-20 mt-4 ">
                <Link to="/" className="flex items-center">
                  <img
                    className="h-40 w-auto"
                    src="/images/BikeForRentFinalLogo.png"
                    alt="Bike4Rent"
                  />
                </Link>
              </div>

              {/* Right Nav */}
              <div className="flex space-x-4 items-right justify-end">
               
                <Link  to={userInfo?.role===1 ? '/admin': "/"}
                    className="bg-[#FAF3E0] text-[#B9651D] px-4 py-3 text-base font-medium rounded-md hover:bg-gradient-to-r hover:from-[#FFB347] hover:to-[#B9651D] hover:text-[#FAF3E0] hover:shadow-md transition duration-200 pl-4"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Home
                  </Link>


                {userInfo ? (
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="flex items-center text-orange text-sm font-medium rounded-md focus:outline-none">
                        <img
                          src="/avatar.jpg"
                          alt="avatar"
                          className="w-8 h-8 mr-2 rounded-full"
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {userInfo.role === 1 && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/dashboard"
                                  className={`${
                                    active
                                      ? "bg-orange text-white"
                                      : "text-gray-900"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Dashboard
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/orderdropdown"
                                className={`${
                                  active
                                    ? "bg-orange text-white"
                                    : "text-gray-900"
                                } block px-4 py-2 text-sm`}
                              >
                                Your Orders
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={`${
                                  active
                                    ? "bg-orange text-white"
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
                  <>
                    {/* <Link
                      to="/login"
                      className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-black hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-3 py-2 text-sm font-medium text-white bg-orange rounded-md hover:bg-black"
                    >
                      Sign up
                    </Link> */}
                    <Link to="/login"
                       className="bg-[#FAF3E0] text-[#B9651D] px-4 py-3 text-base font-medium rounded-md hover:bg-gradient-to-r hover:from-[#FFB347] hover:to-[#B9651D] hover:text-[#FAF3E0] hover:shadow-md transition duration-200"
                      style={{ fontFamily: "'Merriweather', serif" }}
                      >
                       Login
                    </Link>

                <Link
                  to="/signup"
                  className="bg-[#FAF3E0] text-[#B9651D] px-4 py-3 text-base font-medium rounded-md hover:bg-gradient-to-r hover:from-[#FFB347] hover:to-[#B9651D] hover:text-[#FAF3E0] hover:shadow-md transition duration-200"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Sign Up
                </Link>

                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hamburger Dropdown Menu */}
          <Disclosure.Panel className="absolute bg-white left-0 mt-0 w-48 shadow-lg rounded-md z-50 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ">
            <div className="space-y-1 p-2 ">
              <Link
                to="/about"
                className="block px-5 py-3 text-base text-[#FAF3E0] hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md rounded-lg transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-5 py-3 text-base text-[#FAF3E0] hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/faqs"
                className="block px-5 py-3 text-base text-[#FAF3E0] hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md rounded-lg transition duration-300"
              >
                FAQs
              </Link>
              <Link
                to="/terms"
                className="block px-5 py-3 text-base text-[#FAF3E0] hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md rounded-lg transition duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/attractions"
                className="block px-5 py-3 text-base text-[#FAF3E0] hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md rounded-lg transition duration-300"
              >
                Nearby Attractions
              </Link>

          
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
