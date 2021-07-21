test('it works', () => { // the test
  // empty test is a false positive!
  expect(true).not.toBe(false) // one assertion
  expect(true).toBe(false) // another assertion
})
