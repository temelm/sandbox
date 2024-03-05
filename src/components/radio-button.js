import './radio-button.css';
import { isNonEmptyString } from '../utils.js';
import { createIcon } from './icon.js';

/**
 * TODO: Write documentation.
 * @param {object} options
 * @returns {HTMLLabelElement|string}
 */
export function createRadioButton (options = {}) {
  const {
    label, group, variant, id, checked, disabled, onChange, returnAsString
  } = options;

  if (!isNonEmptyString(label)) {
    throw new Error('Radio button requires a label.');
  }
  if (!isNonEmptyString(group)) {
    throw new Error('Radio button requires a group.');
  }
  if (typeof onChange === 'function' && returnAsString === true) {
    throw new Error('Radio button with an onChange event cannot be returned as a string.');
  }

  const domRadioButton = document.createElement('input');
  domRadioButton.type = 'radio';
  domRadioButton.name = group;
  domRadioButton.classList.add('radio-button');
  if (isNonEmptyString(id)) {
    domRadioButton.id = id;
  }
  if (checked === true) {
    domRadioButton.checked = true;
  }
  if (disabled === true) {
    domRadioButton.disabled = true;
  }
  if (typeof onChange === 'function') {
    domRadioButton.addEventListener('change', onChange);
  }

  const domLabel = document.createElement('label');
  domLabel.classList.add('radio-button-label');
  if (variant === 'primary') {
    domLabel.classList.add(`${variant}-radio-button`);
  }
  domLabel.appendChild(domRadioButton);
  domLabel.appendChild(createIcon('fas fa-circle'));
  domLabel.appendChild(createIcon('fas fa-dot-circle'));
  domLabel.appendChild(document.createElement('span')).innerText = label;

  return (returnAsString === true) ? domLabel.outerHTML : domLabel;
}