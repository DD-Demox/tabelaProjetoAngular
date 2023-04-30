import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadicionaralunoComponent } from './formadicionaraluno.component';

describe('FormadicionaralunoComponent', () => {
  let component: FormadicionaralunoComponent;
  let fixture: ComponentFixture<FormadicionaralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadicionaralunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormadicionaralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
