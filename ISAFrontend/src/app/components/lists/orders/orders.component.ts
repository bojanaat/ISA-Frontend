import { MedicineService } from './../../../services/medicine.service';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders = [] as any;
  public orderMedicaments = [] as any;
  public name : any;

  constructor(private router: Router, private orderService: OrderService, private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
    this.name = "Order";
    this.orderService.getOrders().subscribe(data => {
      data.forEach(order => {
        this.orders.push(order);
        this.medicineService.getAllMedsByOrderId(order.id).subscribe(data =>{
          data.forEach(order => {
            console.log(order);
            console.log("order");
            let medOrder = {
              orderId: order.orderResponse.id,
              medName: order.medicineResponse.name,
              quantity: order.quantity,
            }
            this.orderMedicaments.push(medOrder);
          });
        })
        console.log(this.orderMedicaments);
      });
       
    })

    
  }

  createOffer(id): void{
    this.router.navigate([`home-page/new-offer/${id}`]);
  }

}
