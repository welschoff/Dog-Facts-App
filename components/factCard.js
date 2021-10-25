import { createElement } from '../lib/elements';
import styles from './factCard.module.css';

export default function createFactCard(fact) {
  const factCard = createElement('article', {}, [
    createElement('p', {
      className: styles.fact,
      textContent: fact,
    }),
  ]);

  return factCard;
}
