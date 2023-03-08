import React from 'react';
import styled from "styled-components";

const Page = styled.div`
  min-height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBlock = styled.div`
  width: 70%;
`;

const Title = styled.div`
  font-size: 52px;
  color: #FFFAFA;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  font-size: 24px;
  width: 50%;
  color: #C4C4CC;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

const Subtitle = styled.div`
  font-weight: 600;
  font-size: 32px;
`;

const Line = styled.div`
  border: 1px solid #C4C4CC;
`;

const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 10px;
    color: #d1d1ff;
  }

  a:last-child {
    margin-bottom: 0;
  }
`;

const Button = styled.div`
  border: 1px solid #C4C4CC;
  border-radius: 5px;
  width: fit-content;
  padding: 10px 20px;
  color: #C4C4CC;
  margin-top: 25px;

  a {
    text-decoration: none;
    color: #C4C4CC;
  }

  &:hover {
    background-color: #C4C4CC;
    transition: 0.5s;
    a {
      color: #222222;
    }
  }
`;

const Contacts = () => {
    return (
        <Page>
            <MainBlock>
                <Title>Связаться со мной</Title>
                <Content>
                    <LeftContent>
                        <div>
                            Если у вас имеются какие-либо вопросы, пожалуйста, напишите мне в личных сообщениях в одной
                            из социальных сетей, либо на почту.
                        </div>
                        <div>
                            If you have any questions, please fell free to drop me a line.
                        </div>
                        <Button>
                            <a href="tel:+79219966685">Позвонить мне</a>
                        </Button>
                    </LeftContent>
                    <RightContent>
                        <Subtitle>Find me elsewhere</Subtitle>
                        <Line></Line>
                        <LinksBlock>
                            <a href="https://www.behance.net/tarasovilya" target="_blank" rel="noreferrer">BEHANCE</a>
                            <a href="https://vk.com/tarasovilya" target="_blank" rel="noreferrer">VK</a>
                            <a href="https://t.me/vlardingen" target="_blank" rel="noreferrer">TELEGRAM</a>
                            <a href="mailto:tarasov.ilia010@gmail.com&body=Здравствуйте, Илья.?subject=Работа"
                               target="_blank"
                               rel="noreferrer"
                            >tarasov.ilia010@gmail.com</a>
                        </LinksBlock>
                    </RightContent>
                </Content>
            </MainBlock>
        </Page>
    );
};

export default Contacts;