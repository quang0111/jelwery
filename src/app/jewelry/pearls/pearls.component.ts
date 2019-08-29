import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pearls',
  templateUrl: './pearls.component.html',
  styleUrls: ['./pearls.component.css']
})
export class PearlsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  pearl: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/pearl.json')
              .subscribe(data => {
                        this.pearl = data as string [];	
                          console.log(this.pearl);
     });
  }

}
