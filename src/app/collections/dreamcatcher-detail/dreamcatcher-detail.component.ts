import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dreamcatcher-detail',
  templateUrl: './dreamcatcher-detail.component.html',
  styleUrls: ['./dreamcatcher-detail.component.css']
})
export class DreamcatcherDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  dreamdetail: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/dreamcatcher.json')
              .subscribe(data => {
                        this.dreamdetail = data as string [];	
                          console.log(this.dreamdetail);
     });
  }
}
