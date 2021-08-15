import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
 public apiKey:any='5f01b43149ff48009f68c45e6be52e14';
  constructor(private http: HttpClient) {}
  apiData(dataItems) {
    return this.http.get(
      'https://newsapi.org/v2/everything?q='+dataItems+'+&from=2021-07-15&sortBy=publishedAt&apiKey='+this.apiKey
    );
  }
}
