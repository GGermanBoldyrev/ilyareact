import React from 'react';
import styled from "styled-components";

const Block = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ImageBlock = styled.div`
  width: 45%;

  img {
    border-radius: 10px;
    height: 340px;
    width: 600px;
    -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  }
`;

const TextContent = styled.div`
  width: 45%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 46px;
  color: #FFFAFA;
`;

const Text = styled.div`
  font-size: 22px;
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
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  
  &:hover {
    background-color: #d1d1ff;
    color: #222222;
    transition: 0.3s;
  }
`;

const WorkView = ({imgLink, title, subtitle, bhLink, button, pos}) => {
    if (pos === 'left') {
        return (
            <Block>
                <ImageBlock>
                    <img src={imgLink} alt="My work"/>
                </ImageBlock>
                <TextContent>
                    <Title>{title}</Title>
                    <Text>{subtitle}</Text>
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
                <Title>{title}</Title>
                <Text>{subtitle}</Text>
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
};

export default WorkView;