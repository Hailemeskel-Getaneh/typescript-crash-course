// static members in classes.
// Static members are properties or methods that belong to the class itself rather than to instances of the class.
// They can be accessed without creating an instance of the class.

class User {
  static count = 0;

  constructor(public name: string) {
    User.count++;
  }

  static getUserCount() {
    return User.count;
  }
}


class Ride {
    static activeRides: number = 0;
    
    // if you do not use static keyword, each instance of the class will have its own copy of the property.
    // Static properties are shared across all instances of the class.
    
    startRide() {
        Ride.activeRides++;
        console.log(`Ride started. Active rides: ${Ride.activeRides}`);
    }
    
    stopRide() {        
        if (Ride.activeRides > 0) {
            Ride.activeRides--;
            console.log(`Ride stopped. Active rides: ${Ride.activeRides}`);
        } else {
            console.log('No active rides to stop.');
        }
    }
}

// Example usage
const ride1 = new Ride();
ride1.startRide(); // Ride started. Active rides: 1
const ride2 = new Ride();
ride2.startRide(); // Ride started. Active rides: 2
ride1.stopRide(); // Ride stopped. Active rides: 1
ride2.stopRide(); // Ride stopped. Active rides: 0