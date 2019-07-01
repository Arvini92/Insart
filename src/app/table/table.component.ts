import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() columnNames;
  @Input() typeOfTable = 'repos';

  displayedColumns: string[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource(this.data);

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames;

    if (this.typeOfTable === 'repos') {
      this.dataSource.connect().subscribe(sortedData => {
        this.localStorageService.setItem('sortedData', sortedData);
      });
    }

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.location && data.location.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource.data = this.data;
    if (this.dataSource.data) {
      this.dataSource.sort = this.sort;
    }
  }

}
