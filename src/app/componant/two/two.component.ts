import { Component, Input, OnInit } from '@angular/core';
import { Icource, Iemplyee, Imeeting, Iorder, IpatientRecord, Iplaylist, Istudent,Iproduct, Imovie, Ishipment ,Iconference,Iinvoice,IorderNow,Iticket,ItransactionBank, IproductSell, IguestBook, Icart, IrestaurantOrder, IclassSchedule, IecommerceOrder} from 'src/app/models/one';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  @Input() data01!:Imeeting
  @Input() data02! :Istudent
@Input() data03! :Iemplyee
@Input() course! : Icource
@Input() order! : Iorder
@Input() playlist ! : Iplaylist
@Input() patientRecord ! :IpatientRecord
@Input() product ! :Iproduct
@Input() movie! : Imovie
@Input() shipment! :Ishipment
@Input() conference! :Iconference
@Input() invoice ! :Iinvoice
@Input() orderNow !:IorderNow
@Input() ticket ! : Iticket
@Input() transactionBank ! : ItransactionBank
@Input() productSell ! :IproductSell
@Input() guestBook ! :IguestBook
@Input() cart ! :Icart
@Input() restaurantOrder ! : IrestaurantOrder
@Input() classSchedule ! : IclassSchedule
@Input() ecommerceOrder ! :IecommerceOrder
  constructor() { }

  ngOnInit(): void {
  }

}
