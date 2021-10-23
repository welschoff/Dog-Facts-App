import { createElement } from './lib/elements';
import './style.css';
import createFactCard from './components/factCard';
import { fetchFact } from './lib/fetchFact';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: '🐶 Dog-Facts 🐶',
      }),
    ]
  );

  const dogFacts = await fetchFact();
  const factCards = createFactCard(dogFacts);

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [factCards]
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
