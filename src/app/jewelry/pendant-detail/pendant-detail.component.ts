import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pendant-detail',
  templateUrl: './pendant-detail.component.html',
  styleUrls: ['./pendant-detail.component.css']
})
export class PendantDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  pendantdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/pendant.json')
              .subscribe(data => {
                        this.pendantdetail = data as string [];	
                          console.log(this.pendantdetail);
     });
  }
}
