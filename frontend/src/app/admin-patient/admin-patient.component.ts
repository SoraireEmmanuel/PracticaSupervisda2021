import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent implements OnInit {

public today= new Date().getDay;
  constructor() { }

  ngOnInit(): void {
  }

}
