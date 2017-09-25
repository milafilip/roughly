const Roughly = require("../src/index");

describe("a case", () => {
  const x = new Roughly.number({ greaterThan: 10, lessThan: 20 });

  test("greater than", () => {
    expect(x.greaterThan(9)).toBeTruthy();
    expect(x.greaterThan(10)).toBeTruthy();
    expect(x.greaterThan(19)).toBeUndefined();
    expect(x.gt(19.9)).toBeUndefined();
    expect(x.greaterThan(20)).toBeFalsy();
    expect(x.gt(5)).toBeTruthy();
  });

  test("less than", () => {
    expect(x.lessThan(10)).toBeFalsy();
    expect(x.lessThan(9)).toBeFalsy();
    expect(x.lessThan(10.1)).toBeUndefined();
    expect(x.lt(20.0)).toBeTruthy();
    expect(x.lessThan(20.1)).toBeTruthy();
  });
});

describe("another case", () => {
  const x = new Roughly.number({ greaterThan: -10 });

  test("greater than", () => {
    expect(x.greaterThan(19)).toBeUndefined();
    expect(x.greaterThan(-9.9)).toBeUndefined();
    expect(x.greaterThan(-10)).toBeTruthy();
    expect(x.greaterThan(-10.1)).toBeTruthy();
  });

  test("less than", () => {
    expect(x.lessThan(19)).toBeUndefined();
    expect(x.lessThan(-10)).toBeFalsy();
    expect(x.lessThan(-10.1)).toBeFalsy();
  });
});
