<template>
    <div>      
        <ul>         
            <li v-for="gallery in galleries" :key="gallery.id" >
                {{ gallery.title }}
                {{ gallery.description }}
                {{ gallery.user_id }}
                {{ gallery.created_at }}
            </li>
        </ul>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    created() {
        this.getGalleries();
    },

    methods: {
        ...mapActions(['getGalleries'])
    },
    
    computed: {
        ...mapGetters({
          galleries: 'getData',
          skip: 'getSkip',
          take: 'getTake'
        //   total: 'getTotal',
        //   per_page: 'getPerPage',
        //   current_page: 'getCurrentPage'
        })
    }
}
</script>

