import './settings-modal.css';
import { createButton } from './button.js';
import { isNonEmptyString } from '../utils.js';

/**
 * TODO: Write documentation.
 * @param {string} label
 * @param {string} href
 * @returns {string}
 */
function createNewTabLinkAsString (label, href) {
  if (!isNonEmptyString(label)) {
    throw new Error('New tab link requires a label.');
  }
  if (!isNonEmptyString(href)) {
    throw new Error('New tab link requires an href.');
  }
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>
  `;
}

/**
 * TODO: Write documentation.
 */
export function createSettingsModal () {
  const domDialog = document.createElement('dialog');
  domDialog.id = 'settings-modal';
  domDialog.innerHTML = `
    <header>
      <h2>Settings</h2>
      ${createButton({
        icon: 'fas fa-times fa-fw', tooltip: 'Close', id: 'close-settings',
        returnAsString: true
      })}
    </header>
    <section>
      <h3>Display Requests</h3>
      <ul>
      </ul>
    </section>
    <section>
      <h3>Colour Theme</h3>
      <ul>
      </ul>
    </section>
    <section>
      <h3>Miscellaneous</h3>
      <ul>
      </ul>
    </section>
    <section>
      <h3>Credits</h3>
      <ul>
        <li>${createNewTabLinkAsString('Logo', 'https://www.flaticon.com/free-icon/kitty_763709')} by Freepik</li>
        <li>${createNewTabLinkAsString('mark.js', 'https://markjs.io')} by Julian Kühnel</li>
        <li>${createNewTabLinkAsString('SheetJS Community Edition', 'https://docs.sheetjs.com')} by SheetJS LLC</li>
      </ul>
    </section>
    <footer>
      <div>
        <span>Tealman</span>
        <span>Version 3.1.5</span>
        <span>
          &copy; 2019-${new Date().getFullYear()}
          ${createNewTabLinkAsString('Mustafa Temel', 'https://www.temelm.com')}
        </span>
      </div>
      <div>
        ${createNewTabLinkAsString('Write a review', 'https://chrome.google.com/webstore/detail/tealman/kbppiimbnpoalogphgccdikkjhjolmfn')}
      </div>
    </footer>
  `;
  document.body.appendChild(domDialog);
  document.querySelector('#close-settings').addEventListener('click', () => {
    domDialog.close();
  });
}