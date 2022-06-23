import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { sharedTools } from './app-data/app-models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;
  displayedColumns = ['index', 'domain', 'name', 'location', 'description'];

  sharedTools = sharedTools;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sharedTools);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
