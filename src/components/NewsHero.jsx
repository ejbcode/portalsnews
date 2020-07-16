import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsHeroCss = styled.section`
  margin-bottom: 2rem;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  h2 {
    text-transform: capitalize;
    padding: 0.5rem 0;
    font-size: 1.4rem;
  }
  .newsL {
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    position: relative;
  }
  .newsL img {
    width: 100%;
    height: 24rem;
    padding: 0;
    margin: 0;
  }
  .newsL h3 {
    position: absolute;
    bottom: 10%;
    color: white;
    left: 1rem;
    width: 60%;
    font-size: 1.5rem;
  }
  .newsR1 img,
  .newsR2 img {
    width: 100%;
    height: 12rem;
  }
  .newsR1 {
    position: relative;
    grid-column: 9 / 13;
  }
  .newsR2::before,
  .newsR1::before,
  .newsL:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  }
  .newsR1 h4,
  .newsR2 h4 {
    position: absolute;
    bottom: 10%;
    color: white;
    left: 1rem;
    z-index: 999;
    width: 60%;
  }
  .newsR2 {
    position: relative;
    grid-column: 9 / 13;
  }
  @media (max-width: ${({ theme }) => theme.m}) {
    .newsL {
      grid-column: 1 / 13;
      grid-row: 1 / 3;
    }
    .newsR1 {
      grid-column: 1 / 7;
    }
    .newsR2 {
      grid-column: 7 / 13;
    }
  }
`;

const NewsHero = ({ category, dataTop }) => {
  const BACKUP_IMAGE = 'https://static.websguru.com.ar/gfx/1.png';

  return (
    <NewsHeroCss>
      <h2>{category}</h2>
      <div className="grid">
        <div className="newsL">
          <img src={dataTop[0].urlToImage || BACKUP_IMAGE} alt={dataTop[0].title} />
          <h3>{dataTop[0].title}</h3>
        </div>
        <div className="newsR1">
          <img src={dataTop[1].urlToImage || BACKUP_IMAGE} alt={dataTop[1].title} />
          <h4>{dataTop[1].title}</h4>
        </div>
        <div className="newsR2">
          <img src={dataTop[2].urlToImage || BACKUP_IMAGE} alt={dataTop[2].title} />
          <h4>{dataTop[2].title}</h4>
        </div>
      </div>
    </NewsHeroCss>
  );
};

NewsHero.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsHero;
