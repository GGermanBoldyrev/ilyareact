import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 600;
  color: #d1d1ff;

  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 580px) {
    font-size: 24px;
  }
  
  @media only screen and (max-width: 504px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 426px) {
    font-size: 18px;
  }
  
  @media only screen and (max-width: 388px) {
    font-size: 16px;
  }
  `;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  min-height: 44px;
  
  @media only screen and (max-width: 992px) {
    min-height: 44px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    min-height: 0;
  }

  @media only screen and (max-width: 504px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 388px) {
    font-size: 12px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  margin-top: 10px;
  color: #C4C4CC;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 504px) {
    font-size: 12px;
  }
`;

const WorkCard = ({title, subtitle, text}) => {
    return (
        <Card>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
        </Card>
    );
};

export default WorkCard;