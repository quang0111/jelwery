import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bracelet-detail',
  templateUrl: './bracelet-detail.component.html',
  styleUrls: ['./bracelet-detail.component.css']
})
export class BraceletDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  braceletsdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/bracelets.json')
              .subscribe(data => {
                        this.braceletsdetail = data as string [];	
                          console.log(this.braceletsdetail);
     });
  }
}
