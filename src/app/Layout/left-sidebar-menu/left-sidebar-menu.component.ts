import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-left-sidebar-menu',
  templateUrl: './left-sidebar-menu.component.html',
  styleUrls: ['./left-sidebar-menu.component.less']
})
export class LeftSidebarMenuComponent implements OnInit {
  menu: any[] = [];

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.menu = this.layoutService.getMenu();
  }
}
