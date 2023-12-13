import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent  implements OnInit {
  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string =""
  @Input()
  cardDescription: string =""
  @Input()
  id: string="0"



constructor(){ }

ngOnInit(): void{}

}
