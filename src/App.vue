<script setup lang="ts">
import UrlShortener from '@/components/UrlShortener.vue';
import Rodape from '@/components/Rodape.vue';
</script>

<template>
    <UrlShortener />
    <Rodape />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

:root {
    --cor1: rgb(5, 25, 50);
	--cor2: rgb(9, 51, 100);
	--cor3: rgb(42, 122, 228);
	--cor4: white;
	--cor5: #5EC6F3;
	--cor6: rgb(13, 32, 56);
	--cor7: white;
	--cor8: rgb(153, 153, 153);
	--cor9: rgb(255, 0, 0);
}

* {
    margin: 0;
    padding: 0;
    user-select: none;
    font-family: 'Montserrat', sans-serif;
}
body {
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: var(--cor1);
}
</style>