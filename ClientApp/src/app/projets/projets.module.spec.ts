import { ProjetsModule } from './projets.module';

describe('ProjetsModule', () => {
  let projetsModule: ProjetsModule;

  beforeEach(() => {
    projetsModule = new ProjetsModule();
  });

  it('should create an instance', () => {
    expect(projetsModule).toBeTruthy();
  });
});
