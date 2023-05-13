<script>
import { useAppStore } from "../store";
import { mapActions } from "pinia";

export default {
    props: ['news'],
    methods: {
        ...mapActions(useAppStore, ['fetchOneArticle']),
    },
}
</script>

<template>
    <div class="news-card" @click.prevent="fetchOneArticle(news.link, news.id)">
        <img :src="`${news.image}`" class="card-image" />
        <div class="card-content">
            <p class="card-title">{{ news.title }}</p>
        </div>
    </div>
</template>

<style scoped>
.news-card {
    width: 400px;
    height: 420px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.20);
}

.card-image {
    height: 300px;
    width: 400px;
}

.card-title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: larger;
    padding-left: 10px;
    padding-right: 10px;
}
</style>