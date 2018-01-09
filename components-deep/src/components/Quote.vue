<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <slot name="subtitle">The Subtitle</slot>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }

</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 2px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2{
        color: red;
    }
    .title{
        font-style: italic;
    }
</style>