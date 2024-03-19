import './text-input.css';
import { isNonEmptyString } from '../utils.js';

/**
 * TODO: Write documentation.
 * @param {object} options
 * @returns {HTMLInputElement|string}
 */
export function createTextInput (options = {}) {
  const { placeholder, id, disabled, returnAsString } = options;

  if (!isNonEmptyString(placeholder)) {
    throw new Error('Text input requires a placeholder.');
  }
  if (typeof onKeyUp === 'function' && returnAsString === true) {
    throw new Error('Text input with an onKeyUp event cannot be returned as a string.');
  }

  const domTextInput = document.createElement('input');
  domTextInput.type = 'text';
  domTextInput.classList.add('text-input');
  if (isNonEmptyString(id)) {
    domTextInput.id = id;
  }
  domTextInput.placeholder = placeholder;
  if (disabled === true) {
    domTextInput.disabled = true;
  }

  return (returnAsString === true) ? domTextInput.outerHTML : domTextInput;
}