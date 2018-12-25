// @flow

import Home from './home';
import About from './about';
import Services from './services';
import Events from './events';
import Scheduling from './scheduling';
import Contact from './contact';

export function runScript(page: string): function {
  switch(page) {
  case '/':
    return Home;
  case '/about':
    return About;
  case '/services':
    return Services;
  case '/events':
    return Events;
  case '/scheduling':
    return Scheduling;
  case '/contact':
    return Contact;
    default:
      return scriptNotFound;
  }
}

export function scriptNotFound(): null {
  // eslint-disable-next-line no-console
  console.log('Page Not Found');

  return null;
}

window.onload = runScript(window.location.pathname);
