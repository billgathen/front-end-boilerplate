describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("can see tests", function() {
    expect(echo('hello')).toBe('hellos');
  });
});
