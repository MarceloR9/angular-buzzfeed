import { Component, OnInit } from '@angular/core';
import { QuizComponent } from "../../components/quiz/quiz.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [QuizComponent]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
