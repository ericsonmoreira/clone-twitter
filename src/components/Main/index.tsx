import React from 'react';
import ProfilePage from '../ProfilePage'

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottemMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Ericson Moreira</strong>
          <span>100 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage /> 
      
      <BottemMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottemMenu>
    </Container>
  );
};

export default Main;
