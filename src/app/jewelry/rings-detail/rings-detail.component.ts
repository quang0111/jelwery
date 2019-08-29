import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rings-detail',
  templateUrl: './rings-detail.component.html',
  styleUrls: ['./rings-detail.component.css']
})
export class RingsDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ringdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/ring.json')
              .subscribe(data => {
                        this.ringdetail = data as string [];	
                          console.log(this.ringdetail);
     });
  }

}
