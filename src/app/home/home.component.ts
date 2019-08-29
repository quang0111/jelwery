import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  
  collections: string[];
  jewelry: string [];
  bestseller: string [];


  ngOnInit() {
          this.httpClient.get('../assets/Data/home/home_collections.json')
              .subscribe(data => {
                        this.collections = data as string [];	
                          console.log(this.collections); 
                      });
            this.httpClient.get('../assets/Data/home/home_jewelry.json')
              .subscribe(data => {
                         this.jewelry = data as string [];	
                          console.log(this.jewelry); 
                       });
            this.httpClient.get('../assets/Data/home/home_bestseller.json')
              .subscribe(data => {
                    this.bestseller = data as string [];	
                      console.log(this.bestseller); 
                       });
  }

}
