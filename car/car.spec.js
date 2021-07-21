test('it works', () => { // the test
  // empty test is a false positive!

  // assertions should be closely related
  expect(true).not.toBe(false) // one assertion
  expect(true).toBe(true) // another assertion
})

test('objects', () => {
  expect({}).toEqual({})
  expect([1, 2]).toEqual([1, 2])
  // expect([1, 3]).toBe([1, 2]) // FAILS!
  // expect({}).toBe({}) // FAILS
  const obj = { a: 1 }
  const obj2 = obj
  expect(obj).toBe(obj2)
  const result = { a: 1, b: 2, c: 3 }
  const check = { a: 1, b: 2 }
  expect(result).
})
