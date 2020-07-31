// const generateHeadline = require('./generateHeadline')

import { inputValidate } from './inputValidate';

jest.mock('./inputValidate');

test ('Test that validation ran properly', () => {

    // Set up our document body
    document.body.innerHTML =
        `<form>
            <input id="name" type="text" name="input" value="Does anyone else feel like everything is opening wayyy too soon? Like we're still having 100+ deaths a day and yet Boris Johnson and his government don't seem to care because we're 'Winning the war against Covid-19' #lockdownuk">
            <div id="validation-message"></div>
            <input type="submit" id="submit-button" name="" value="Submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
        </form>`;
    
    let inputField = document.querySelector("#name");
    inputField.classList.value = "invalidInput"

    inputValidate();

    expect(inputValidate()).toBeUndefined();
})