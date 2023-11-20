const index_hello_world  = require("./../index.js");

test('say hello world', () => {
    expect(index_hello_world()).toBe("hello world");
  });