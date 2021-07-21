test('it works', () => { // the test
  // empty test is a false positive!

  // assertions should be closely related
  expect(true).not.toBe(false) // one assertion
  expect(true).toBe(false) // another assertion
})
