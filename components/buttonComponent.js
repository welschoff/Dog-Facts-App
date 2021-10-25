import { createElement } from '../lib/elements';

export function createButtonElement(onClick) {
  const button = createElement(
    'form',
    {
      onclick: function (event) {
        event.preventDefault();
        onClick();
      },
    },
    [
      createElement('button', {
        className: 'button',
        type: 'onclick',
        textContent: 'Next',
      }),
    ]
  );
  return button;
}
