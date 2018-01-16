it("test jest install complete", () => {
  const test = function() {
    return 1 + 1
  }
  expect(test()).toBe(2)
})
