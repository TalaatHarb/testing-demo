import { greet } from './greet';

describe('greet', () => {
    it('should include the given name', () => {
        const name = 'mosh';
        const result = greet(name);
        expect(result).toContain(name);
    });
});
