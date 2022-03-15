import {shallowMount, RouterLinkStub} from '@vue/test-utils';
import GithubUser from '@/components/GithubUser.vue'

describe('GithubUser.vue', () => {
    it('renders userInfo.name', () => {
        const userInfo = {
            name : 'test',
        }
       const wrapper = shallowMount(GithubUser, {
            props: {
                userInfo,
            },
            global: {
                stubs: {
                    'router-link': RouterLinkStub,
                }
            },
       }); 
       const githubUser = wrapper.find('.user-name');

       expect(githubUser.text()).toBe(userInfo.name);
    });
});