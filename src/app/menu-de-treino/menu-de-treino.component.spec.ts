import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeTreinoComponent } from './menu-de-treino.component';

describe('MenuDeTreinoComponent', () => {
  let component: MenuDeTreinoComponent;
  let fixture: ComponentFixture<MenuDeTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeTreinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
