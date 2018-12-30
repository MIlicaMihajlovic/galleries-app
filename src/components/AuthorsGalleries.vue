<template>
    <div>
        <div v-if="galleries.length">
            <ul>
                <li v-for="gallery in galleries" :key="gallery.id">
                    {{ gallery.title }}
                    <img v-if="gallery.images[0]" 
                    :src="gallery.images[0].imageUrl" />
                    {{ gallery.description }}
                    {{ gallery.created_at }}
                </li>
            </ul>
            <button type="button" 
            class="btn btn-dark" 
            @click="loadMore">
            Load more
            </button>
            </div>
        <div v-else>
            <p>Nema galerija</p>
        </div>
    </div>
  
</template>

<script>

import galleriesService from './../services/galleries-service.js'

export default {
    data() {
        return {
            galleries: [],
            page: 1,
            next_page_url: ''
        }
    },

    beforeRouteEnter(to,from,next) {
        galleriesService.getAuthorsGallery(Number(to.params.id))
        .then(response => {
            next(vm => {
                vm.galleries = response.galleries
                vm.next_page_url = response.next_page_url                
            })
        })
    },

    methods: {
        loadMore() {
            this.page++
            galleriesService.getAuthorsGallery(Number(to.params.id), this.page)
            .then(response => {
                this.galleries = this.galleries.concat(response.galleries)  
                this.next_page_url = response.next_page_url
            })    
        }      
    }
}
</script>


    
         