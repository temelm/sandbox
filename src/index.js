import './index.css';
import { createButton } from './components/button.js';

document.body.appendChild(createButton(
  'Hello',
  {
    id: 'hello-button',
    title: 'Hello',
    disabled: false,
    onClick: () => console.log('Hello')
  }
));