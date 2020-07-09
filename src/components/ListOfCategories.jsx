import React from 'react';
import styled from 'styled-components';
import data from './Categories.json';

const Ulist = styled.button`
  display: flex;

  li {
    background: red;
    color: ${({ theme }) => theme.primaryDark};
    list-style: none;
    padding: 1rem;
    margin: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`;

const ListOfCategories = () => {
  return (
    <Ulist>
      {data.map((item) => (
        <li style={{ textTransform: 'capitalize' }} key={item.id}>
          {item.category}
        </li>
      ))}
    </Ulist>
  );
};

export default ListOfCategories;
