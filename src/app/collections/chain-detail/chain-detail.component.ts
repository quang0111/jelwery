import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chain-detail',
  templateUrl: './chain-detail.component.html',
  styleUrls: ['./chain-detail.component.css']
})
export class ChainDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  chaindetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/chains.json')
              .subscribe(data => {
                        this.chaindetail = data as string [];	
                          console.log(this.chaindetail);
     });
  }

}
