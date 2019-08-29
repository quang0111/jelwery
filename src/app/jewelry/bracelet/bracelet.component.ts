import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.css']
})
export class BraceletComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  bracelet: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/bracelets.json')
              .subscribe(data => {
                        this.bracelet = data as string [];	
                          console.log(this.bracelet);
     });
  }

}
