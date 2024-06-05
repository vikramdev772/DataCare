import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { SunOutlined} from '@ant-design/icons';

const ToggleTheme = ({ darkTheme, toggleTheme }) => {
  return (
    <div className={`toggle-theme-btn ${darkTheme ? 'toggle-theme-btn-dark' : 'toggle-theme-btn-light'}`}>
      <button onClick={toggleTheme}>
        {darkTheme ? <SunOutlined /> : <HiOutlineMoon />}
      </button>
    </div>
  );
};

export default ToggleTheme;
