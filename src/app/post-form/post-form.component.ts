import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  submitForm = output<Post>();

  private readonly _formBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      title: [''],
      body: [''],
    });
  }
}
