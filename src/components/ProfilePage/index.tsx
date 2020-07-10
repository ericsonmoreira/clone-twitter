import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Ericson Moreira</h1>
        <h2>@SonoEricson</h2>
        <p>Developer</p>
        <ul>
          <li>
            <LocationIcon />
            Ceará, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de julho de 1987
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
