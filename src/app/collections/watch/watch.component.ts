import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  watch:string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/collections/watch.json')
              .subscribe(data => {
                        this.watch = data as string [];	
                          console.log(this.watch);
     });
    }

}
