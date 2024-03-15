const {
  convertTimeToWords
} = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles quarter times before 30', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles normal times before 30', () => {
    const timeInWords = convertTimeToWords('4:08');
    expect(timeInWords).toBe('eight past four');
  });

  it('Handles normal times after 30', () => {
    const timeInWords = convertTimeToWords('6:34');
    expect(timeInWords).toBe('twenty six to seven');
  });
});