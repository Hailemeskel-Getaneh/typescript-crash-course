// Interfaces only define structure, no implementation
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// One interface can extend another
interface CloudCalendar extends Calendar {
  sync(): void;
}

// A class implements an interface
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("Event added to Google Calendar");
  }

  removeEvent(): void {
    console.log("Event removed from Google Calendar");
  }
}


