import { createElement } from './lib/elements';
import './style.css';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Dog-Facts',
      }),
    ]
  );

  const mainElement = createElement('main', {
    className: 'main',
  });

  appElement.append(headerElement, mainElement);
}
renderApp();
