test('it works', () => { // the test
  // empty test is a false positive!

  // assertions should be closely related
  expect(true).not.toBe(true) // one assertion
  expect(true).toBe(true) // another assertion
})
