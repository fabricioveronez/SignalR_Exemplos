import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPageComponent } from './chat-page.component';
import { Mensagem } from 'src/app/models/mensagem';

describe('ChatPageComponent', () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
