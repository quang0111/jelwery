import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diamond-detail',
  templateUrl: './diamond-detail.component.html',
  styleUrls: ['./diamond-detail.component.css']
})
export class DiamondDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  diamonddetail: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/diamond.json')
              .subscribe(data => {
                        this.diamonddetail = data as string [];	
                          console.log(this.diamonddetail);
     });
  }

}
