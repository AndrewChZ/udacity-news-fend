// import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { generateHeadline } from './js/generateHeadline';
import { inputValidate } from './js/inputValidate';
// import { sum } from './js/testFunction';
import "./styles/style.scss";
import img from './img/illustration.svg';

export { handleSubmit, generateHeadline, inputValidate, img }

console.log("Load successful");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }