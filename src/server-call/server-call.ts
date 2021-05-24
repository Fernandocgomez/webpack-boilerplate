export class ServerCall {
    constructor() { }

    get(payload: any): Promise<any> {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .catch((error: any) => console.log(error));
    }
}