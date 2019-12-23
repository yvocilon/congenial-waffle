export async function getPosts(): Promise<ReadonlyArray<string>> {
    return new Promise(function fetchPosts(resolve, reject) {
        setTimeout(function waitForPosts() {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 2000)
    })
}