import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.css']
})
export class WatchDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  watchdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/watch.json')
              .subscribe(data => {
                        this.watchdetail = data as string [];	
                          console.log(this.watchdetail);
     });
  }

}
