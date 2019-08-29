import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charming',
  templateUrl: './charming.component.html',
  styleUrls: ['./charming.component.css']
})
export class CharmingComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  charmring:string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/charmring.json')
              .subscribe(data => {
                        this.charmring = data as string [];	
                          console.log(this.charmring);
     });
  }

}
