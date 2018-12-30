<template>
    <div>
        <ul>
            
            <li>{{ gallery.title }}</li>
            <li>{{ gallery.description }}</li> 
            <div v-if="gallery.user">
                {{ gallery.user.first_name }}
                {{ gallery.user.last_name }}
            </div>
            <div v-for="image in gallery.images" :key="image.id">
                 <img  :src="image.imageUrl" />
            </div>
            <li>{{ gallery.description }}</li>
            <li>{{ gallery.created_at }}</li>
            <li v-for="comment in gallery.comments" :key="comment.id"
            v-if="comments.length">
               <p>Name:</p> 
                {{comment.user.first_name}}
                {{comment.user.last_name}}
                 <p>Comment:</p> 
                {{comment.body}}
            </li>
                
         </ul>        
    </div>
</template>

<script>

import galleriesService from './../services/galleries-service.js'


export default {
    data() {
        return {
            gallery: {},
            comments: []
            
        }
    },
    

    beforeRouteEnter(to,from,next) {
       
        galleriesService.getGallery(to.params.id)
        .then(response => {
           // console.log(response.data)
            next(vm => {
                vm.gallery = response
                vm.comments=response.comments
            })
        })
    }
}
</script>

