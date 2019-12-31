import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    private url = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get<any[]>(this.url);
    }

    getUser(userId) {
        return this.http.get<any>(this.getUserUrl(userId));
    }

    addUser(user) {
        return this.http.post<any>(this.url, JSON.stringify(user));
    }

    updateUser(user) {
        return this.http.put<any>(this.getUserUrl(user.id), JSON.stringify(user));
    }

    deleteUser(userId) {
        return this.http.delete(this.getUserUrl(userId));
    }

    private getUserUrl(userId) {
        return this.url + '/' + userId;
    }
}
