import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import {fr} from "../../../assets/"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  bannerImgs=[
{
  id:1,
  img:"https://pngtree.com/freebackground/ecommerce-banner-planning-segmentation-selection_1859485.html"
},

{
  id:2,


}
  ]

}
