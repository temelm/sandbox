import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {string} icon
 * @param {object} [options]
 * @returns {HTMLElement|boolean}
 */
export function createIconButton (icon, options = {}) {
  if (!isNonEmptyString(icon)) return false;
  if (isNonEmptyString(options.id) && document.getElementById(options.id)) return false;

  const domIconButton = document.createElement('button');
  domIconButton.innerHTML = `<i class="${icon}"></i>`;
  domIconButton.classList.add('icon-button');
  if (isNonEmptyString(options.id)) domIconButton.id = options.id;
  if (isNonEmptyString(options.title)) domIconButton.title = options.title;
  if (options.disabled) domIconButton.disabled = true;
  if (typeof options.onClick === 'function') domIconButton.addEventListener('click', options.onClick);

  return domIconButton;
}