import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {string} icon
 * @param {object} [options]
 */
export function createIconButton (icon, options = {}) {
  if (!isNonEmptyString(icon)) {
    return false;
  }

  if (isNonEmptyString(options.id) && document.getElementById(options.id)) {
    return false;
  }

  const button = document.createElement('button');

  button.classList.add('icon-button');

  if (options.disabled) {
    button.setAttribute('disabled', true);
  }

  if (isNonEmptyString(options.id)) {
    button.setAttribute('id', options.id);
  }

  if (isNonEmptyString(options.title)) {
    button.setAttribute('title', options.title);
  }

  if (typeof options.onClick === 'function') {
    button.addEventListener('click', options.onClick);
  }

  button.innerHTML = `
    <i class="${icon}"></i>
  `;

  return button;
}