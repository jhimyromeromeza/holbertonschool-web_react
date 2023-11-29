import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

test('getFullYear returns the correct year', () => {
    const year = Date().getFullYear();
    expect(getFullYear()).toBe(year);
});

test('getFooterCopy returns correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLastestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});