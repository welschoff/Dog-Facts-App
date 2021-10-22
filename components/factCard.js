import { createElement } from '../lib/elements';
import styles from './factCard.module.css';

export default function createFactCard(fact) {
  const factCard = createElement(
    'article',
    {
      className: styles.text,
    },
    [
      createElement('p', {
        textContent: fact,
      }),
    ]
  );

  return factCard;
}
