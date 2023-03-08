import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const InvisibleDiv = styled.div`
  width: 93px
`;

const Line = styled.div`
  border: 1px solid #a1a1a8;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 45px;
  height: 38px;
  padding: 10px;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
    ${Line} {
      border-color: white;
      transition: 0.5s;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a1a1a8;
  padding: 10px;
  border-radius: 10px;
  z-index: 1;
  position: absolute;

  a {
    color: #a1a1a8;
    &:hover {
      color: white;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-right: 5px;
    background-color: rgba(34, 34, 34, 0.5);
  }
`;


const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Wrapper>
                <InvisibleDiv></InvisibleDiv>
                <Menu onClick={() => handleOpen()}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Menu>
            </Wrapper>
            {
                open &&
                <Dropdown>
                    <Link to={`/`}
                          onClick={() => handleClose()}>
                        Главная
                    </Link>
                    <Link to={`/about`}
                          onClick={() => handleClose()}>
                        Обо мне
                    </Link>
                    <Link to={`/works`}
                          onClick={() => handleClose()}>
                        Мои работы
                    </Link>
                    <Link to={`/contacts`}
                          onClick={() => handleClose()}>
                        Контакты
                    </Link>
                </Dropdown>
            }
        </div>
    );
};

export default BurgerMenu;