<script lang="ts" setup>
import { ref } from "vue";
import type { BitlyResponse } from "@/interfaces/BitlyResponse";

const longUrl = ref<string>("");
const mensagem = ref<string>("Desativado!");
const classeMensagem = ref<string>("desativado");

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const bitlyApiUrl = "https://api-ssl.bitly.com/v4/shorten";

function inputVazio(): boolean {
    if (longUrl.value.trim() === "") {
        mensagem.value = "Enter an URL!";
        classeMensagem.value = "erro";
        setTimeout(() => (classeMensagem.value = "desativado"), 2000);
        return true;
    }
    return false;
}

async function encurtarURL(): Promise<void> {
    if (inputVazio()) return;

    const data = { long_url: longUrl.value };
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const response = await fetch(bitlyApiUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });

        const result: BitlyResponse = await response.json();

        if (result.errors) throw new Error("Invalid URL");

        longUrl.value = result.id;

    } catch (error) {
        mensagem.value = "Invalid URL!";
        classeMensagem.value = "erro";
        setTimeout(() => (classeMensagem.value = "desativado"), 2000);
    }
}

function copiar(): void {
    if (inputVazio()) return;

    navigator.clipboard.writeText(longUrl.value);
    mensagem.value = "URL copied!";
    classeMensagem.value = "confirmacao";
    setTimeout(() => (classeMensagem.value = "desativado"), 2000);
}
</script>

<template>
    <main>
        <h1 id="titulo">URL Shortener</h1>
        <input v-model="longUrl" type="text" placeholder="URL here..." id="input" />
        <div id="botoes">
            <button id="btnEncurtar" class="btn" @click="encurtarURL">Shorten</button>
            <button id="btnCopiar" class="btn" @click="copiar">Copy</button>
        </div>
        <p :class="classeMensagem">{{ mensagem }}</p>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 50vh auto 0 auto;
    padding: 40px 40px 0 40px;
    transform: translateY(-50%);
    align-items: center;
    justify-content: center;
    border: 3px solid var(--cor3);
    border-radius: 15px;
    box-shadow: 0 0 20px var(--cor3);

    #titulo {
        color: var(--cor4);
        font-size: 35pt;
        font-weight: bold;
    }
    
    #input {
        width: 90%;
        padding: 8px;
        margin: 15px;
        color: var(--cor5);
        font-size: 12pt;
        background: none;
        outline: 0;
        border: 2px solid var(--cor8);
        border-radius: 15px;
        transition: .5s;
    }
    #input:focus {
        border: 2px solid transparent;
        border-right: 2px solid var(--cor3);
        border-left: 2px solid var(--cor3);
        border-radius: 0px;
    }
    
    #botoes {
        display: flex;
        width: 90%;
        justify-content: space-around;
        margin-top: 5px;

        .btn {
            width: 100px;
            cursor: pointer;
            padding: 10px 0;
            color: var(--cor5);
            font-size: 12pt;
            font-weight: bold;
            background-color: var(--cor2);
            border: none;
            border-radius: 15px;
            transition: .5s;
        }
        .btn:hover {
            background-color: var(--cor3);
        }
    }
    
    .desativado {
        font-size: 12pt;
        color: transparent;
        font-weight: bold;
        margin: 15px 0;
    }
    
    .erro {
        font-size: 12pt;
        color: red;
        font-weight: bold;
        margin: 15px 0;
    }
    
    .confirmacao {
        font-size: 12pt;
        color: var(--cor5);
        font-weight: bold;
        margin: 15px 0;
    }
}

@media (max-width: 600px) {
    main {
        width: 70vw;

        #titulo {
            font-size: 25pt;
        }
    }
}
</style>