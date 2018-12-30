<template>
     <form @submit.prevent="onSubmitCreateGallery">
        <div class="form-group">
            <label>Title</label>
            <input type="text" 
            class="form-control" 
            placeholder="Title"  
            v-model="gallery.title"
            minlength="2"
            maxlength="255"
            required>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" 
             rows="3"
             placeholder="Description"
             v-model="gallery.description"
             maxlength="1000">
             </textarea> 
        </div>
        <div class="form-group" v-for="(n,index) in counter" :key="index">
            <label>Image</label>
            <input type="url"
            class="form-control" 
            placeholder="Image URL"
            v-model="gallery.images[index].imageUrl"
            pattern="https?://.+(png|jpg|jpeg)"
            required>
            <button @click="addInput"
            type="button" 
            class="btn btn-primary">
                Add another image
            </button>
            <button @click="deleteInput(index)"
                type="button" 
                class="btn btn-primary">
                 Delete image
            </button>    
           
        </div>
        <button type="submit" 
        class="btn btn-primary">
        Create new gallery
        </button>
        <button @click="cancel" type="button" 
        class="btn btn-primary">
        Cancel
        </button>
    </form>
</template>

<script>

import galleriesService from '../services/galleries-service.js'

export default {
    data() {
        return {
            gallery: {
                title: '',
                description: '',
                images: [{ imageUrl: '' }]
            },
            counter: 1
            //broji slike
            
        }
    },

    methods: {
        onSubmitCreateGallery() {
            console.log(this.gallery)
            galleriesService.create(this.gallery)
            .then(response => {
                // console.log(response)
                this.$router.push({name: 'all-galleries'})
                this.gallery = {}
            }).catch(error => {
            this.errors = error.response.data.errors
            })
        },
        
        addInput() {
            this.counter++
            this.gallery.images.push({imageUrl: ''})
            
        },
        
        deleteInput(index) {
            console.log(this.index)
            if(this.counter > 1) {
                this.counter--
                this.gallery.images.splice(index,1)
            }         
        },

        cancel() {
           this.$router.push({name: 'all-galleries'}) 
        }
    }    
}
</script>

