import { inject, TestBed } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {
  let mockMessagingService = jasmine.createSpyObj(['add']);
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessagingService}
      ],
    })

    // acts as dependency injection registry
    // get a handle to an injectd service by doing the following:
    // let msgService = TestBed.inject(MessageService);

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
  })

  describe('getHero', () => {
    // instead of lines 24-25, we use injection syntax
    it('should call get with the correct URL', () => {
      // call getHero()
      service.getHero(4).subscribe();

      // test that the URL was correct
      const req = httpTestingController.expectOne('api/heroes/4');

      // flush lets us decide what data gets sent back when GET is called
      req.flush({id: 4, name: 'SuperDude', strength: 100});
      httpTestingController.verify();
    })
  })
})
