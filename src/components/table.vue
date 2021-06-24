<template>
    <div>
      <table class="table table-bordered table-striped table-hover">
     
      
        
          <thead>
            <th>
                 <div class="table-th">
                    <span class="lable">Student ID</span>
                 </div>
            </th>
 
            <th>
                 <div class="table-th">
                    <span class="lable">Email</span>
                 </div>
            </th>
 
            <th>
                 <div class="table-th">
                    <span class="lable">Student name</span>
                 </div>
            </th>
 
            
          </thead>
 
          <tbody>
            <tr v-for="user in users" :key="user.name">
              <td>
                <span>
                  <span class="table-lable">{{ user.name }}</span>
                </span>
              </td>
 
              <td>
                <span>
                  <span class="table-lable">{{ user.id }}</span>
                </span>
              </td>
 
              
            </tr>
          </tbody>
        
 
 
</table>
 
    </div>
</template>

<script>
const axios = require('axios');
    export default {
      name: "tables",
      data(){
        return{
          users:[


         
          ]
 
          
        };
      },
        mounted () {
    axios
      .get('http://localhost:3003/employees')
      .then(response => (this.users = response.data))
  }
        
    };
    
</script>