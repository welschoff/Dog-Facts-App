import { createElement } from './lib/elements';
import './style.css';
import createFactCard from './components/factCard';
import { fetchFact } from './lib/fetchFact';
import { createButtonElement } from './components/buttonComponent';
import { createFooterElement } from './components/footerComponent';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: '🐶 Dog - Facts 🐶',
      }),
    ]
  );

  async function onClick() {
    const newFact = await fetchFact();
    factCards.textContent = newFact;
  }

  const buttonElement = createButtonElement(onClick);
  const footerElement = createFooterElement();

  const dogFacts = await fetchFact();
  const factCards = createFactCard(dogFacts);

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },

    [
      createElement('img', {
        className: 'image',
        src: 'https://www.coldnosecollege.com/wp-content/uploads/2018/03/photodune-10916226-dog-reading-a-book-xs-300x300.jpg',
      }),

      factCards,
    ]
  );

  appElement.append(headerElement, buttonElement, mainElement, footerElement);
}
renderApp();
