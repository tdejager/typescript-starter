import hello from './index';

describe('Hello component', () => {
  it('says hello', () => {
    expect.assertions(1);
    expect(hello()).toStrictEqual('Hello!');
  });
});
