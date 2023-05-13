<template>
    <nav class="navbar">
        <div class="container-fluid">
            <h1 class="title" @click.prevent="this.$router.push('/')">GARUDAKU NEWS</h1>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.20);
    height: 60px;
}

.title {
    color: #bb2913;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 30px;
}
</style>