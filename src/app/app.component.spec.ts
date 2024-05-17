import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    const APP = FIXTURE.componentInstance;
    expect(APP).toBeTruthy();
  });

  it(`should have the 'dashboard' title`, () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    const APP = FIXTURE.componentInstance;
    expect(APP.title).toEqual('dashboard');
  });

  it('should render title', () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    FIXTURE.detectChanges();
    const COMPILED = FIXTURE.nativeElement as HTMLElement;
    expect(COMPILED.querySelector('h1')?.textContent).toContain(
      'Hello, dashboard'
    );
  });
});
