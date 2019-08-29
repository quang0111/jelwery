import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-earring-detail',
  templateUrl: './earring-detail.component.html',
  styleUrls: ['./earring-detail.component.css']
})
export class EarringDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  earringdetail: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/earring.json')
              .subscribe(data => {
                        this.earringdetail = data as string [];	
                          console.log(this.earringdetail);
     });
  }
}
