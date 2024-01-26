import './index.css';
import { createIconButton } from './components/icon-button.js';

const domMain = document.querySelector('main');
domMain.appendChild(createIconButton('fas fa-cat', {
  id: 'cat-button',
  title: 'Cat',
  onClick: () => {
    alert('Meow');
  }
}));