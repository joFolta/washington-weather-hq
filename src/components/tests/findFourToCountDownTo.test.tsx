import MockDate from 'mockdate'
import { findFourToCountDownTo } from '../ForecastCountdown';

describe('findFourToCountDownTo', () => {
    test('at 1pm, returns 3hrs in the future', () => {
        // Date.now = jest.fn(() => new Date("2023-09-22T17:00:00.000Z"))
        // VS the above, using 'mockdate' to avoid the typescript error below:
        // Type 'Mock<Date, [], any>' is not assignable to type '() => number'. Type 'Date' is not assignable to type 'number'.ts(2322)
        // see https://stackoverflow.com/a/60918716

        MockDate.set(new Date("2023-09-22T17:00:00.000Z"));
        expect(findFourToCountDownTo()).toBe("2023-09-22T20:00:00.000Z");
    });

    test('at 5pm, returns 11hrs in the future', () => {
        MockDate.set(new Date("2023-09-22T21:00:00.000Z"));
        expect(findFourToCountDownTo()).toBe("2023-09-23T08:00:00.000Z");
    });

    test('at 1am, returns 3hrs in the future', () => {
        MockDate.set(new Date("2023-09-22T05:00:00.000Z"));
        expect(findFourToCountDownTo()).toBe("2023-09-22T08:00:00.000Z");
    });

    test('at 5am, returns 11hrs in the future', () => {
        MockDate.set(new Date("2023-09-22T09:00:00.000Z"));
        expect(findFourToCountDownTo()).toBe("2023-09-22T20:00:00.000Z");
    });
})
