import './index.css';
import { createIcon } from './components/icon.js';
import { createButton } from './components/button.js';
import { createCheckbox } from './components/checkbox.js';
import { createRadioButton } from './components/radio-button.js';
import { createTextInput } from './components/text-input.js';
import { createPanelHeader } from './components/panel-header.js';

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
  { label: 'Button 1' },                                                            // With label
  { label: 'Button 2', disabled: true },                                            // With label + disabled
  { icon: 'fas fa-cat', tooltip: 'Button 3' },                                      // With icon
  { icon: 'fas fa-cat', tooltip: 'Button 4', disabled: true },                      // With icon + disabled
  { label: 'Button 5', icon: 'fas fa-cat' },                                        // With label + icon
  { label: 'Button 6', icon: 'fas fa-cat', disabled: true },                        // With label + icon + disabled
  { label: 'Button 7', variant: 'primary' },                                        // Primary variant with label
  { label: 'Button 8', variant: 'primary', disabled: true },                        // Primary variant with label + disabled
  { icon: 'fas fa-cat', tooltip: 'Button 9', variant: 'primary' },                  // Primary variant with icon
  { icon: 'fas fa-cat', tooltip: 'Button 10', variant: 'primary', disabled: true }, // Primary variant with icon + disabled
  { label: 'Button 11', icon: 'fas fa-cat', variant: 'primary' },                   // Primary variant with label + icon
  { label: 'Button 12', icon: 'fas fa-cat', variant: 'primary', disabled: true },   // Primary variant with label + icon + disabled
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
  { label: 'Checkbox 1' },                                                       // With label
  { label: 'Checkbox 2', checked: true },                                        // With label + checked
  { label: 'Checkbox 3', disabled: true },                                       // With label + disabled
  { label: 'Checkbox 4', checked: true, disabled: true },                        // With label + checked + disabled
  { tooltip: 'Checkbox 5' },                                                     // Without label
  { tooltip: 'Checkbox 6', checked: true },                                      // Without label + checked
  { tooltip: 'Checkbox 7', disabled: true },                                     // Without label + disabled
  { tooltip: 'Checkbox 8', checked: true, disabled: true },                      // Without label + checked + disabled
  { label: 'Checkbox 9', variant: 'primary' },                                   // Primary variant with label
  { label: 'Checkbox 10', variant: 'primary', checked: true },                   // Primary variant with label + checked
  { label: 'Checkbox 11', variant: 'primary', disabled: true },                  // Primary variant with label + disabled
  { label: 'Checkbox 12', variant: 'primary', checked: true, disabled: true },   // Primary variant with label + checked + disabled
  { tooltip: 'Checkbox 13', variant: 'primary' },                                // Primary variant without label
  { tooltip: 'Checkbox 14', variant: 'primary', checked: true },                 // Primary variant without label + checked
  { tooltip: 'Checkbox 15', variant: 'primary', disabled: true },                // Primary variant without label + disabled
  { tooltip: 'Checkbox 16', variant: 'primary', checked: true, disabled: true }, // Primary variant without label + checked + disabled
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
  { label: 'Radio Button A2', group: 'group-a', disabled: true },
  { label: 'Radio Button A3', group: 'group-a', checked: true, disabled: true },
  { label: 'Radio Button A4', group: 'group-a' },
  { label: 'Radio Button B1', group: 'group-b', variant: 'primary' },
  { label: 'Radio Button B2', group: 'group-b', variant: 'primary', disabled: true },
  { label: 'Radio Button B3', group: 'group-b', variant: 'primary', checked: true, disabled: true },
  { label: 'Radio Button B4', group: 'group-b', variant: 'primary' },
];
const domRadioButtonComponent = createSection('Radio Button Component');
for (let i = 0; i < radioButtonData.length; i++) {
  domRadioButtonComponent.appendChild(createRadioButton(radioButtonData[i]));
  if (i < radioButtonData.length - 1) {
    insertLineBreak(domRadioButtonComponent);
  }
}

/* -------------------------------------------------------------------------- */

const textInputData = [
  { placeholder: 'Text Input 1' },
  { placeholder: 'Text Input 2', disabled: true },
];
const domTextInputComponent = createSection('Text Input Component');
for (let i = 0; i < textInputData.length; i++) {
  domTextInputComponent.appendChild(createTextInput(textInputData[i]));
  if (i < textInputData.length - 1) {
    insertLineBreak(domTextInputComponent);
  }
}

/* -------------------------------------------------------------------------- */

createPanelHeader();

/* -------------------------------------------------------------------------- */