export default class API {
    constructor(url) {
        this.url = url;
    }

    saveToken(token) {
        API.token = token;
    };

    getHeaders(withAuth) {
        return withAuth ? {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API.token || localStorage.token}`
        } : {
            'Content-Type': 'application/json'
        }
    }

    async GET(headers, param) {
        const res = await fetch(`${this.url}/${param ? param : ''}`, {
            method: 'GET',
            headers: headers
        });

        return res.json();
    }

    async POST(headers, data, param) {
        return await fetch(`${this.url}/${param ? param : ''}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
    }

    async PUT(headers, param, data) {
        return await fetch(`${this.url}/${param}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        });
    }

    async DELETE(headers, param) {
        return await fetch(`${this.url}/${param}`, {
            method: 'DELETE',
            headers: headers,
        })
    }
}
