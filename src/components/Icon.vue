<template>
  <span :class="cssClass"  aria-hidden="true"> </span> 
</template>

<script>
export default{
  props:['img'],
  computed:{
    cssClass(){
      return 'glyphicon glyphicon-'+this.img;
    }
  },
}
</script>