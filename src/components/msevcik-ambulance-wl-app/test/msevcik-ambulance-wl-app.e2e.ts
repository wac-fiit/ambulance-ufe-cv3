import { newE2EPage } from '@stencil/core/testing';

describe('msevcik-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<msevcik-ambulance-wl-app></msevcik-ambulance-wl-app>');

    const element = await page.find('msevcik-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
