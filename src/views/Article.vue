<script>
import { useAppStore } from "../store";
import { mapState, mapActions, mapGetters } from 'pinia'

export default {
    computed: {
        ...mapState(useAppStore, ['selectedArticle'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchOneArticle']),
        ...mapState(useAppStore, ['selectedArticle'])
    },
    created() {
        this.fetchOneArticle(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container">
        <button @click.prevent="this.$router.push('/')">Back</button>
        <H1 class="title">{{ selectedArticle.detail_post.title }}</H1>
        <p class="publish-date">{{ selectedArticle.detail_post.pusblised_at }}</p>
        <div class="image-banner">
            <img :src="selectedArticle.detail_post.image" :alt="selectedArticle.detail_post.image_desc">
        </div>
        <p class="article">{{ selectedArticle.detail_post.post_content }}</p>
    </div>
</template>

<style>
.container {
    padding: 40px;
}

.title {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.publish-date {
    text-align: end;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.image-banner {
    border-radius: 20px;
    display: flex;
    justify-content: center;
}

img {
    width: 40%;
    height: 30%;
    object-fit: cover;
    object-position: 50% 10%;
}

.article {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: justify;
}
</style>