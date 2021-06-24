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
            <tr v-for="user in users" :key="user.sname">
              <td>
                <span>
                  <span class="table-lable">{{ user.sname }}</span>
                </span>
              </td>
 
              <td>
                <span>
                  <span class="table-lable">{{ user.sid }}</span>
                </span>
              </td>
 
              <td>
                <span>
                  <span class="table-lable">{{ user.tgrade }}</span>
                </span>
              </td>
            </tr>
          </tbody>
        
 
 
</table>
 
    </div>
</template>

<script>
    export default {
      name: "tables",
      data(){
        return{
          users:[
          { sname: 1,sid:"hana@hotmail.com",tgrade: "Hana"},
          {sname: 2., sid: "dana@hotmail.com", tgrade:"Dana"},
          {sname: 3, sid: "najla@hotmail.com", tgrade:"Najla"},
          {sname: 4, sid: "noura@hotmail.com", tgrade:"Noura"}
          ]
 
          
        };
      }
        
    };
    
</script>