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
  let prius
  beforeEach(() => {
    // any code your want running before each test
    // let's intantiate a new car!!!
    prius = new Car('toyota', 'prius')
  })
  // beforeAll()
  // afterEach()
  // afterAll()

  it('exists', () => {
    expect(Car).toBeDefined()
    expect(Car).toBeTruthy()
    expect(Car).not.toBeNull()
  })
  it('can make instances of Car', () => {
    // test that car is an instance of the Car class
    expect(prius).toBeInstanceOf(Car)
  })
  it('makes cars with a "make" prop in them', () => {
    expect(prius.make).toBeDefined()
    expect(prius).toHaveProperty('make')
  })
  it('can create cars with the given "make" prop', () => {
    expect(prius.make).toBe('toyota')
  })
  it('can create cars with "make" and "model"', () => {
    expect(prius).toMatchObject(
      { make: 'toyota', model: 'prius' }
    )
  })
  it('has a drive method', () => {
    expect(prius.drive).toBeDefined()
    expect(Car.prototype.drive).toBe(prius.drive)
  })
  it('has an odometer that starts at zero', () => {
    expect(prius.odometer).toBe(0)
    expect(prius).toHaveProperty('odometer', 0)
  })
  it('driving increases odometer', () => {
    prius.drive(15)
    expect(prius.odometer).toBeGreaterThan(0)
    expect(prius.odometer).toBe(15)
    expect(prius).toHaveProperty('odometer', 15)
    expect(prius).toMatchObject({ odometer: 15 })
  })
  it('driving returns the updated odometer', () => {
    expect(prius.drive(10)).toBe(10)
    expect(prius.drive(10)).toBe(20)
    expect(prius.drive(10)).toBe(30)
  })
  it('has a driveAsync method that resolves to the updated odometer', () => {
    
  })
})
