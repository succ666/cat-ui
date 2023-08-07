import React from 'react';
import './App.css';
import Button, {ButtonSize, ButtonType}  from './components/Button/button';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon'
function App() {
  return (
    <div>
      <header>
        <Icon icon="angle-down" theme="primary" className="arrow-icon"/>
        <Menu mode="horizontal" defaultOpenSubMenus={['3','香蕉5']} onSelect={ (val) => { console.log( val)}}>
          <MenuItem>
            香蕉1
          </MenuItem>
          <MenuItem>
            香蕉2
          </MenuItem>
          <MenuItem>
            香蕉3
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              香蕉5
            </MenuItem>
            <MenuItem>
              香蕉6
            </MenuItem>
          </SubMenu>
          <MenuItem>
            香蕉4
          </MenuItem>
          <SubMenu title="dropdown" index="香蕉5">
            <MenuItem>
              香蕉5
            </MenuItem>
            <MenuItem>
              香蕉6
            </MenuItem>
          </SubMenu>
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
