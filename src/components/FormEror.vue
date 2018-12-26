<template>
    <div class="alert alert-danger" v-if="errors && errors.length">
        <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>
