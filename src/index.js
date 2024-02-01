import './index.css';
import { createButton } from './components/button.js';

document.body.style.textAlign = 'center';

document.body.prepend(document.createElement('br'));
document.body.prepend(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

const buttonList = [];
buttonList.push(createButton());
buttonList.push(createButton({}));
buttonList.push(createButton({ label: 'Button 3' }));
buttonList.push(createButton({ icon: 'fas fa-cog' }));
buttonList.push(createButton({ label: 'Button 5', icon: 'fas fa-cog' }));
buttonList.push(createButton({ label: 'Button 6', icon: 'fas fa-cog', id: 'button-6' }));
buttonList.push(createButton({ label: 'Button 7', icon: 'fas fa-cog', id: 'button-7', title: 'Button 7' }));
buttonList.push(createButton({ label: 'Button 8', icon: 'fas fa-cog', id: 'button-8', title: 'Button 8', disabled: true }));
buttonList.push(createButton({ label: 'Button 9', icon: 'fas fa-cog', id: 'button-9', title: 'Button 9', onClick: () => console.log('Button 9  clicked.') }));

buttonList.forEach(button => {
  if (button) {
    document.body.appendChild(button);
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
  }
});