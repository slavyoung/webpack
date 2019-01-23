import _ from 'lodash';
import './style.css';
import Bike from './bike.jpg';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  var btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = Bike;

   element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
