import { Component, OnInit } from '@angular/core';
import { GithubapisService } from '../service/data/githubapis.service';
import { HttpClient } from '@angular/common/http';


export class GitHub{
  constructor(
    public name : string,
    public description : string,
    public html_url : string 
  ) {}
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList : any
  errorMessage
  name : string
  description : string
  html_url : string
  githubList = []
  
  constructor(
    private githubapisService: GithubapisService
    
    ) { }

  ngOnInit() {
    this.retrieveGitHubProjects("chetan238")
  }

  retrieveGitHubProjects(chetan238){

    // this.projectsList = GitHub[100]
    this.githubapisService.retrieveGitHubProjects(chetan238).subscribe(
      response => {
        //console.log("githubData " + typeof(response) + " ")
        this.projectsList = response //JSON.stringify(response)
        this.getOutPutProjects(this.projectsList)
        //console.log("Project list___ " + typeof(this.projectsList))
      },
      error => {
        this.errorMessage = "Please Refresh!"
        //console.log(error)
      }
      
    )
  } 

  getOutPutProjects(projectsList){

    //console.log(projectsList.length)
    const notIncludeProject = ["ideal-new-repo","first-repo","login"]
    for(var i=0 ;i< projectsList.length; i++){
      this.name = projectsList[i]["name"]
      this.description = projectsList[i]["description"]
      this.html_url = projectsList[i]["html_url"]

      if (projectsList[i]["description"] == null){
          this.description = "Description Not Available!"
      }

      

     if(!notIncludeProject.includes(this.name))
      {

        this.description = projectsList[i]["description"]
        this.html_url = projectsList[i]["html_url"]
        console.log(this.name)
        console.log(this.description)
        console.log(this.html_url)
        
        if (projectsList[i]["description"] == null){
          this.description = "Description Not Available,Will Update Soon!"
     }
        
        this.githubList.push(new GitHub(this.name, this.description, this.html_url))


      }
      
    }

    //console.log(this.githubList)



  }




}
