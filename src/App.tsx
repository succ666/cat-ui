import React from 'react';
import './App.css';
import Button, {ButtonSize, ButtonType}  from './components/Button/button';

function App() {
  return (
    <div>
      <header>
        <Button disabled>button</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>button</Button>

        <Button 
          btnType={ButtonType.Link} 
          size={ButtonSize.Large} 
          href='www.baidu.com'>
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
