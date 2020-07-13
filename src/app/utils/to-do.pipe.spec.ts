import { ToDoPipe } from './to-do.pipe';

describe('ToDoPipe', () => {
  it('create an instance', () => {
    const pipe = new ToDoPipe();
    expect(pipe).toBeTruthy();
  });
});
