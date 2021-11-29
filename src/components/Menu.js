import React from 'react';
import styled from 'styled-component';
import { BsCheck2Square, BsCalendar3 } from 'react-icons/bs';
import './Menu.scss';

// const MenuBlock = styled.div`

// `;
const Menu = () => {
  return (
    <ul className="VirticalNavBar">
      <li>
        <BsCheck2Square />
      </li>
      <li>
        <BsCalendar3 />
      </li>
    </ul>
  );
};

export default Menu;
