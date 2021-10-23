import { createElement } from '../lib/elements';

export function createButtonElement() {
  const button = createElement('input', {
    type: 'submit',
    value: 'Next',
    className: 'button',
  });
  return button;
}
