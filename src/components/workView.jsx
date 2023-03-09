import React from 'react';
import styled from "styled-components";
import useWindowDimensions from "../hooks/windowSize";

const Block = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
    margin-top: 30px;
  }
`;

const ImageBlock = styled.div`
  width: 45%;

  img {
    border-radius: 10px;
    /*height: 340px;
    width: 600px;*/
    -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextContent = styled.div`
  width: 45%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 46px;
  color: #FFFAFA;
  
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Text = styled.div`
  font-size: 22px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonBlock = styled.div`
  width: fit-content;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Button = styled.div`
  border: 1px solid #d1d1ff;
  width: 158px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #d1d1ff;
    color: #222222;
    transition: 0.3s;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    font-size: 14px;
    padding: 8px 16px;
    width: 136px;
  }
`;


const WorkView = ({imgLink, title, subtitle, bhLink, button, pos}) => {
    const {width} = useWindowDimensions();
    if (width < 768) {
        return (
            <Block>
                <TextContent>
                    <div>
                        <Title>{title}</Title>
                        <Text>{subtitle}</Text>
                    </div>
                    <ButtonBlock>
                        {button &&
                            <a href={bhLink} target="_blank" rel="noreferrer">
                                <Button>Узнать больше</Button>
                            </a>
                        }
                    </ButtonBlock>
                </TextContent>
                <ImageBlock>
                    <img src={imgLink} alt="My work"/>
                </ImageBlock>
            </Block>
        )
    } else {
        if (pos === 'left') {
            return (
                <Block>
                    <ImageBlock>
                        <img src={imgLink} alt="My work"/>
                    </ImageBlock>
                    <TextContent>
                        <div>
                            <Title>{title}</Title>
                            <Text>{subtitle}</Text>
                        </div>
                        <ButtonBlock>
                            {button &&
                                <a href={bhLink} target="_blank" rel="noreferrer">
                                    <Button>Узнать больше</Button>
                                </a>
                            }
                        </ButtonBlock>
                    </TextContent>
                </Block>
            );
        }
        return (
            <Block>
                <TextContent>
                    <div>
                        <Title>{title}</Title>
                        <Text>{subtitle}</Text>
                    </div>
                    <ButtonBlock>
                        {button &&
                            <a href={bhLink} target="_blank" rel="noreferrer">
                                <Button>Узнать больше</Button>
                            </a>
                        }
                    </ButtonBlock>
                </TextContent>
                <ImageBlock>
                    <img src={imgLink} alt="My work"/>
                </ImageBlock>
            </Block>
        )
    }
};

export default WorkView;