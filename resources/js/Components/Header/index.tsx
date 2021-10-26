import React from "react";

import navItems from "./navItems";

type HeaderProps = {
    currentPath: string;
};

const Header = ({ currentPath }: HeaderProps) => (
    <header className="header">
        <div className="header__logo">
            <h1>Notes App</h1>
        </div>
        <nav>
            <ul>
                {navItems.map(({ title, path }) => (
                    <li
                        className={
                            currentPath === path
                                ? "header__nav-item--active"
                                : "header__nav-item"
                        }
                        key={title}
                    ></li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
