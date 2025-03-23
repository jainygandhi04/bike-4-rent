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
  console.log(userInfo);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-10 ${
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
              <div className="flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:bg-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>

              {/* Center Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <Link to="/" className="flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/bikelogo.png"
                    alt="Bike4Rent"
                  />
                </Link>
              </div>

              {/* Right Nav */}
              <div className="flex space-x-4 items-center">
                <Link
                  to={userInfo?.role===1 ? '/admin': "/"}
                  className="text-slate-900 font-bold hover:bg-orange hover:text-white rounded-md px-3 py-2 text-sm"
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
                    <Link
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
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hamburger Dropdown Menu */}
          <Disclosure.Panel className="absolute bg-white left-0 mt-16 w-48 shadow-lg rounded-md">
            <div className="space-y-1 p-2">
              <Link
                to="/about"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
              >
                Contact Us
              </Link>
              <Link
                to="/faqs"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
              >
                FAQs
              </Link>
              <Link
                to="/terms"
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
              >
                Terms & Conditions
              </Link>

              {/* Nested Nearby Attractions */}
              <Menu as="div" className="relative">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md">
                      Nearby Attractions
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </Menu.Button>
                    {open && (
                      <div className="ml-4 mt-1 space-y-1">
                        <a
                          href="https://en.wikipedia.org/wiki/Fateh_Sagar_Lake"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
                        >
                          Fatehsagar Lake
                        </a>
                        <a
                          href="https://en.wikipedia.org/wiki/City_Palace,_Udaipur"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
                        >
                          City Palace
                        </a>
                        <a
                          href="https://en.wikipedia.org/wiki/Ambrai_Ghat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
                        >
                          Ambrai Ghat
                        </a>
                        <a
                          href="https://en.wikipedia.org/wiki/Monsoon_Palace"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange hover:text-white rounded-md"
                        >
                          Sajjangarh Monsoon Palace
                        </a>
                      </div>
                    )}
                  </>
                )}
              </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
