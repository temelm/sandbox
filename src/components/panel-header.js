import './panel-header.css';
import { createButton } from './button.js';

/**
 * @todo: Write documentation.
 * @returns {HTMLHeaderElement}
 */
export function createPanelHeader () {
  const domNavLeft = document.createElement('div');
  domNavLeft.id = 'nav-left';

  const domNavRight = document.createElement('div');
  domNavRight.id = 'nav-right';
  domNavRight.appendChild(createButton({
    icon: 'fas fa-cog', tooltip: 'Settings', variant: 'primary',
    id: 'open-settings'
  }));

  const domNav = document.createElement('nav');
  domNav.appendChild(domNavLeft);
  domNav.appendChild(domNavRight);

  const domHeader = document.createElement('header');
  domHeader.id = 'panel-header';
  domHeader.appendChild(domNav);

  document.body.prepend(domHeader);
}