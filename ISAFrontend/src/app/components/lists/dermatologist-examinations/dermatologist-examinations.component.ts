import { ExaminationsService } from './../../../services/examinations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dermatologist-examinations',
  templateUrl: './dermatologist-examinations.component.html',
  styleUrls: ['./dermatologist-examinations.component.css']
})
export class DermatologistExaminationsComponent implements OnInit {

  public id: any;
  public appointments= [] as  any;


  constructor(private examinationService: ExaminationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setUpAppointments();

  }

  setUpAppointments(): void {
    this.id = this.route.snapshot.params.id;
    this.examinationService.getAllAvailableExaminationsByPharmacyId(this.id).subscribe(data =>{
      this.appointments = data;
      console.log(data);
    })
  }

  reserveDermatologistAppointment(id): void {
    const body = {
      reservationId: id,
      patientId: this.id
    }
    this.examinationService.reserveExamination(body).subscribe(data =>{
      location.reload();
    })
  }

}
