import { WorkshopsModule } from './workshops.module';

describe('WorkshopsModule', () => {
  let workshopsModule: WorkshopsModule;

  beforeEach(() => {
    workshopsModule = new WorkshopsModule();
  });

  it('should create an instance', () => {
    expect(workshopsModule).toBeTruthy();
  });
});
