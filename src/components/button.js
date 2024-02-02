import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {object} options
 * @returns {HTMLElement}
 */
export function createButton (options = {}) {
  const { label, icon, tooltip, id, disabled, onClick } = options;

  if (!isNonEmptyString(label) && !isNonEmptyString(icon)) throw new Error('Button requires a label or an icon.');
  if (!label && !isNonEmptyString(tooltip)) throw new Error('Icon button requires a tooltip.');

  const domButton = document.createElement('button');
  domButton.innerHTML = `
    ${icon ? `<span><i class="${icon}"></i></span>` : ''}
    ${label ? `<span>${label}</span>` : ''}
  `;
  if (isNonEmptyString(tooltip)) domButton.title = tooltip;
  domButton.classList.add('button');
  if (!label) domButton.classList.add('icon-button');
  if (isNonEmptyString(id)) domButton.id = id;
  if (disabled) domButton.disabled = true;
  if (typeof onClick === 'function') domButton.addEventListener('click', onClick);

  return domButton;
}