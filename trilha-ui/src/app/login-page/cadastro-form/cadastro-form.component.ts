import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

}
