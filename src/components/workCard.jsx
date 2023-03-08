import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 600;
  color: #d1d1ff;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

const Text = styled.div`
  font-size: 18px;
  margin-top: 10px;
  color: #C4C4CC;
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