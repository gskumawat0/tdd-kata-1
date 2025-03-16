const add = require("../src/add");

describe("add", () => {
  it("should sum 2 numbers in string separated by ,", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should sum n comma separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("should sum numbers with '\\n' delimiter", () => {
    expect(add("7\n2")).toBe(9);
  });
});
