import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: 'Home/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/CRUD',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];