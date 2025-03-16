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

  it("should sum n numbers with '\\n' delimiter", () => {
    expect(add("7\n2\n5\n8")).toBe(22);
  });

  it("should sum n numbers with '\\n' and ',' delimiter", () => {
    expect(add("7\n2,5\n8")).toBe(22);
  });

  it("should sum 2 numbers with dynamic delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should sum n numbers with dynamic delimiter", () => {
    expect(add("//;\n1;2;8")).toBe(11);
  });

  it("should throw error for negative number", () => {
    expect(() => add("//;\n1;-2;8")).toThrow("negative numbers not allowed -2");
  });

  it("should throw error for multiple negative numbers", () => {
    expect(() => add("//;\n1;-2;8;-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });

  it("should throw error without dynamic delimiter", () => {
    expect(() => add("1,-2,8\n-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });
});
