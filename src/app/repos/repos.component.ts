import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnDestroy {
  repos = [];
  reposChangedSubscription: Subscription;
  displayedColumns: string[] = ['index', 'name', 'html_url', 'language', 'created_at'];

  constructor(
    private dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
    this.repos = this.dataStorageService.sliceRepos();
    this.reposChangedSubscription = this.dataStorageService.reposChanged.subscribe((repos) => {
      this.repos = repos;
    });
  }

  ngOnDestroy() {
    this.reposChangedSubscription.unsubscribe();
  }

}
