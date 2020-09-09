import { Component, OnInit } from '@angular/core';
import { GithubapisService } from '../service/data/githubapis.service';
import { HttpClient } from '@angular/common/http';

// declare var require: any
// const FileSaver = require('file-saver')

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  
  errorMessage
  bio : any
  introDetails : any = {}
  public avatar_url = ""
  constructor(
    private githubapisService: GithubapisService

  ) { }

  ngOnInit() {
    this.introDetails.imageUrl = ""
    this.retrieveGithubBio("mohitmanglani2906")
  }

  // downloadPdf(){
  //   console.log("DownLoad method Called")
  //   const pdfUrl = './assets/resume/resume.pdf';
  //   const pdfName =  'Mohit Manglani'
  //   console.log(pdfUrl)
  //   FileSaver.saveAs(pdfUrl, pdfName)
  // }

  retrieveGithubBio(username){
    this.githubapisService.retrieveGithubBio(username).subscribe(
        response =>{
          this.bio = response
          this.introDetails.introduction = JSON.stringify(this.bio["bio"])
          this.introDetails.imageUrl = JSON.stringify(this.bio["avatar_url"])
          this.avatar_url =  this.introDetails.imageUrl
          //console.log("Avatar Url___ " +this.avatar_url)
        },
        error =>{
          this.errorMessage = "Please Refresh!"
          console.log(error)
        }

    )
  }


}
