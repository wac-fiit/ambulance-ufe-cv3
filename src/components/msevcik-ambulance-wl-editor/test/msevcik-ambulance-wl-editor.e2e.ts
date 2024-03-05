import { newE2EPage } from '@stencil/core/testing';

describe('msevcik-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<msevcik-ambulance-wl-editor></msevcik-ambulance-wl-editor>');

    const element = await page.find('msevcik-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
