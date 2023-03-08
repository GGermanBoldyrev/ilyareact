import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../hooks/windowSize";
import BurgerMenu from "./burgerMenu";
import styled from "styled-components";

const Navbar = styled.nav`
  margin-top: 23px;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: white;
  font-size: 22px;

  a {
    color: white;
    text-decoration: none;
  }
  
  li {
    border-bottom: 1px solid #222222;
    &:hover {
      border-bottom: 1px solid white;
    }
  }

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const Img = styled.img`
  width: 500px;

  @media only screen and (max-width: 1200px) {
    width: 400px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Header = () => {
    const [active, setActive] = useState(0);
    const {width} = useWindowDimensions();
    const onClick = (id) => {
        setActive(id);
    }

    return (
        <Navbar>
            <List>
                {
                    width < 992
                        ? <>
                            <Link to={`/`}>
                                <Img src="/images/log.png" alt="Logo" />
                            </Link>
                            <BurgerMenu/>
                        </>
                        : <>
                            <Links>
                                <li className={active === 0 ? "headerActive" : ""}
                                    onClick={() => onClick(0)}
                                >
                                    <Link to={`/`}>
                                        Главная
                                    </Link>
                                </li>
                                <li className={active === 1 ? "headerActive" : ""}
                                    onClick={() => onClick(1)}
                                >
                                    <Link to={`/about`}>
                                        Обо мне
                                    </Link>
                                </li>
                            </Links>
                            <Link to={`/`}>
                                <Img src="/images/log.png" alt="Logo"/>
                            </Link>
                            <Links>
                                <li className={active === 2 ? "headerActive" : ""}
                                    onClick={() => onClick(2)}
                                >
                                    <Link to={`/works`}>
                                        Мои работы
                                    </Link>
                                </li>
                                <li className={active === 3 ? "headerActive" : ""}
                                    onClick={() => onClick(3)}
                                >
                                    <Link to={`/contacts`}>
                                        Контакты
                                    </Link>
                                </li>
                            </Links>
                        </>
                }
            </List>
        </Navbar>
    );
};

export default Header;