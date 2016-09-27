/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlnSidebarService } from './sln-sidebar.service';

describe('Service: SlnSidebar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlnSidebarService]
    });
  });

  it('should ...', inject([SlnSidebarService], (service: SlnSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
