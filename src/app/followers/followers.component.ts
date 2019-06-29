import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit, OnDestroy {
  followersChangedSubscription: Subscription;
  displayedColumns: string[] = ['index', 'avatar_url', 'name', 'login', 'location', 'html_url'];

  dataSource = new MatTableDataSource();

  constructor(
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.dataStorageService.sliceFollowers();

    this.followersChangedSubscription = this.dataStorageService.followersChanged.subscribe((followers: []) => {
      this.dataSource.data = followers;
    });

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.location && data.location.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.followersChangedSubscription.unsubscribe();
  }

}
