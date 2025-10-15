<script lang="ts" setup>
const ano = new Date().getFullYear()
</script>

<template>
    <footer id="rodape">
		<p>&copy; {{ano}} by Guilherme Mattos Conde</p>
		<p>
			<a class="links" href="mailto:guiherme.mattos.conde@gmail.com" target="blank">Gmail</a> |
			<a class="links" href="https://github.com/guilherme-mattos-conde" target="blank">GitHub</a> | 
			<a class="links" href="https://www.linkedin.com/in/guilherme-mattos-conde/" target="blank">Linkedin</a>
		</p>
	</footer>
</template>

<style>
#rodape {
    position: fixed;
    bottom: 0;
    width: 100vw;
	padding: 15px 0;
    text-align: center;
    font-size: 11pt;
    color: var(--cor8);
}
.links {
    color: var(--cor3);
    transition: .5s;
    text-decoration: none;
}
.links:hover {
    color: var(--cor5);
}
</style>