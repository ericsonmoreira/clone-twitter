import React from 'react';

import {
  Container,
  Retwitted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImagemContent,
  Icons,
  Status,
  CommentIcon,
  RetwittIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retwitted>Você Retwittou</Retwitted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Ericson Moreira</strong>
            <span>@SonoEricson</span>
            <Dot />
            <time>09 de jul</time>
          </Header>
          <Description>Foguetes não têm ré</Description>
          <ImagemContent></ImagemContent>

          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>
            <Status>
              <RetwittIcon />
              20
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
