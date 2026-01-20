import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    (expect(component) as any).toBeTruthy();
  });



  it('should submit form correctly', () => {



    spyOn(component.submitForm, 'emit');

    const title = fixture.nativeElement.querySelector("input[name='title']");
    title.value = 'Post Title';

    title.dispatchEvent(new Event('input'));

    const body = fixture.nativeElement.querySelector("textarea[name='body']");
    body.value = 'Post Body';
    body.dispatchEvent(new Event('input'));

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));



    (expect(component.submitForm.emit) as any).toHaveBeenCalledWith({
      title: 'Post Title',
      body: 'Post Body',
    });
  });
});
