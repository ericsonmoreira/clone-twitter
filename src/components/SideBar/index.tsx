import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Bory,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Bory>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Henry Bugalho"
                nickname="@henrybugalho"
              />,
              <FollowSuggestion name="NerdBunker" nickname="@Nerdbunker" />,
              <FollowSuggestion name="Meteoro BR" nickname="@meteoro_br" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Bory>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
