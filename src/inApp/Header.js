import React from 'react'


const Header = () => {


    return (
        <header className={"header"}>
            <div className={"header__container"}>
                <h1 className={"header__pagetitle"}>
                    <span className={"header__pagetitle__part1"}>
                        Zaplanuj
                    </span>
                    <span className={"header__pagetitle__part2"}>
                        Jedzonko
                    </span>
                </h1>
                <div className={"header__menu"}>
                    <span className={"header__menu__element"}
                    >ZAPLANUJ POSIŁKI!
                    </span>
                    <span
                        className={"header__menu__element"}
                    >DLACZEGO WARTO?
                    </span>
                    <span
                        className={"header__menu__element"}
                    >O MNIE
                    </span>
                    <span
                        className={"header__menu__element"}
                    >KONTAKT
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header