import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charmring-detail',
  templateUrl: './charmring-detail.component.html',
  styleUrls: ['./charmring-detail.component.css']
})
export class CharmringDetailComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  charmringdetail: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/detail/charmring.json')
              .subscribe(data => {
                        this.charmringdetail = data as string [];	
                          console.log(this.charmringdetail);
     });
  }

}
