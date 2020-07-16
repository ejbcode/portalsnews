import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsHero from './NewsHero';
import NewsBottom from './NewsBottom';

const MainCss = styled.main``;
const Main = ({
  category,
  data = [
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      url: '',
      urlToImage: 'https://static.websguru.com.ar/gfx/1.png',
      publishedAt: '',
      content: '',
    },
  ],
}) => {
  console.log(data);
  const dataTop = data.slice(0, 3);
  const dataBottom = data.slice(3);
  return (
    <MainCss>
      <NewsHero category={category} dataTop={dataTop} />
      <NewsBottom dataBottom={dataBottom} />
    </MainCss>
  );
};

Main.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Main;
