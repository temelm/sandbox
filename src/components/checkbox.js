import './checkbox.css';
import { isNonEmptyString } from '../utils.js';
import { createIcon } from './icon.js';

/**
 * TODO: Write documentation.
 * @param {object} options
 * @returns {HTMLLabelElement|string}
 */
export function createCheckbox (options = {}) {
  const {
    label, tooltip, variant, id, checked, disabled, onChange, returnAsString
  } = options;

  if (!isNonEmptyString(label) && !isNonEmptyString(tooltip)) {
    throw new Error('Checkbox requires a label or a tooltip.');
  }
  if (typeof onChange === 'function' && returnAsString === true) {
    throw new Error('Checkbox with an onChange event cannot be returned as a string.');
  }

  const domCheckbox = document.createElement('input');
  domCheckbox.type = 'checkbox';
  domCheckbox.classList.add('checkbox');
  if (isNonEmptyString(id)) {
    domCheckbox.id = id;
  }
  if (checked === true) {
    domCheckbox.checked = true;
  }
  if (disabled === true) {
    domCheckbox.disabled = true;
  }
  if (typeof onChange === 'function') {
    domCheckbox.addEventListener('change', onChange);
  }

  const domLabel = document.createElement('label');
  domLabel.classList.add('checkbox-label');
  if (variant === 'primary') {
    domLabel.classList.add(`${variant}-checkbox`);
  }
  if (isNonEmptyString(tooltip)) {
    domLabel.title = tooltip;
  }
  domLabel.appendChild(domCheckbox);
  domLabel.appendChild(createIcon('fas fa-square'));
  domLabel.appendChild(createIcon('fas fa-check-square'));
  if (isNonEmptyString(label)) {
    domLabel.appendChild(document.createElement('span')).innerText = label;
  }

  return (returnAsString === true) ? domLabel.outerHTML : domLabel;
}