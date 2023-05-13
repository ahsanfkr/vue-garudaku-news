import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = "https://jakpost.vercel.app/api/category/indonesia/jakarta";

export const useAppStore = defineStore('app', {
    state: () => ({
        newsList: [],
        selectedArticle: {}
    }),
    getters: {

    },
    actions: {

        async fetchNews() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${BASE_URL}`
                })

                data.posts.map(((el, i) => {
                    el.id = i + 1
                    return el
                }))
                this.newsList = data.posts

            } catch (error) {
                console.log(error.response.data);
            }
        },

        async fetchOneArticle(url, id) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${url}`
                })
                console.log(data, '>>>')
                this.selectedArticle = data
                this.router.push(`/article/${id}`)

            } catch (error) {
                console.log(error.response.data);
            }
        },
    }
})