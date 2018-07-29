import { Component, OnInit } from '@angular/core';
import { SerUserService } from '../ser-user.service';
//import { Output} from '@angular/core';
//import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
   profiles: any[];
 //  @Output() sendProf = new EventEmitter();
  constructor(private service: SerUserService) { }

  onClick(profile){

  //this.sendProf.emit(profile);

  }

  ngOnInit() {
    document.body.classList.add('bg-color');
    this.service.getProfiles().subscribe(prof =>this.profiles= prof);
    console.log("aa" + this.profiles)
  }

}
