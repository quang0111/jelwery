import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  rings: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/rings.json')
              .subscribe(data => {
                        this.rings = data as string [];	
                          console.log(this.rings);
     });
  }

}
