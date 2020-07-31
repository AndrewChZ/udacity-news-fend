// const generateHeadline = require('./generateHeadline')

import { handleSubmit } from './formHandler';

jest.mock('./formHandler');

test ('Test that form handler ran properly', () => {

    expect(handleSubmit()).toBeUndefined();
})