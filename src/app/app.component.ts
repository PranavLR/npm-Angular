import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from 'pranav-logicrays-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'npm-Angular';

  userService = inject(UsersService)

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res)=>console.log(res))
  }
  
}
