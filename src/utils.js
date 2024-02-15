/**
 * Checks whether the specified value is a non-empty string.
 * @param {*} value
 * @param {boolean} [trim]
 * @returns {boolean}
 */
export function isNonEmptyString (value, trim = false) {
  if (typeof value !== 'string') {
    return false;
  }
  return (trim === true) ? value.trim().length > 0 : value.length > 0;
}