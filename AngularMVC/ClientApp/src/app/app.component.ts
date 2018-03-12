import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public baseUrl: string;
  public httpClient: HttpClient;
  public names: string[];

  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
    this.names = [];
    this.getNames();
  }

  getNames() {
    this.httpClient.get(this.baseUrl + 'api/Names/').subscribe(result => {
      this.names = result as string[];
    }, error => console.error(error));
  }

}

