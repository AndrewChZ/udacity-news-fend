// const generateHeadline = require('./generateHeadline')

jest.mock('./generateHeadline');

test ('Provides us with a list of headlines that we can randomly pick from', () => {

    const generateHeadline = require('./generateHeadline')

    // Set up our document body
    document.body.innerHTML =
        '<p>Type in your content or or <a href="" onclick="return generateHeadline()">test a random piece</a></p>' +
        '<input id="name" type="text" name="input" onkeypress="return inputValidate(event)" placeholder="Input any content here">';

    expect(generateHeadline()).toBeUndefined();
})