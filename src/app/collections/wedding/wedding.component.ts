import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  wedding:string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/collections/wedding.json')
              .subscribe(data => {
                        this.wedding = data as string [];	
                          console.log(this.wedding);
     });
  }

}
