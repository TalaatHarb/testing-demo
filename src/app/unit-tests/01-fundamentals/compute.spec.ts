import { compute } from './compute';

describe('compute', () => {

    it('should return zero for negative numbers', () => {
        const num = -Math.floor(100 * Math.random());
        const result = compute(num);
        expect(result).toBe(0);
    });

    it('should increment positive numbers', () => {
        const num = Math.floor(100 * Math.random());
        const result = compute(num);
        expect(result).toBe(num + 1);
    });

});
