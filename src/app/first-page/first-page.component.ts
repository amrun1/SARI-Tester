import { Component, OnInit } from '@angular/core';
import { CapacitorService } from 'src/services/capacitor.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private capacitor: CapacitorService) { }

  data: any

  ngOnInit() {
    this.getInfo()
  }
  getInfo() {
    this.capacitor.getInfo().then(val => {
      console.log(val);
      this.data = val
    });
  }
}
