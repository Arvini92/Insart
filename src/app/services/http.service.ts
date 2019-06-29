import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = 'access_token=94752c554caba82661b7e65aaca50ce0c2f80a36';

  constructor(private httpClient: HttpClient) { }

  getRepos() {
    return this.httpClient.get(
      `https://api.github.com/users/arvini92/repos?per_page=100&${this.token}`
    );
  }

  getFollowers() {
    return this.httpClient.get(
      `https://api.github.com/users/Arvini92/followers?${this.token}`
    ).pipe(
      map((followers: any) => {
        return followers.map((follower) => {
          return follower.url;
        });
      }),
      mergeMap((urls: any) => {
        return urls;
      }),
      mergeMap((url: any) => {
        return this.httpClient.get(`${url}?${this.token}`);
      })
    );
  }

}
