import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import data from './Categories.json';

const Ulist = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorTertiary};
  border-top: solid 2px #aaa;

  & li {
    color: ${({ theme }) => theme.primaryDark};
  }
  button {
    border: none;
    padding: 0.7rem 0.7rem;
    margin: 0.3rem 0.4rem;
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out;
    text-transform: capitalize;
    font-size: 0.9rem;
    color: #222;
  }

  button:hover,
  button:focus {
    border-bottom: solid 3px red;
    margin-bottom: -3px;
    color: black;
  }

  button:focus {
    outline: none;
  }
`;

const ListOfCategories = ({ setCategory }) => {
  const handleClick = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Ulist>
      {data.map((item) => (
        <li style={{ textTransform: 'capitalize' }} key={item.id}>
          <button type="button" value={item.category} onClick={handleClick}>
            {item.category}
          </button>
        </li>
      ))}
    </Ulist>
  );
};

ListOfCategories.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default ListOfCategories;
