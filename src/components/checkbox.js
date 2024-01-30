import { isNonEmptyString } from '../utils.js';

/**
 * @todo: DOCUMENT.
 * @param {string} label
 * @param {object} [options]
 * @returns {HTMLElement|boolean}
 */
export function createCheckbox (label, options = {}) {
  if (!isNonEmptyString(label)) return false;
  if (isNonEmptyString(options.id) && document.getElementById(options.id)) return false;

  const domCheckbox = document.createElement('input');
  domCheckbox.type = 'checkbox';
  domCheckbox.classList.add('checkbox');
  if (isNonEmptyString(options.id)) domCheckbox.id = options.id;
  if (options.checked) domCheckbox.checked = true;
  if (options.disabled) domCheckbox.disabled = true;
  if (typeof options.onClick === 'function') domCheckbox.addEventListener('click', options.onClick);

  const domUncheckedIcon = document.createElement('i');
  domUncheckedIcon.classList.add('fas', 'fa-square');
  const domCheckedIcon = document.createElement('i');
  domCheckedIcon.classList.add('fas', 'fa-check-square');

  const domLabel = document.createElement('label');
  domLabel.appendChild(domCheckbox);
  domLabel.appendChild(domUncheckedIcon);
  domLabel.appendChild(domCheckedIcon);
  domLabel.appendChild(document.createTextNode(` ${label}`));
  domLabel.classList.add('checkbox-label');

  return domLabel;
}