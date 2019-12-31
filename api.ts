export async function getPosts(): Promise<ReadonlyArray<string>> {
    return new Promise(function fetchPosts(resolve, reject) {
        setTimeout(function waitForPosts() {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 2000)
    })
}

export type Products = ReadonlyArray<Product>;

export interface Product {
    name: string
    src: string
}

export async function getLatestProducts(): Promise<Products> {
    return new Promise(function fetchLatestProducts(resolve, reject) {
        setTimeout(function waitForLatestProducts() {
            resolve([{
                name: 'Product 1',
                src: 'https://via.placeholder.com/150'
            },
            {
                name: 'Product 2',
                src: 'https://via.placeholder.com/150'
            },
            {
                name: 'Product 3',
                src: 'https://via.placeholder.com/150'
            },
            {
                name: 'Product 4',
                src: 'https://via.placeholder.com/150'
            }]);
        }, 300)
    })
}