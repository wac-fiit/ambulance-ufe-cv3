import { newSpecPage } from '@stencil/core/testing';
import { MsevcikAmbulanceWlList } from '../msevcik-ambulance-wl-list';

describe('msevcik-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsevcikAmbulanceWlList],
      html: `<msevcik-ambulance-wl-list></msevcik-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <msevcik-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </msevcik-ambulance-wl-list>
    `);
  });
});
