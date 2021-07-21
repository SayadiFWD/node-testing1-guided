test('it works', () => { // the test
  // empty test is a false positive!
  expect(true).not.toBe(true) // one assertion
  expect(true).toBe(true) // another assertion
})
