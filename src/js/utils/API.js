export default class API {
    static URL = 'https://ajax.test-danit.com/api/v2/cards';

    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API.token || localStorage.token}`
        }
    }

    static saveToken(token) {
        API.token = token;
    };

    static async login(user) {
        return await fetch(`${this.URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    static async createVisit(card) {
        const res = await fetch(`${this.URL}`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(card)
        });

        return res.json();
    }

    static async removeVisit(id) {
        await fetch(`${this.URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${API.token || localStorage.token}`
            },
        });
    }

    static async getAllVisits() {
        const res = await fetch(`${this.URL}`, {
            method: 'GET',
            headers: API.getHeaders(),
        });

        return res.json();
    }

    static async getVisit(id) {
        const res = await fetch(`${this.URL}/${id}`, {
            method: 'GET',
            headers: API.getHeaders(),
        });

        return res.json();
    }

    static async editVisit(visit) {
        const res = await fetch(`${this.URL}/${visit.id}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(visit)
        });

        return res.json();
    }
}
