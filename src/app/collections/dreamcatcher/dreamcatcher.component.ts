import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dreamcatcher',
  templateUrl: './dreamcatcher.component.html',
  styleUrls: ['./dreamcatcher.component.css']
})
export class DreamcatcherComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  dreamcatcher:string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/collections/dreamcatcher.json')
              .subscribe(data => {
                        this.dreamcatcher = data as string [];	
                          console.log(this.dreamcatcher);
     });
  }

}
