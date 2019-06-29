import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  repos = [];
  reposChanged = new Subject<any>();
  followers = [];
  followersChanged = new Subject<any>();

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) { }

  isReposEmpty() {
    return this.repos.length === 0;
  }

  isFollowersEmpty() {
    return this.followers.length === 0;
  }

  sliceRepos() {
    const sortedData = this.localStorageService.getItem('sortedData');
    if (sortedData) {
      this.repos = [...sortedData];
      return this.repos.slice();
    } else {
      this.getRepos();
    }
  }

  sliceFollowers() {
    if (this.isFollowersEmpty()) {
      this.getFollowers();
    } else {
      return this.followers.slice();
    }
  }

  getRepos() {
    this.httpService.getRepos().subscribe((repos: []) => {
        this.repos = repos;
        this.reposChanged.next(this.repos.slice());
    });
  }

  getFollowers() {
    this.httpService.getFollowers().subscribe((followers: any) => {
        this.followers.push(followers);
        this.followersChanged.next(this.followers.slice());
    });
  }
}
