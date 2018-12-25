import { runScript, scriptNotFound } from './index';
import Home from './home';
import About from './about';
import Services from './services';
import Events from './events';
import Scheduling from './scheduling';
import Contact from './contact';

test('Root route returns Home script', () => {
  expect(runScript('/')).toBe(Home);
});

test('About route returns About script', () => {
  expect(runScript('/about')).toBe(About);
});

test('Services route returns Services script', () => {
  expect(runScript('/services')).toBe(Services);
});

test('Events route returns Events script', () => {
  expect(runScript('/events')).toBe(Events);
});

test('Scheduling route returns Scheduling script', () => {
  expect(runScript('/scheduling')).toBe(Scheduling);
});

test('Contact route returns Contact script', () => {
  expect(runScript('/contact')).toBe(Contact);
});

test('Unknown route should return console.log', () => {
  expect(runScript('unknownRoute')).toBe(scriptNotFound);
});

test('Function should return null', () => {
  expect(scriptNotFound()).toBe(null);
});
