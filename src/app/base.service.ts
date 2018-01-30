import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class BaseService {

    constructor(private readonly http: Http) { }
    async DoSome(data: any) {
        this.http.get('https://randomuser.me/api/', null).subscribe(x => {
            console.log(x);
        });
    }
}
