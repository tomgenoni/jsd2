var driver = {
  "firstName" : "Jeff",
  "lastName" : "Jones",
  "reservations" : {
    "car" : 222,
    "pickUp" : "12:30",
    "dropoff" : "14:00",
    "transfer" : function(id) {
      this.car = id
    },
  },
}

var cars = [
  {
    "id" : 222,
    "status" : "overdue",
    "location" : "San Francisco"
  },
  {
    "id" : 333,
    "status" : "parked",
    "location" : "San Francisco"
  }
]
