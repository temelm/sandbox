import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {object} options
 * @returns {HTMLElement}
 */
export function createCheckbox (options = {}) {
  const { label, tooltip, id, checked, disabled, onClick } = options;

  if (!isNonEmptyString(label) && !isNonEmptyString(tooltip)) throw new Error('Checkbox requires a label or a tooltip.');

  const domCheckbox = document.createElement('input');
  domCheckbox.type = 'checkbox';
  if (isNonEmptyString(id)) domCheckbox.id = id;
  if (checked) domCheckbox.checked = true;
  if (disabled) domCheckbox.disabled = true;
  if (typeof onClick === 'function') domCheckbox.addEventListener('click', onClick);

  const domUncheckedIcon = document.createElement('i');
  domUncheckedIcon.classList.add('fas', 'fa-square');
  const domCheckedIcon = document.createElement('i');
  domCheckedIcon.classList.add('fas', 'fa-check-square');

  const domLabel = document.createElement('label');
  domLabel.appendChild(domCheckbox);
  domLabel.appendChild(domUncheckedIcon);
  domLabel.appendChild(domCheckedIcon);
  if (label) domLabel.appendChild(document.createElement('span')).innerText = ` ${label}`;
  if (tooltip) domLabel.title = tooltip;
  domLabel.classList.add('checkbox');

  return domLabel;
}