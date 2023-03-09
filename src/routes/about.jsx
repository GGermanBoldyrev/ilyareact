import React from 'react';
import {workplaceArray} from "../consts/workplaceArray";
import WorkCard from "../components/workCard";
import styled from "styled-components";
import useWindowDimensions from "../hooks/windowSize";

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 170px);

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
  
`;

const RightSide = styled.div`
  margin-left: 65px;
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 1200px) {
    margin-left: 10px;
  }
`;

const Image = styled.img`
  height: 630px;
  
  @media only screen and (max-width: 992px) {
    height: 400px;
  }
  @media only screen and (max-width: 768px) {
    height: 360px;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 63px;
  font-weight: 600;
  color: #FFFAFA;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const TextBlock = styled.div`
  color: #C4C4CC;
  font-size: 18px;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Text = styled.div`
  margin-top: 10px;
  color: #C4C4CC;
`;

const WorkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const PhonePageTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PhoneTextBlock = styled.div`
  margin-left: 30px;

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }

  @media only screen and (max-width: 540px) {
    margin-left: 0;
  }
`;

const About = () => {
    const {width} = useWindowDimensions();
    return (
        <>
            <Page>
                {
                    width < 992 ?
                        <>
                            <PhonePageTopBlock>
                                <div>
                                    <Image src="/images/aboutt.png" alt="me"/>
                                </div>
                                <PhoneTextBlock>
                                    <Title>Обо мне</Title>
                                    <TextBlock>
                                        <Text>Я графический дизайнер, мне 20 лет, город Санкт-Петербург.</Text>
                                        <Text>За период всей деятельности занимался созданием постеров, полиграфической
                                            и
                                            печатной
                                            продукции, дизайн упаковки и создавал фирменные стили для проектов.</Text>
                                        <Text>Есть опыт в motion-дизайне, но на среднем уровне. В любом случае, есть
                                            желание
                                            двигаться дальше и развиваться.
                                            реальный опыт в дизайне — 3 года, общий опыт почти 5 лет.</Text>
                                        <Text>Было бы очень интересно поработать в компании единомышленников. Формат
                                            работы
                                            рассматриваю как удаленный, так и работа в офисе.</Text>
                                    </TextBlock>
                                </PhoneTextBlock>
                            </PhonePageTopBlock>
                            <WorkBlock>
                                {workplaceArray.map((obj, title) => (
                                    <WorkCard
                                        key={title}
                                        title={obj.title}
                                        subtitle={obj.subtitle}
                                        text={obj.text}
                                    />
                                ))
                                }
                            </WorkBlock>
                        </>
                        : <>
                            <div>
                                <Image src="/images/aboutt.png" alt="me"/>
                            </div>
                            <RightSide>
                                <div>
                                    <Title>Обо мне</Title>
                                    <TextBlock>
                                        <Text>Я графический дизайнер, мне 20 лет, город Санкт-Петербург.</Text>
                                        <Text>За период всей деятельности занимался созданием постеров, полиграфической и
                                            печатной
                                            продукции, дизайн упаковки и создавал фирменные стили для проектов.</Text>
                                        <Text>Есть опыт в motion-дизайне, но на среднем уровне. В любом случае, есть желание
                                            двигаться дальше и развиваться.
                                            реальный опыт в дизайне — 3 года, общий опыт почти 5 лет.</Text>
                                        <Text>Было бы очень интересно поработать в компании единомышленников. Формат работы
                                            рассматриваю как удаленный, так и работа в офисе.</Text>
                                    </TextBlock>
                                </div>
                                <WorkBlock>
                                    {workplaceArray.map((obj, title) => (
                                        <WorkCard
                                            key={title}
                                            title={obj.title}
                                            subtitle={obj.subtitle}
                                            text={obj.text}
                                        />
                                    ))
                                    }
                                </WorkBlock>
                            </RightSide>
                        </>
                }
            </Page>
        </>
    );
};

export default About;