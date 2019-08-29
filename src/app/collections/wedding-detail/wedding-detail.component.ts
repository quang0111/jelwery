import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wedding-detail',
  templateUrl: './wedding-detail.component.html',
  styleUrls: ['./wedding-detail.component.css']
})
export class WeddingDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  weddingdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/wedding.json')
              .subscribe(data => {
                        this.weddingdetail = data as string [];	
                          console.log(this.weddingdetail);
     });
  }
}
