import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-bootstrap-element',
  templateUrl: './bootstrap-element.component.html',
})
export class BootstrapElementComponent implements OnInit {

  public styleTheme: string = 'style-0';

  public styleThemes: Array<string> = ['style-0', 'style-1', 'style-2', 'style-3'];

  constructor() {}

  ngOnInit() {
  }

}
