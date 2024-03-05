import './panel-header.css';
import { createTextInput } from './text-input.js';
import { createButton } from './button.js';
import { createCheckbox } from './checkbox.js';

/**
 * TODO: Write documentation.
 */
export function createPanelHeader () {
  const domNavLeft = document.createElement('div');
  domNavLeft.id = 'nav-left';
  domNavLeft.appendChild(createTextInput({
    placeholder: 'Find string in logs', id: 'search-term' // TODO: Review placeholder text.
  }));
  domNavLeft.appendChild(createButton({
    icon: 'fas fa-arrow-up fa-fw', tooltip: 'Find previous', variant: 'primary',
    id: 'search-previous', disabled: true
  }));
  domNavLeft.appendChild(createButton({
    icon: 'fas fa-arrow-down fa-fw', tooltip: 'Find next', variant: 'primary',
    id: 'search-next', disabled: true
  }));

  const domNavRight = document.createElement('div');
  domNavRight.id = 'nav-right';
  domNavRight.appendChild(createCheckbox({
    label: 'Preserve log', variant: 'primary', id: 'preserve-log'
  }));
  domNavRight.appendChild(createCheckbox({
    label: 'Select all requests', variant: 'primary', id: 'select-all-requests',
    disabled: true
  }));
  domNavRight.appendChild(createButton({
    icon: 'fas fa-trash-alt fa-fw', tooltip: 'Clear requests',
    variant: 'primary', id: 'clear-requests', disabled: true
  }));
  domNavRight.appendChild(createButton({
    icon: 'fas fa-file-export fa-fw', tooltip: 'Export requests',
    variant: 'primary', id: 'export-requests', disabled: true
  }));
  domNavRight.appendChild(createButton({
    icon: 'fas fa-cog fa-fw', tooltip: 'Settings', variant: 'primary',
    id: 'open-settings'
  }));

  const domNav = document.createElement('nav');
  domNav.appendChild(domNavLeft);
  domNav.appendChild(domNavRight);

  const domPanelHeader = document.createElement('header');
  domPanelHeader.id = 'panel-header';
  domPanelHeader.appendChild(domNav);

  document.body.prepend(domPanelHeader);
}