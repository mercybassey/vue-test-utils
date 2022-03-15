import {shallowMount, mount} from '@vue/test-utils';
import GithubUsers from '@/components/GithubUsers.vue'
import GithubUser from '@/components/GithubUser.vue'
import HomeView from '@/views/HomeView.vue'




describe('HomeView.vue', () => {
    it('renders list of users',  () => {
        const users = [{},{},{}];
        const searchQuery = '';
        const userInfo = '';
        const loading = false;
       

        const wrapper = shallowMount(HomeView, {
            setup() {
                return{
                    users,
                    searchQuery,
                    userInfo,
                    loading
                };
            },
        });
        const listsOfUsers =  wrapper.findAllComponents(GithubUsers);
        expect((listsOfUsers).length).toEqual(users.length)
    })

    it('search for user',  async () => {
        const userInfo = ''
        const searchQuery = 'octocat';
        const users = '';
        const loading = '';
    

        const wrapper = shallowMount(HomeView, {
            setup(){
                return{userInfo, searchQuery,users,loading}
            }
        })

        await wrapper.get('.search-input').setValue('octocat');
        await wrapper.get('.search-button').trigger('submit');

        const searchResult = wrapper.findAllComponents(GithubUser);
        expect((searchResult).length).toEqual(userInfo.length)
    })
})