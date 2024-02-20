import './index.css';
import { createIcon } from './components/icon.js';
import { createButton } from './components/button.js';
import { createCheckbox } from './components/checkbox.js';

const domMain = document.createElement('main');
document.body.appendChild(domMain);

const domIconComponent = createSection('Icon Component');
domIconComponent.appendChild(createIcon('fas fa-cat'));
insertLineBreak(domIconComponent);
domIconComponent.innerHTML += createIcon('fas fa-cat', true);

const domButtonComponent = createSection('Button Component');
domButtonComponent.appendChild(createButton({ label: 'Button 1' }));
insertLineBreak(domButtonComponent);
domButtonComponent.innerHTML += createButton({
  label: 'Button 2', returnAsString: true
});
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  icon: 'fas fa-cat', tooltip: 'Button 3'
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 4', icon: 'fas fa-cat'
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 5', icon: 'fas fa-cat', tooltip: 'Button 5'
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 6', id: 'button-6'
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 7', disabled: true
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 8', icon: 'fas fa-cat', tooltip: 'Button 8', id: 'button-8',
  onClick: () => alert('Button 8')
}));
insertLineBreak(domButtonComponent);
domButtonComponent.appendChild(createButton({
  label: 'Button 9', icon: 'fas fa-cat', tooltip: 'Button 9', isPrimary: true,
  id: 'button-9', onClick: () => alert('Button 9')
}));

const domCheckboxComponent = createSection('Checkbox Component');
domCheckboxComponent.appendChild(createCheckbox({ label: 'Checkbox 1' }));
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.innerHTML += createCheckbox({
  label: 'Checkbox 2', returnAsString: true
});
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.appendChild(createCheckbox({
  label: 'Checkbox 3', tooltip: 'Checkbox 3'
}));
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.appendChild(createCheckbox({
  tooltip: 'Checkbox 4', checked: true
}));
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.appendChild(createCheckbox({
  label: 'Checkbox 5', id: 'checkbox-5'
}));
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.appendChild(createCheckbox({
  label: 'Checkbox 6', disabled: true
}));
insertLineBreak(domCheckboxComponent);
domCheckboxComponent.appendChild(createCheckbox({
  label: 'Checkbox 7', id: 'checkbox-7', onChange: () => alert('Checkbox 7')
}));
insertLineBreak(domCheckboxComponent);

/* -------------------------------------------------------------------------- */

function createSection (heading) {
  const domH1 = document.createElement('h1');
  domH1.textContent = heading;
  const domSection = document.createElement('section');
  domSection.appendChild(domH1);
  domMain.appendChild(domSection);
  return domSection;
}

function insertLineBreak (domParent) {
  const domBr1 = document.createElement('br');
  const domBr2 = document.createElement('br');
  domParent.appendChild(domBr1);
  domParent.appendChild(domBr2);
}