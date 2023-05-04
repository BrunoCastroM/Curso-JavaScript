import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="das">
        <FaHome size={24} />
      </a>
      <a href="das">
        <FaSignInAlt size={24} />
      </a>
      <a href="das">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
