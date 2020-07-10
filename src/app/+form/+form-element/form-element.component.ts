import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-form-element',
  templateUrl: './form-element.component.html',
})
export class FormElementComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
