<template>
	<div>
        <p>
            {{msg}}
        </p>
        <p>SID:{{sid}}, USER: </p>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
    		msg: 'this is home page'
    	}
    },
    computed: {
        ...mapGetters({
            sid: 'sid',
            user: 'user'
        })
    },
    methods: {
        
    },
    created: function(){
        console.log('-->sid:', this.sid, sessionStorage.getItem('sid'));
    }
}
</script>

<style>
 
</style>