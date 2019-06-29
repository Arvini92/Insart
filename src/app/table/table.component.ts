import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  reposChangedSubscription: Subscription;
  displayedColumns: string[] = ['index', 'name', 'url', 'language', 'created_at'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource();

  constructor(
    private dataStorageService: DataStorageService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.dataStorageService.sliceRepos();
    if (this.dataSource.data) {
      this.dataSource.sort = this.sort;
    }
    this.reposChangedSubscription = this.dataStorageService.reposChanged.subscribe((repos) => {
      this.dataSource.data = repos;
      this.dataSource.sort = this.sort;
    });

    this.dataSource.connect().subscribe(sortedData => {
      this.localStorageService.setItem('sortedData', sortedData);
    });
  }

  ngOnDestroy() {
    this.reposChangedSubscription.unsubscribe();
  }
}
