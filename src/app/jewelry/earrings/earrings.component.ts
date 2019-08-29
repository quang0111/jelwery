import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.css']
})
export class EarringsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  earrings: string[];
  ngOnInit() {

    this.httpClient.get('../assets/Data/jewelry/earrings.json')
              .subscribe(data => {
                        this.earrings = data as string [];	
                          console.log(this.earrings);
     });
  }

}
