// Nullish coaelescing operator
// The nullish coalescing operator (??) is used to provide a default value when
// a variable is null or undefined. It allows you to handle cases where a value
// may not be present without throwing an error, making your code more robust.
// This is particularly useful when dealing with optional properties or API responses
// that may not always return a value.

// Example:
function getProductPrice(price: number | null | undefined): string {
    // Using nullish coalescing to provide a default value if price is null or undefined
    const finalPrice = price ?? "Price not available";
    return `The product price is: ${finalPrice}`;
}   