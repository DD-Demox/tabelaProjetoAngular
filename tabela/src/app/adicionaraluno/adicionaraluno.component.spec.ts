import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaralunoComponent } from './adicionaraluno.component';

describe('AdicionaralunoComponent', () => {
  let component: AdicionaralunoComponent;
  let fixture: ComponentFixture<AdicionaralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaralunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionaralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
