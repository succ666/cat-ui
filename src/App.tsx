import React from 'react';
import './App.css';
import Button, {ButtonSize, ButtonType}  from './components/Button/button';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div>
      <header>
        <Menu defaultIndex={0} mode="vertical">
          <MenuItem index={0}>
            香蕉1
          </MenuItem>
          <MenuItem index={1}>
            香蕉2
          </MenuItem>
          <MenuItem index={2}>
            香蕉3
          </MenuItem>
          <MenuItem index={3}>
            香蕉4
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
