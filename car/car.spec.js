test('it works', () => { // the test
  // empty test is a false positive!

  // assertions should be closely related
  expect(true).not.toBe(false) // one assertion
  expect(true).toBe(true) // another assertion
})

test('objects', () => {
  expect({}).toEqual({})
  expect([1, 2]).toEqual([1, 2])
  // expect([1, 3]).toBe([1, 2])
  // expect({}).toBe({})
})
