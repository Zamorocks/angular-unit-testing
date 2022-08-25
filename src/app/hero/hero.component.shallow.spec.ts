import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>; //wrapper for component that has some testing properties that component doesn't have

  beforeEach(() => {
    //Testbed allows to test component and template together
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA] //no_errors_schema tells Angular to not try to validate schema, template for components
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name anchor tag', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
    fixture.detectChanges();


    // wrapper that has different set of functionality, accesses root element of template
    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('SuperDude');

    // the following line does the same thing but uses nativeElement instead of debugElement.  debug is preferred.
    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');

  })
})
