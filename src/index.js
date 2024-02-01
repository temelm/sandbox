import './index.css';
import { createButton } from './components/button.js';
import { createCheckbox } from './components/checkbox.js';

document.body.style.padding = '1.5rem';
document.body.style.textAlign = 'center';

const domStyle = document.createElement('style');
domStyle.textContent = `
  section {
    border-top: 1px solid black;
    margin-top: 1rem;
    padding: 1rem;
    padding-bottom: 0;
  }

  section h3,
  section .button,
  section .checkbox {
    margin-bottom: 1rem;
  }

  section .button:last-child,
  section .checkbox:last-child {
    margin-bottom: 0;
  }

  section .checkbox {
    display: inline-block;
  }
`;
document.head.appendChild(domStyle);

const domButtonComponentSection = document.createElement('section');
domButtonComponentSection.appendChild(document.createElement('h3')).innerText = 'Button Component';
const buttonList = [
  createButton({ label: 'Button with label only', icon: undefined, tooltip: 'Button 1: With label only', id: 'button1', disabled: false, onClick: undefined }),
  createButton({ label: undefined, icon: 'fas fa-cog', tooltip: 'Button 2: With icon only', id: 'button2', disabled: false, onClick: undefined }),
  createButton({ label: 'Button with label and icon', icon: 'fas fa-cog', tooltip: 'Button 3: With label and icon', id: 'button3', disabled: false, onClick: undefined }),
  createButton({ label: 'Disabled button', icon: 'fas fa-cog', tooltip: 'Button 4: Disabled', id: 'button4', disabled: true, onClick: undefined }),
  createButton({ label: 'Button with click handler', icon: 'fas fa-cog', tooltip: 'Button 5: With click handler', id: 'button5', disabled: false, onClick: () => console.log('Button 5 clicked')})
]
buttonList.forEach((button, index) => {
  domButtonComponentSection.appendChild(button);
  if (index + 1 < buttonList.length) domButtonComponentSection.appendChild(document.createElement('br'));
})
document.body.appendChild(domButtonComponentSection);

const domCheckboxComponentSection = document.createElement('section');
domCheckboxComponentSection.appendChild(document.createElement('h3')).innerText = 'Checkbox Component';
const checkboxList = [
  createCheckbox({ label: 'Checkbox with label', tooltip: 'Checkbox 1: With label', id: 'checkbox1', checked: false, disabled: false, onClick: undefined }),
  createCheckbox({ label: undefined, tooltip: 'Checkbox 2: Without label', id: 'checkbox2', checked: false, disabled: false, onClick: undefined }),
  createCheckbox({ label: 'Checked by default', tooltip: 'Checkbox 3: Checked by default', id: 'checkbox3', checked: true, disabled: false, onClick: undefined }),
  createCheckbox({ label: 'Disabled checkbox', tooltip: 'Checkbox 4: Disabled', id: 'checkbox4', checked: false, disabled: true, onClick: undefined }),
  createCheckbox({ label: 'Checkbox with click handler', tooltip: 'Checkbox 5: With click handler', id: 'checkbox5', checked: false, disabled: false, onClick: () => console.log('Checkbox 5 clicked')  }),
]
checkboxList.forEach((checkbox, index) => {
  domCheckboxComponentSection.appendChild(checkbox);
  if (index + 1 < checkboxList.length) domCheckboxComponentSection.appendChild(document.createElement('br'));
});
document.body.appendChild(domCheckboxComponentSection);