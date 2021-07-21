class Car {
  constructor(make, model) {
    this.odometer = 0
    this.make = make
    this.model = model
  }

  drive (miles) {
    this.odometer += miles
  }
}

module.exports = Car
