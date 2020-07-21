import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SeacrhIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SeacrhIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="Fulano de Teste"
                nickname="@fulanodeteste"
              />,
              <FollowSugestion
                name="Beltrano de Teste"
                nickname="@beltranodeteste"
              />,
              <FollowSugestion
                name="Ciclano do Teste"
                nickname="@ciclanodoteste"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
