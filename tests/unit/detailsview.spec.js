import {shallowMount} from '@vue/test-utils';
import DetailsView from '@/views/DetailsView.vue'

describe('Details.vue', () => {
    it('renders inner text', () => {
        const wrapper = shallowMount(DetailsView);
        expect(wrapper.text()).toContain('This is the details Page');
    });
});