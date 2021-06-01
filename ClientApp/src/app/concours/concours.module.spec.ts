import { ConcoursModule } from './concours.module';

describe('ConcoursModule', () => {
  let concoursModule: ConcoursModule;

  beforeEach(() => {
    concoursModule = new ConcoursModule();
  });

  it('should create an instance', () => {
    expect(concoursModule).toBeTruthy();
  });
});
