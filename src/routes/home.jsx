import React from 'react';
import useWindowDimensions from "../hooks/windowSize";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 172px);
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 570px;
  margin-right: 100px;

  @media only screen and (max-width: 992px) {
    height: 474px;
    margin-right: 50px;
  }
  @media only screen and (max-width: 768px) {
    height: 325px;
  }
`;

const ContentRight = styled.div`
  img {
    height: 570px;
  }

  @media only screen and (max-width: 992px) {
    img {
      height: 470px;
    }
  }
  @media only screen and (max-width: 768px) {
    img {
      height: 325px;
    }
  }
`;

const TextBlock = styled.div`
  a {
    text-decoration: none;
  }
`;

const Title = styled.div`
  font-family: "NeueMachina-Ultrabold", serif;
  font-size: 73px;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, rgba(253, 100, 79, 1), rgba(242, 142, 38, 1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 992px) {
    font-size: 63px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 45px;
  }
`;

const Subtitle = styled.div`
  font-size: 35px;
  font-family: "NeueMachina-Regular", serif;

  @media only screen and (max-width: 992px) {
    font-size: 27px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    margin-top: 5px;
  }
`;

const Text = styled.div`
  font-size: 26px;
  font-style: italic;
  margin-top: 16px;
  color: #C4C4CC;

  @media only screen and (max-width: 992px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactTitle = styled.div`
  font-size: 35px;
  font-family: "NeueMachina-Regular", serif;
  margin-bottom: 26px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const IconsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;

  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`;

const Icon = styled.img`
  width: 80px;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    transition: 0.4s;
  }

  @media only screen and (max-width: 768px) {
    width: 60px;
  }
  @media only screen and (max-width: 600px) {
    width: 75px;
  }
`;

const PhonePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: calc(100vh - 138px);
`;

const PhonePageBlock = styled.div`
  width: 90%;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PhoneTextBlock = styled.div`
  text-align: center;
`;

const PhoneImg = styled.div`
  img {
    height: 400px;
  }
  @media only screen and (max-height: 770px) {
    img {
      margin: 20px 0;
      height: 350px;
    }
  }
`;


const Home = () => {
    const {width} = useWindowDimensions();

    if (width >= 600) {
        return (
            <Page>
                <ContentLeft>
                    <TextBlock>
                        <Title>Илья Тарасов</Title>
                        <Subtitle>Графический дизайнер</Subtitle>
                        <Text>"Дизайн это не только про красоту, но и про отражение интересов потребителя"</Text>
                    </TextBlock>
                    <ContactTitle>
                        <ContactTitle>Контакты</ContactTitle>
                        <IconsBlock>
                            <a href="https://www.behance.net/tarasovilya" target="_blank"><Icon src="/images/bh-img.png"
                                                                                               alt="Bh icon"/></a>
                            <a href="https://vk.com/tarasovilya" target="_blank"><Icon src="/images/vk-img.png"
                                                                                      alt="Vk icon"/></a>
                            <a href="https://t.me/vlardingen" target="_blank"><Icon src="/images/tg-img.png"
                                                                                   alt="Tg icon"/></a>
                        </IconsBlock>
                    </ContactTitle>
                </ContentLeft>
                <ContentRight>
                    <img src="/images/ilya.png" alt="Ilya Tarasov Photo"/>
                </ContentRight>
            </Page>)
    } else {
        return (
            <div>
                <PhonePage>
                    <PhonePageBlock>
                        <PhoneTextBlock>
                            <Title>Илья Тарасов</Title>
                            <Subtitle>Графический дизайнер</Subtitle>
                        </PhoneTextBlock>
                        <PhoneImg>
                            <img src="/images/ilya.png" alt="Ilya Tarasov Photo"/>
                        </PhoneImg>
                        <IconsBlock>
                            <a href="https://www.behance.net/tarasovilya" target="_blank"><Icon src="/images/bh-img.png"
                                                                                               alt="Bh icon"/></a>
                            <a href="https://vk.com/tarasovilya" target="_blank"><Icon src="/images/vk-img.png"
                                                                                      alt="Vk icon"/></a>
                            <a href="https://t.me/vlardingen" target="_blank"><Icon src="/images/tg-img.png"
                                                                                   alt="Tg icon"/></a>
                        </IconsBlock>
                    </PhonePageBlock>
                </PhonePage>
            </div>
        )
    }
    ;
};

export default Home;