 <template>
 <div>
    <center><h1>Students table</h1></center>
  <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <my-header></my-header>
    <my-footer></my-footer>
    <my-table></my-table>
    <router-view></router-view>
    
 </div>
</template>
 
<script>
import header from './components/header.vue'
import footer from './components/footer.vue'

  export default {
     components:{
         'my-header':header,
         'my-footer':footer
         
        

     }
  }
 
</script>
 
<style>
  *{
      box-sizing:border-box;
      margin:-20;
         height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        
  }
</style>