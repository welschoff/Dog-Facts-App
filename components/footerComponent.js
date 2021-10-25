import { createElement } from '../lib/elements';

export function createFooterElement() {
  const footer = createElement('footer', {
    className: 'footer',
    textContent: 'created by Fabi & Hendrik',
  });
  return footer;
}
