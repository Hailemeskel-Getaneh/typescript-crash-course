

// Generic interfaces

// let us assume of a website with products and users to be fetched

interface Result<T>{

    data: T | null
    error: string | null
}

function fetch<T>(url: string): Result<T>{
    return{ data: null, error: null}
}

interface User{
    username: string
}

interface Product{
    title: string
}

let result1 = fetch<User>('url')
// result1.data?.username is type of User

let result2 = fetch<Product>('url')
// result2.data is type of product