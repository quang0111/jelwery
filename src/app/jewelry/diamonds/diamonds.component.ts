import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-diamonds',
  templateUrl: './diamonds.component.html',
  styleUrls: ['./diamonds.component.css']
})
export class DiamondsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  diamonds: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/diamonds.json')
              .subscribe(data => {
                        this.diamonds = data as string [];	
                          console.log(this.diamonds);
     });
  }

}
