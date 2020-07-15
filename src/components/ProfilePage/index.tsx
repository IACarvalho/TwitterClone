import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      
      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>Israel Afonso</h1>
        <h2>@IACarvalho</h2>

        <p>
          Developer at <a href="https://github.com/IACarvalho">Freelancer</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de junho de 1992
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>05</strong>
          </span>
          <span>
             <strong>10 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;