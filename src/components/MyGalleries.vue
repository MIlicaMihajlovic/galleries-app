<template>
    <div>
        <div v-if="galleries.length">
            <ul>
                <li v-for="gallery in galleries" :key="gallery.id">
                    {{ gallery.title }}
                    <img v-if="gallery.images[0]" :src="gallery.images[0].imageUrl" />
                    {{ gallery.description }}
                     {{ gallery.created_at }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Nema galerija</p>
        </div>
    </div>
</template>

<script>

import galleriesService from './../services/galleries-service.js'

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            galleries: []
            //page = 1
        }
    },

    beforeRouteEnter(to,from,next) {
        
        galleriesService.getMyGalleries(this.user.id)
            .then(response => {
                
                vm.galleries = response
            })
    },

    computed: {
        ...mapGetters({
        user: 'getUser'
        })
    },
}
</script>
