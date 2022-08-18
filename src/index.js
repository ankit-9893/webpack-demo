/**
 * example for webpack assets module
 */
import hello from './hello';
import image from './add-image';
import ButtonComponent from './components/ButtonComponent';

console.log(hello());
image();

/**
 * example of wepack loader plugins
 */
const buttonComponent = new ButtonComponent();
buttonComponent.render();

