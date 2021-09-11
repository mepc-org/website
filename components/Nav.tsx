import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <header className="px-10 md:px-32 flex justify-between flex-wrap items-center lg:py-0 py-2 text-darkgrey bg-opacity-70 top-0 fixed w-screen z-10 bg-gray-50 border-b dark:border-darkergrey border-gray-200 dark:bg-black dark:text-white">
            <div className="flex flex-row">
                <Link href="/" passHref>
                    <a>
                        <h1 className="text-3xl font-bold text-black dark:text-white">
                            MEPC
                            <span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
                        </h1>
                    </a>
                </Link>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
                <svg
                className="fill-current text-blue dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="lg:flex-1 items-center justify-between pt-4 lg:pt-0">
                        <li>
                            <Link href="#">
                                <a
                                    className="text-sm font-medium hover:text-blue lg:p-4 py-3 px-0 block lg:inline"
                                >
                                Title 1
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Nav;