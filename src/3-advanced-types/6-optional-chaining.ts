// Optional chaining allows you to safely access deeply nested properties without having to check each level for null or undefined.
// This is useful for avoiding runtime errors when dealing with objects that may not have certain properties defined
// or when working with APIs that may return incomplete data.   

// Example:
function getUserProfile(user: { name?: string; address?: { city?: string } }) {
    // Using optional chaining to safely access nested properties
    const userName = user.name ?? "Guest";
    const userCity = user.address?.city ?? "Unknown City";  // Use optional chaining to avoid errors if address is undefined and return unknown city if city is not defined.

    console.log(`User: ${userName}, City: ${userCity}`);
}
// Example usage
const user1 = { name: "Alice", address: { city: "Wonderland" } };
const user2 = { name: "Bob" }; // address is undefined  
getUserProfile(user1); // Output: User: Alice, City: Wonderland
getUserProfile(user2); // Output: User: Bob, City: Unknown City