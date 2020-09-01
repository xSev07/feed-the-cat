import {calculateBonus, declOfNum, deleteExtraSpaces} from "./common";

it(`Should check declination of number is correct`, () => {
  const textForms = [`тест`, `теста`, `тестов`];
  expect(declOfNum(1, textForms)).toBe(`тест`);
  expect(declOfNum(3, textForms)).toBe(`теста`);
  expect(declOfNum(10, textForms)).toBe(`тестов`);
});

it(`Should check calculate bonuses`, () => {
  expect(calculateBonus(10, 20)).toBe(1);
  expect(calculateBonus(10, 20, 5)).toBe(5);
  expect(calculateBonus(20, 20)).toBe(1);
  expect(calculateBonus(41, 20)).toBe(2);
  expect(calculateBonus(59, 20)).toBe(2);
  expect(calculateBonus(45, 0)).toBe(1);
  expect(calculateBonus(0, 20)).toBe(1);
});

it(`Should check deleting space is correct`, () => {
  expect(deleteExtraSpaces(`test   test`)).toBe(`test test`);
  expect(deleteExtraSpaces(`test  test`)).toBe(`test test`);
  expect(deleteExtraSpaces(`test
        test
        test`)).toBe(`test test test`);
});
