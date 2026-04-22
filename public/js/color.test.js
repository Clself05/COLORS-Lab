import { addColor, searchColor } from './code';

// Mock the XMLHttpRequest constructor
global.XMLHttpRequest = jest.fn(() => ({
    open: jest.fn(),
    setRequestHeader: jest.fn(),
    send: jest.fn(),
    onreadystatechange: null, // to be called manually later
}));

beforeEach(() => {
    // Set up mocks before each test
    document.body.innerHTML = `
    <input type="text" id="colorText" value="blue" />
    <button id="addColorButton" onclick="addColor()"></button>
    <span id="colorAddResult"></span>
  `;

    // Mock the XMLHttpRequest to invoke onreadystatechange
    global.XMLHttpRequest.mockClear();
});

test('addColor adds a color successfully', () => {
    // Mock the response of the XMLHttpRequest
    const mockResponse = { results: [] };
    const mockXhr = {
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: jest.fn(),
        onreadystatechange: null
    };

    global.XMLHttpRequest = jest.fn(() => mockXhr);

    // Mock the send method to call the onreadystatechange callback
    mockXhr.send.mockImplementationOnce(function () {
        this.readyState = 4;
        this.status = 200;
        this.responseText = JSON.stringify(mockResponse);
        this.onreadystatechange && this.onreadystatechange();
    });

    // Call the addColor function
    addColor();

    // Assert that the result is updated correctly
    expect(document.getElementById('colorAddResult').innerHTML).toBe('Color has been added');
});