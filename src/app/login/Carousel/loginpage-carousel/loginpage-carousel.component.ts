import { Component, OnInit } from '@angular/core';
import { loginCarousel } from '../loginCarousel';




@Component({
  selector: 'app-loginpage-carousel',
  templateUrl: './loginpage-carousel.component.html',
  styleUrls: ['./loginpage-carousel.component.css']
})
export class LoginpageCarouselComponent implements OnInit {
  carouselData:any;
  currentSlide=0;
  interval:any;
  constructor() { }

  ngOnInit(): void {
    this.carouselData=loginCarousel;
    this.autoPlay()
  }
  autoPlay(){
    setInterval(()=>{
       this.nextSlide();
     },2000)
     }
 
     nextSlide(){
       this.currentSlide=(this.currentSlide+1) % this.carouselData.length
       //when ever the carousel data reached at the last index then it will set to the first index.
     }
     
}
