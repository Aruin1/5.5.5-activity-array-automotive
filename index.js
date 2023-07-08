const VehicleModule = require("./vehicleBaseClass")


class car extends VehicleModule {
    constructor(maxPassangers,maxSpeed,fuel,passanger,numberOfWheels){
        super(passanger,numberOfWheels)
        this.maxPassangers = maxPassangers
        this.maxSpeed = maxSpeed
        this.fuel = fuel
        this.maintenanceRequired = false
    }

    loadPassanger(num) {
        if(this.passanger + num <= this.maxPassangers){
            this.passanger += num
        } else {
            console.log("you can not load more than " + this.maxPassangers + " people")
        }
    }

    scheduleService(mileage) {
        if(mileage > 30000) {
            this.maintenanceRequired = true
        } else {
            this.maintenanceRequired = false
        }
    } 
}

let sedan = new car(5,160,10,0,4)

sedan.loadPassanger(5)

console.log(sedan.passanger)