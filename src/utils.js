/**
 * @todo: DOCUMENT.
 * @param {*} value
 * @returns {boolean}
 */
export function isNonEmptyString (value) {
  return typeof value === 'string' && value.length > 0;
};