import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  about: string[];
  ngOnInit() {
    this.httpClient.get('../assets/Data/about/about.json')
              .subscribe(data => {
                        this.about = data as string [];	
                          console.log(this.about);
     });
  }

}
