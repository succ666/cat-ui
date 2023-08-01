import React from 'react';
import './App.css';
import Button, {ButtonSize, ButtonType}  from './components/Button/button';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div>
      <header>
        <Menu defaultIndex={0}>
          <MenuItem>
            香蕉
          </MenuItem>
          <MenuItem>
            香蕉
          </MenuItem>
          <MenuItem>
            香蕉
          </MenuItem>
          <MenuItem>
            香蕉
          </MenuItem>
        </Menu>
        <Button >button</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>button</Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Large}
          target="_blank"
          href='http://www.baidu.com'>
          百度
        </Button>
        <Button
          disabled
          btnType={ButtonType.Link}
          size={ButtonSize.Large}
          href='www.baidu.com'>
          百度
        </Button>
      </header>
    </div>
  );
}

export default App;
