import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  jsonRequest: Array<any>=[];
  resources;
  url='https://api.jsonbin.io/b/5f81a04b65b18913fc5d777f/3';
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(map(res => res || []));
}



  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // this.http.get<any>('http://localhost:3000/services').subscribe(data => {
    //  this.jsonRequest=data as Array<any>;
    //  console.log(this.jsonRequest);
this.getData().subscribe(
  res => {
      let resources = res;
      this.resources= res;
      console.log(resources);
      console.log(this.resources)
  }
);

    }

    
  }







