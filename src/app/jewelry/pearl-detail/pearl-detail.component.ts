import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pearl-detail',
  templateUrl: './pearl-detail.component.html',
  styleUrls: ['./pearl-detail.component.css']
})
export class PearlDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  pearldetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/pearl.json')
              .subscribe(data => {
                        this.pearldetail = data as string [];	
                          console.log(this.pearldetail);
     });
  }

}
