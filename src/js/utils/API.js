export default class API {
    constructor(url) {
        this.url = url;
    }

    saveToken(token) {
        API.token = token;
    };

    getHeaders(isAuth) {
        return isAuth ? {
            'Content-Type': 'application/json',
        } : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API.token || localStorage.token}`
        }
    }

    async GET(headers, param) {
        const res = await fetch(`${this.url}/${param ? param : ''}`, {
            method: 'GET',
            headers: headers
        });

        return res.json();
    }

    async POST(headers, param, data) {
        const response = await fetch(`${this.url}/${param ? param : ''}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })

        return response.json()
    }

    async PUT(headers, param, data) {
        const response = await fetch(`${this.url}/${param}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        });

        return response.json();
    }

    async DELETE(headers, param) {
        const response = await fetch(`${this.url}/${param}`, {
            method: 'DELETE',
            headers: headers,
        });

        return response.json()
    }
}
