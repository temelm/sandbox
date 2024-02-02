import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {string} label
 * @param {object} [options]
 * @returns {HTMLElement}
 */
export function createRadioButton (label, options = {}) {
  if (!isNonEmptyString(label)) throw new Error('Radio button requires a label.');

  const { id } = options;

  const domRadioButton = document.createElement('input');
  domRadioButton.type = 'radio';
  if (isNonEmptyString(id)) domRadioButton.id = id;

  const domUncheckedIcon = document.createElement('i');
  domUncheckedIcon.classList.add('fas', 'fa-circle');
  const domCheckedIcon = document.createElement('i');
  domCheckedIcon.classList.add('fas', 'fa-dot-circle');

  const domLabel = document.createElement('label');
  domLabel.appendChild(domRadioButton);
  domLabel.appendChild(domUncheckedIcon);
  domLabel.appendChild(domCheckedIcon);
  domLabel.appendChild(document.createElement('span')).innerText = ` ${label}`;
  domLabel.classList.add('radio-button');

  return domLabel;
}