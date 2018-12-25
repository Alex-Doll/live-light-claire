import { runScript, scriptNotFound } from './index';
import Home from './home';
import About from './about';
import Services from './services';
import Events from './events';
import Scheduling from './scheduling';
import Contact from './contact';

const routesToTest = [
  {
    name: 'Home',
    route: '/',
    routeScript: Home,
  },
  {
    name: 'About',
    route: '/about',
    routeScript: About,
  },
  {
    name: 'Services',
    route: '/services',
    routeScript: Services,
  },
  {
    name: 'Events',
    route: '/events',
    routeScript: Events,
  },
  {
    name: 'Scheduling',
    route: '/scheduling',
    routeScript: Scheduling,
  },
  {
    name: 'Contact',
    route: '/contact',
    routeScript: Contact,
  },
  {
    name: 'Unknown',
    route: '/unknown',
    routeScript: scriptNotFound,
  },
];

routesToTest.forEach(({ name, route, routeScript }, index) => {
  test(`${name} route returns ${name} script`, () => {
    expect(runScript(route)).toBe(routeScript);
  });
});


test('Function should return null', () => {
  expect(scriptNotFound()).toBe(null);
});
