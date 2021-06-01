import { PresenceModule } from './presence.module';

describe('PresenceModule', () => {
  let presenceModule: PresenceModule;

  beforeEach(() => {
    presenceModule = new PresenceModule();
  });

  it('should create an instance', () => {
    expect(presenceModule).toBeTruthy();
  });
});
