import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  chains:string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/collections/chain.json')
              .subscribe(data => {
                        this.chains = data as string [];	
                          console.log(this.chains);
     });
  }

}
