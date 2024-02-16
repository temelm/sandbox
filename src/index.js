import './index.css';
import { createIcon } from './components/icon.js';
import { createButton } from './components/button.js';

const domMain = document.createElement('main');
document.body.appendChild(domMain);

insertHorizontalRule();

// Icon Component
insertH1('Icon Component');
const domCatIcon = createIcon('fas fa-cat');
domMain.appendChild(domCatIcon);
insertLineBreak(); insertLineBreak();
domMain.innerHTML += createIcon('fas fa-dog', true);

insertHorizontalRule();

// Button Component
insertH1('Button Component');
domMain.appendChild(createButton({
  label: 'Button 1'
}));
insertLineBreak(); insertLineBreak();


insertHorizontalRule();

// Checkbox Component
insertH1('Checkbox Component');

insertHorizontalRule();

// Radio Cutton Component
insertH1('Radio Button Component');

insertHorizontalRule();

// Text Input component
insertH1('Text Input Component');

insertHorizontalRule();

/* -------------------------------------------------------------------------- */

function insertH1 (text) {
  const domH1 = document.createElement('h1');
  domH1.textContent = text;
  domMain.appendChild(domH1);
}

function insertLineBreak () {
  const domBr = document.createElement('br');
  domMain.appendChild(domBr);
}

function insertHorizontalRule () {
  const domHr = document.createElement('hr');
  domMain.appendChild(domHr);
}