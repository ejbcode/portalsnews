import React from 'react';
import styled from 'styled-components';

const NewsBottonCss = styled.section`
  margin: 2rem auto;

  .grid {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1rem;
  }
  h3 {
    margin-bottom: 0.3rem;
    padding: 0.3rem;
    border-left: 3px solid red;
  }

  .grid__item {
    background-color: #fff;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  }
  .card {
    cursor: pointer;
    height: 100%;
  }

  .card__content {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    height: calc(100% - 10rem);
    justify-content: space-between;
  }
  .card__img {
    cursor: pointer;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    display: block;
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }

  .card__header {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .card__btn {
    width: 100%;
    margin-top: 1rem;
    padding: 0.8rem;
    font-size: 1rem;
    text-align: center;
    color: $color-btn-text;
    background-color: $color-btn-background;
    border: none;
    border-radius: 0.4rem;
    transition: $transition;
    cursor: pointer;
    font-weight: 700;
  }
`;

const NewsBottom = ({ dataBottom }) => {
  const BACKUP_IMAGE = 'https://static.websguru.com.ar/gfx/1.png';

  return (
    <NewsBottonCss>
      <h3>More News</h3>
      <div className="grid">
        {dataBottom.map((news) => (
          <div className="grid__item">
            <div className="card">
              <img className="card__img" src={news.urlToImage || BACKUP_IMAGE} alt={news.title} />
              <div className="card__content">
                <div>
                  <h4 className="card__header">{news.title}</h4>
                  <p className="card__text">{news.description}</p>
                </div>
                <button className="card__btn">
                  Explore <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </NewsBottonCss>
  );
};

export default NewsBottom;
