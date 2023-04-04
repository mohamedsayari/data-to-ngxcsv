import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv';


   
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  data = [
    {
      name: "mohamed",
      age: 13,
     
      

      description: "bengerdenne"
    },
    {
      name: 'jamel',
      age: 11,
      
 
      description: "sfax"
    },
    {
      name: 'sameh',
      age: 10,
     
      
      description: "tunis"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
   

  downloadCSV(){
  var options = {
    title: 'Groupe',
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    useBom: true,
    headers: ['Name', 'Age',  'description']
  };

    new ngxCsv(this.data,"new",options);
}
}



