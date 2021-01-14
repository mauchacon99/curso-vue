<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs">
        <router-link tag="li" active-class="active" exact :to="{name:'tasks'}"> <a> Tareas </a> </router-link>
        <router-link tag="li" active-class="active" :to="{name:'dashboard'}"> <a>Dashboard </a></router-link>
    </ul>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <footer class="footer">
        <p>&copy; Curso Vue App </p>
    </footer>
 </div>
</template>

<script>


</script>
<style>
    .container{
        padding: 20px;
        max-width:920;
    }
     
</style>


