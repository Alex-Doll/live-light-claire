// @flow

import Home from './home';
import About from './about';
import Services from './services';
import Events from './events';
import Scheduling from './scheduling';
import Contact from './contact';

function runScript(page: string): null {
  switch(page) {
  case '/':
    Home();
    break;
  case '/about':
    About();
    break;
  case '/services':
    Services();
    break;
  case '/events':
    Events();
    break;
  case '/scheduling':
    Scheduling();
    break;
  case '/contact':
    Contact();
    break;
  default:
    // eslint-disable-next-line no-console
    console.log('Page Not Found');
  }

  return null;
}

window.onload = runScript(window.location.pathname);
