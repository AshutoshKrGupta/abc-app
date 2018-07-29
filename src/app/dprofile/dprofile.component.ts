import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';
import { SerUserService } from '../ser-user.service';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {
  profile : any;
  constructor(private route: ActivatedRoute, private service: SerUserService) { }
  getvalue(event){

    console.log(event.value);
  }

  ngOnInit() {
    this.route.paramMap.switchMap(id=>{
      let prId = id.get('id');
      console.log(prId);
      return this.service.getProfileById(prId);
    }).subscribe(prof => this.profile = prof.json().name);
    console.log(this.profile);
  }



}
