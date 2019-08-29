import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pendant',
  templateUrl: './pendant.component.html',
  styleUrls: ['./pendant.component.css']
})
export class PendantComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  pendants: string[];

  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/pendants.json')
              .subscribe(data => {
                        this.pendants = data as string [];	
                          console.log(this.pendants);
     });
  }

}
