import './index.css';
import { createButton } from './components/button.js';

document.body.style.padding = '1.5rem';
document.body.style.textAlign = 'center';

const domStyle = document.createElement('style');
domStyle.textContent = `
  section {
    border-top: 1px solid black;
    margin-top: 1rem;
    padding: 1rem;
  }

  section h3,
  section .button {
    margin-bottom: 1rem;
  }
`;
document.head.appendChild(domStyle);

const domButtonComponentSection = document.createElement('section');
domButtonComponentSection.appendChild(document.createElement('h3')).innerText = 'Button Component';
[
  createButton({ label: 'Button with label', icon: '', id: 'button1', title: 'Button 1: With label', disabled: false, onClick: undefined }),
  createButton({ label: '', icon: 'fas fa-cog', id: 'button2', title: 'Button 2: With icon', disabled: false, onClick: undefined }),
  createButton({ label: 'Button with label and icon', icon: 'fas fa-cog', id: 'button3', title: 'Button 3: With label and icon', disabled: false, onClick: undefined }),
  createButton({ label: 'Disabled button', icon: 'fas fa-cog', id: 'button4', title: 'Button 4: Disabled', disabled: true, onClick: undefined }),
  createButton({ label: 'Button with click handler', icon: 'fas fa-cog', id: 'button5', title: 'Button 5: With click handler', disabled: false, onClick: () => console.log('Button 5 clicked')})
].forEach(button => {
  domButtonComponentSection.appendChild(button);
  domButtonComponentSection.appendChild(document.createElement('br'));
})
document.body.appendChild(domButtonComponentSection);
document.body.appendChild(document.createElement('hr'));