const mockFn = jest.fn();

test("if user insert number not email, it will return false", () => {
  expect(mockFn(123)).toBe(false);
});

test("if user insert string not email, it will return false", () => {
  expect(mockFn("asda")).toBe(false);
});

test("if user insert string not email, it will return false", () => {
  expect(mockFn("asda@asd")).toBe(false);
});

test("if user insert string not email, it will return true", () => {
  expect(mockFn("asda@asd.com")).toBe(true);
});
