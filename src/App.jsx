import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Main from './components/Main';
// import data from './components/Data.json';

function App() {
  const [category, setCategory] = useState('general');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = 'c8677b5d0784491cbfd05058d23c2dd5';
  useEffect(() => {
    setLoading(true);
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((news) => setData(news));
    // console.log(data);
    const dataFromApi = async () => {
      setData([]);
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      const response = await fetch(URL);
      const news = await response.json();
      setData(news);
      console.log(data);
    };
    dataFromApi();
    setLoading(false);
  }, [category]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header setCategory={setCategory} />
        {/* {loading ? <p>cargando</p> : ''} */}
        <Main category={category} data={data.articles} />
      </>
    </ThemeProvider>
  );
}

export default App;
