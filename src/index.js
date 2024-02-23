import './index.css';
import { createIcon } from './components/icon.js';
import { createButton } from './components/button.js';
import { createCheckbox } from './components/checkbox.js';
import { createRadioButton } from './components/radio-button.js';

/* -------------------------------------------------------------------------- */

document.documentElement.dataset.colorScheme = 'light';

function getColorScheme () {
  return document.documentElement.dataset.colorScheme;
}

function toggleColorScheme () {
  document.documentElement.dataset.colorScheme
    = (getColorScheme() === 'light') ? 'dark' : 'light';
}

document.getElementById('toggle-color-scheme')
  .addEventListener('click', toggleColorScheme);

/* -------------------------------------------------------------------------- */

const domMain = document.createElement('main');
document.body.appendChild(domMain);

function insertLineBreak (domParent, count = 2) {
  for (let i = 0; i < count; i++) {
    domParent.appendChild(document.createElement('br'));
  }
}

function createSection (heading) {
  const domH1 = document.createElement('h1');
  domH1.textContent = heading;
  const domSection = document.createElement('section');
  domSection.appendChild(domH1);
  insertLineBreak(domSection, 1);
  domMain.appendChild(domSection);
  return domSection;
}

/* -------------------------------------------------------------------------- */

const domIconComponent = createSection('Icon Component');
domIconComponent.appendChild(createIcon('fas fa-cat'));
insertLineBreak(domIconComponent);
domIconComponent.innerHTML += createIcon('fas fa-cat', true);

/* -------------------------------------------------------------------------- */

const buttonData = [
  { label: 'Button 1' },                                       // With label
  { label: 'Button 2', disabled: true },                       // With label + disabled
  { icon: 'fas fa-cat', tooltip: 'Button 3' },                 // With icon
  { icon: 'fas fa-cat', tooltip: 'Button 4', disabled: true }, // With icon + disabled
  { label: 'Button 5', icon: 'fas fa-cat' },                   // With label + icon
  { label: 'Button 6', icon: 'fas fa-cat', disabled: true },   // With label + icon + disabled
];
const domButtonComponent = createSection('Button Component');
for (let i = 0; i < buttonData.length; i++) {
  domButtonComponent.appendChild(createButton(buttonData[i]));
  if (i < buttonData.length - 1) {
    insertLineBreak(domButtonComponent);
  }
  
}

/* -------------------------------------------------------------------------- */

const checkboxData = [
  { label: 'Checkbox 1' },                                // With label
  { label: 'Checkbox 2', checked: true },                 // With label + checked
  { label: 'Checkbox 3', disabled: true },                // With label + disabled
  { label: 'Checkbox 4', checked: true, disabled: true }, // With label + checked + disabled
  { tooltip: 'Checkbox 1' },                                // Without label
  { tooltip: 'Checkbox 2', checked: true },                 // Without label + checked
  { tooltip: 'Checkbox 3', disabled: true },                // Without label + disabled
  { tooltip: 'Checkbox 4', checked: true, disabled: true }, // Without label + checked + disabled

];
const domCheckboxComponent = createSection('Checkbox Component');
for (let i = 0; i < checkboxData.length; i++) {
  domCheckboxComponent.appendChild(createCheckbox(checkboxData[i]));
  if (i < checkboxData.length - 1) {
    insertLineBreak(domCheckboxComponent);
  }
}

/* -------------------------------------------------------------------------- */

const radioButtonData = [
  { label: 'Radio Button A1', group: 'group-a' },
  { label: 'Radio Button A2', group: 'group-a' },
  { label: 'Radio Button A3', group: 'group-a', disabled: true },                // With disabled
  { label: 'Radio Button A4', group: 'group-a', checked: true, disabled: true }, // With checked + disabled
  { label: 'Radio Button B1', group: 'group-b' },
  { label: 'Radio Button B2', group: 'group-b' },
  { label: 'Radio Button B3', group: 'group-b', disabled: true },                // With disabled
  { label: 'Radio Button B4', group: 'group-b', checked: true, disabled: true }, // With checked + disabled
  
];
const domRadioButtonComponent = createSection('Radio Button Component');
for (let i = 0; i < radioButtonData.length; i++) {
  domRadioButtonComponent.appendChild(createRadioButton(radioButtonData[i]));
  if (i < radioButtonData.length - 1) {
    insertLineBreak(domRadioButtonComponent);
  }
}