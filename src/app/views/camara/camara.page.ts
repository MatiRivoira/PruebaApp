import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NurService } from 'src/app/services/nur.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  nurSvc = inject(NurService);
  authSvc = inject(AuthService);
  username:string = "user";
  userdata:any;

  ngOnInit() {
    console.log(this.userdata);
    this.userdata = JSON.parse(localStorage.getItem('userdata') || "");
    this.username = this.userdata.user.email.split("@")[0];
  }

}
