import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { AttributeModel } from './modules/dynamic/model/attribute.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  attributes: AttributeModel[]

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.attributes = this.appService.getElements()
  }
}
