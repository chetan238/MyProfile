import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GitHub } from 'src/app/projects/projects.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubapisService {

  constructor(private http: HttpClient) { }

  retrieveGitHubProjects(username){
    return this.http.get(`https://api.github.com/users/` + username + `/repos`)
    // .pipe(
    //   map(
    //     this.extractData
    //   )
    // );

    
    // return this.http.get<GitHub[]>(`http://localhost:8000/projects/myprojects/`)
    
  }

  retrieveGithubBio(username){
    return this.http.get(`https://api.github.com/users/` + username)
  }
  // private extractData(res: Response) {
  //   let body = res;
  //   console.log(res)
    
  //   return body
    
  //   return body.data || [];
  // }
}
