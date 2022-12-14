import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
  // first test
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  it('should display the word strong if strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  })

  it('should display the word unbelievable if strength is 20 or above', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(20)).toEqual('20 (unbelievable)');
  })
})
