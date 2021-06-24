<template>

  <nav class="h">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
   <li class="w-nav__item" >
         <router-link
          to="/Home"
          class="nav-item nav-link">
          Home
        </router-link>
      </li>

      <li class="w-nav__item" >
         <router-link
          to="/ViewT"
          class="nav-item nav-link">
          View
        </router-link>
      </li>
</nav>
 
</template>
 
<script>
   export default{
 
   }
</script>
 
<style>
.h{

     display: block;
 
  background-color: lightgrey;
   display: block;
 
   text-align: center;
  padding: 14px 16px;
  text-decoration: none;
word-spacing: 90px;
   margin-right: 20px;
}
 
</style>