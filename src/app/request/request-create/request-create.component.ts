import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router} from '@angular/router'
import { User } from 'src/app/user/user.class';
import { UserService} from 'src/app/user/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request : Request = new Request();
  users : User [] = [];
  save(): void{
    this.requestsrv.create(this.request).subscribe(
      res=>{
        console.debug("Request created:",res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("ERROR creating request:",err);
      }
    )
  }

  constructor(
    private requestsrv: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usersrv: UserService
  ) { }
  
  ngOnInit(): void {
    this.usersrv.list().subscribe(
      res => { console.debug(res)
      this.users = res as User[]
    }
    )}
}
