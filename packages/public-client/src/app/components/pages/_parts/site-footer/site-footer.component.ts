import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  @Input() address: string = '';
  @Input() phone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
