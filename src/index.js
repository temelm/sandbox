import './index.css';
import { createIconButton } from './components/icon-button.js';
import { createCheckbox } from './components/checkbox.js';

const domMain = document.querySelector('main');

domMain.appendChild(document.createElement('br'));
domMain.appendChild(document.createElement('br'));

domMain.appendChild(createIconButton('fas fa-cog', {
  id: 'settings-button',
  title: 'Settings',
  disabled: false,
  onClick: () => {
    console.log('Settings button clicked.');
  }
}));

domMain.appendChild(document.createElement('br'));
domMain.appendChild(document.createElement('br'));

domMain.appendChild(createCheckbox('Preserve log', {
  id: 'preserve-log-checkbox',
  title: 'Preserve log',
  checked: false,
  disabled: true,
  onClick: () => {
    console.log('Preserve log checkbox clicked.');
  }
}));