import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public isSearchbarOpened = false;
  jsonData:any=[];
  jsonDataDos:any[];

  constructor( private menuCtrl: MenuController ) {
    this.initializaJSONData();
  }

  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })

     

     
    }
  }
  selectVal(val){
    alert("you select="+val);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  
  initializaJSONData(){
    this.jsonData = [
      {
        "name": "Roto Fest 2020",
        "code": "RO"
      },
      {
        "name": "Cuenca Music Fest",
        "code": "CU"
        
      },
      {
        "name": "La abduccion",
        "code": "LA"
      },
      {
        "name": "Pika Fest",
        "code": "PI"
      }
    ]
  }


  FilterJSONDataDos(ev:any)
  {
    this.initializaJSONDataDos();
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })

     

     
    }
  }

  initializaJSONDataDos(){
    this.jsonDataDos = [
      {
        "name": "Rot2020",
        "code": "RO"
      },
      {
        "name": "Cuenca ",
        "code": "CU"
        
      },
      {
        "name": "La abon",
        "code": "LA"
      },
      {
        "name": "Pikacxcd Fest",
        "code": "PI"
      }
    ]
  }





}
