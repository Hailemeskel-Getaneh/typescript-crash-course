// Interfaces are like abstract class and methods but the are not important of you have any detail logic.

interface Calander{

    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface cloudCalander extends Calander{
    sync(): void;
}

interface GoogleCalander implements Calander{
    constructor(public name: string){}

    addEvent(): void{
        throw new Error("This method is not implemented");
        
    }

    removeEvent(): void{
        throw new Error("This method is not implemented")
    }
}