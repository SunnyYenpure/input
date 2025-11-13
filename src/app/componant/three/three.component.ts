import { Component, Input, OnInit, } from '@angular/core';
import { Imovie1, Iperson, Iphone, Istd, Itrip, } from 'src/app/models/one';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  @Input() person!:Iperson
@Input()std!:Istd
@Input()  phone!:Iphone
@Input() movie1!:Imovie1
@Input() trip! :Itrip
// @Input() trip! :Itrip
// @Input() movie! :Imovie1


  onstructor() { }

  ngOnInit(): void { }
}
