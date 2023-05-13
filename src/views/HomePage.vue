<script>
import { useAppStore } from "../store";
import { mapState, mapActions } from "pinia";
import NewsCard from "../components/NewsCard.vue";

export default {
    components: {
        NewsCard
    },
    computed: {
        ...mapState(useAppStore, ['newsList']),
    },
    methods: {
        ...mapActions(useAppStore, ['fetchNews']),
    },
    created() {
        this.fetchNews()
    },
};
</script>

<template>
    <div class="container">
        <div class="cardWrapper">
            <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 80px;
    margin-bottom: 80px;
}

.cardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
</style>