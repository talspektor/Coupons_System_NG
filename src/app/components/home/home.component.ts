import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // the router object
  private router: Router;
  public companies!: Company[];

  constructor(router: Router, private title: Title) {
    this.router = router;
  }

  ngOnInit(): void {
    this.title.setTitle('Home');
  }

  public nav() {
    this.router.navigate(['about']);
  }
}
