import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const key = 'id';
    this.route.params.subscribe(p => {
      if (p[key] === 0) {
        this.router.navigate(['not-found']);
      }
    });
  }

  save() {
    this.router.navigate(['users']);
  }
}
