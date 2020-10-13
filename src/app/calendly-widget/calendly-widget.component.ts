import { Component, OnInit } from '@angular/core';
import { 
  NgModule, 
  VERSION, 
  ElementRef,
  ViewChild
} from '@angular/core'
@Component({
  selector: 'app-calendly-widget',
  template:
  ` 
    
        // <div #container class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false">Set-Cookie: third_party_var=value; SameSite=None; Secure;</div>
        <iframe
        width="560" height="315" src="https://www.youtube.com/embed/mo8thg5XGV0"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>
  `,
  styleUrls: ['./calendly-widget.component.css']
})

export class CalendlyWidgetComponent implements OnInit {
  @ViewChild('container') container: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  
  }

}
