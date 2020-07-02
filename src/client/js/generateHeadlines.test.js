const generateHeadline = require('./generateHeadline')

test ('Provides us with a list of headlines that we can randomly pick from', () => {
    expect(generateHeadline()).toBeNaN();
})