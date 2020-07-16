import React from 'react';
import styled from 'styled-components';
import ListOfCategories from './ListOfCategories';
import Logo from '../assets/img/sky-news-logo.png';

const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  img {
    height: 40px;
  }
`;

const Header = ({ setCategory }) => {
  return (
    <header>
      <nav>
        <LogoSection>
          <p>Date and Temp</p>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p>login or social</p>
        </LogoSection>
        <ListOfCategories setCategory={setCategory} />
      </nav>
    </header>
  );
};

export default Header;
