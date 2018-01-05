// returns a function
// takes an argument of blockRange which is then used
//    to calculate if something is within range
// returns when something is out of range
function produceDrivingRange(range){
  return function(block1, block2){

    let block1Num = block1.replace( /\D+/g, '');
    let block2Num = block2.replace( /\D+/g, '');
    let result = (block2Num - block1Num)

    if (result < range){
      return `within range by ${result}`
    }
    if (result > range){
      return `${result - range} blocks out of range`
    }
    return "exact range"
  }
}
// returns a function
// configures the percentage tip returned
function produceTipCalculator(fare){
  return function(perCent){

    return fare * perCent
  }
}
// returns a class that allows us to create a driver with a name attribute
// increments the driverId each time a driver is created
function createDriver(){
  let DriverId = 0
  // return the class
  return class {
    constructor(name){
      this.id = ++DriverId
      this.name = name
    }
  }
}
