import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {string} label
 * @param {object} [options]
 * @returns {HTMLButtonElement|boolean}
 */
export function createButton (label, options = {}) {
  if (!isNonEmptyString(label)) return false;
  if (isNonEmptyString(options.id) && document.getElementById(options.id)) return false;

  const domButton = document.createElement('button');
  domButton.innerHTML = `<span>${label}</span>`;
  domButton.classList.add('button');
  if (isNonEmptyString(options.id)) domButton.id = options.id;
  if (isNonEmptyString(options.title)) domButton.title = options.title;
  if (options.disabled) domButton.disabled = true;
  if (typeof options.onClick === 'function') domButton.addEventListener('click', options.onClick);

  return domButton;
}