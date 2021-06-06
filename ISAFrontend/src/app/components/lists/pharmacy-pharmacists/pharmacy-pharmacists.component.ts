import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-pharmacists',
  templateUrl: './pharmacy-pharmacists.component.html',
  styleUrls: ['./pharmacy-pharmacists.component.css']
})
export class PharmacyPharmacistsComponent implements OnInit {

  public id: any;
  public pharmacists: any;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.setUpPharmacists();
  }

  setUpPharmacists(): void{
    this.id = this.route.snapshot.params.id;
      this.userService.getPharmacist(this.id).subscribe(data =>{
        this.pharmacists = data;
        console.log(data);
      })
  }

  reserve(id): void {
    this.router.navigateByUrl(`home-page/new-consultation/${id}`);
  }

}
