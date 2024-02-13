import { newSpecPage } from '@stencil/core/testing';
import { MsevcikAmbulanceWlList } from '../msevcik-ambulance-wl-list';

describe('msevcik-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsevcikAmbulanceWlList],
      html: `<msevcik-ambulance-wl-list></msevcik-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as MsevcikAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
