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
  followers;
  followersChangedSubscription: Subscription;
  displayedColumns: string[] = ['index', 'avatar_url', 'name', 'login', 'location', 'html_url'];

  dataSource = new MatTableDataSource();

  constructor(
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.followers = this.dataStorageService.sliceFollowers();

    this.followersChangedSubscription = this.dataStorageService.followersChanged.subscribe((followers: []) => {
      this.followers = followers;
    });
  }

  ngOnDestroy() {
    this.followersChangedSubscription.unsubscribe();
  }

}
