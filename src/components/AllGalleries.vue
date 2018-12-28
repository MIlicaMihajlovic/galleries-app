<template>
    <div>   
        <div v-if="galleries.length">
            <ul>
                
            <li v-for="gallery in galleries" :key="gallery.id" >
                <div>
                    <router-link class="navbar-brand" :to="{name: 'single-gallery', params: {id:gallery.id}}">  
                {{ gallery.title }}
                </router-link>
                </div>
                <div>
                    <img v-if="gallery.images[0]" :src="gallery.images[0].imageUrl" />
                {{ gallery.description }}
                </div>
                <div>
                    <!-- <router-link class="navbar-brand" :to="{name: 'author', params: {id:user.id}}">   -->
                    {{ gallery.user.first_name }}
                    {{ gallery.user.last_name }}
                <!-- </router-link>   -->
                </div>
                <div>
                     {{ gallery.created_at }}
                </div>
                
               
            </li> 
                         
            
        </ul> 
            <button type="button" class="btn btn-dark" @click="loadMore">Load more</button>
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
            next_page_url: '',
            term: ''
        }
    },

    created() {
       galleriesService.getGalleries()
       .then(response => {
           this.galleries = response.data
           this.next_page_url = response.next_page_url
       })
    },

    methods: {
        loadMore() {
            this.page++
            galleriesService.getGalleries(this.page)
            .then(response => {
            this.galleries = this.galleries.concat(response.data)  //u nizu galleries dodaje sledecu stranicu stranicu
            this.next_page_url = response.next_page_url
       })    
        },

        search(term) {
            
        }

    }

    
}
</script>

