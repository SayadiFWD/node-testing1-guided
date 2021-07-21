const Car = require('./car')
function foo() { return 5 } // this comes from another module
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
  expect(result).toMatchObject(check)
})
it('foo returns 5', () => {
  const actual = foo()
  const expected = 5
  expect(actual).toBe(expected)
  expect(foo()).toBe(5)
})

// TDD:
// (1) write test first see it fail
// (2) write code see test pass
// (3) reward yourself refactoring
describe('car class', () => { // not a test
  it('exists', () => {
    expect(Car).toBeDefined()
    expect(Car).toBeTruthy()
    expect(Car).not.toBeNull()
  })

  it('can make instances of Car', () => {
    const car = new Car()
    // test that car is an instance of the Car class
    expect(car).toBeInstanceOf(Car)
  })

  it('makes cars with a "make" prop in them', () => {
    const prius = new Car
  })
})
