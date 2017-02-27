<template>
	<p>
        {{msg}}
    </p>
</template>

<script>


  export default {
	data() {
        return {
			msg: 'this is home page'
    	}
	},
	methods: {
        
	},
    ready: function(){
        console.log('component is ready');
    }
}
</script>

<style>
 
</style>