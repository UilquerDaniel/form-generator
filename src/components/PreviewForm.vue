 <template>   
  <v-container>  
   <v-row>  
    <v-card>  
     <v-form>  
      <v-container>  
       <v-row>  
        
        
         <v-col> 
          <v-select  
             v-model="id"
             :rules="idRules" 
             :counter="20" 
             label="id" 
             required 
            
            :hint="`${ id }, ${ id }`"
            item-text="id"
            item-value="id"
            :items="id"
            persistent-hint
            return-object
            single-line
           
        
        ></v-select>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="name"
             :rules="nameRules" 
             :counter="20" 
             label="name" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="description"
             :rules="descriptionRules" 
             :counter="20" 
             label="description" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="width"
             :rules="widthRules" 
             :counter="20" 
             label="width" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="height"
             :rules="heightRules" 
             :counter="20" 
             label="height" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="weigth"
             :rules="weigthRules" 
             :counter="20" 
             label="weigth" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="color"
             :rules="colorRules" 
             :counter="20" 
             label="color" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="price"
             :rules="priceRules" 
             :counter="20" 
             label="price" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="stock"
             :rules="stockRules" 
             :counter="20" 
             label="stock" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="quantity_sales"
             :rules="quantity_salesRules" 
             :counter="20" 
             label="quantity_sales" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="images"
             :rules="imagesRules" 
             :counter="20" 
             label="images" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-text-field  
             v-model="available"
             :rules="availableRules" 
             :counter="20" 
             label="available" 
             required 
            
        
        ></v-text-field>
       </v-col>
     
             
        
         <v-col> 
          <v-select  
             v-model="provider"
             :rules="providerRules" 
             :counter="20" 
             label="provider" 
             required 
            
            :hint="`${ provider }, ${ provider }`"
            item-text="provider"
            item-value="provider"
            :items="provider"
            persistent-hint
            return-object
            single-line
           
        
        ></v-select>
       </v-col>
     
             
        
         <v-col> 
          <v-select  
             v-model="category"
             :rules="categoryRules" 
             :counter="20" 
             label="category" 
             required 
            
            :hint="`${ category }, ${ category }`"
            item-text="category"
            item-value="category"
            :items="category"
            persistent-hint
            return-object
            single-line
           
        
        ></v-select>
       </v-col>
     
             
        
             
        
             
      </v-row> 
     </v-container> 
    </v-form> 
   </v-card> 
  </v-row> 
 </v-container> 
</template>  
<script>
export default {
 data: function () { 
   return {
    valid:false,
    
    id:'',
    idRules:[
      v => !!v  || 'id is required' ,
      v=> /.+@.+/ .test(v) ||'id must be valid' 
     ],
    
    name:'',
    nameRules:[
      v => !!v  || 'name is required' ,
      v=> /.+@.+/ .test(v) ||'name must be valid' 
     ],
    
    description:'',
    descriptionRules:[
      v => !!v  || 'description is required' ,
      v=> /.+@.+/ .test(v) ||'description must be valid' 
     ],
    
    width:'',
    widthRules:[
      v => !!v  || 'width is required' ,
      v=> /.+@.+/ .test(v) ||'width must be valid' 
     ],
    
    height:'',
    heightRules:[
      v => !!v  || 'height is required' ,
      v=> /.+@.+/ .test(v) ||'height must be valid' 
     ],
    
    weigth:'',
    weigthRules:[
      v => !!v  || 'weigth is required' ,
      v=> /.+@.+/ .test(v) ||'weigth must be valid' 
     ],
    
    color:'',
    colorRules:[
      v => !!v  || 'color is required' ,
      v=> /.+@.+/ .test(v) ||'color must be valid' 
     ],
    
    price:'',
    priceRules:[
      v => !!v  || 'price is required' ,
      v=> /.+@.+/ .test(v) ||'price must be valid' 
     ],
    
    stock:'',
    stockRules:[
      v => !!v  || 'stock is required' ,
      v=> /.+@.+/ .test(v) ||'stock must be valid' 
     ],
    
    quantity_sales:'',
    quantity_salesRules:[
      v => !!v  || 'quantity_sales is required' ,
      v=> /.+@.+/ .test(v) ||'quantity_sales must be valid' 
     ],
    
    images:'',
    imagesRules:[
      v => !!v  || 'images is required' ,
      v=> /.+@.+/ .test(v) ||'images must be valid' 
     ],
    
    available:'',
    availableRules:[
      v => !!v  || 'available is required' ,
      v=> /.+@.+/ .test(v) ||'available must be valid' 
     ],
    
    provider:'',
    providerRules:[
      v => !!v  || 'provider is required' ,
      v=> /.+@.+/ .test(v) ||'provider must be valid' 
     ],
    
    category:'',
    categoryRules:[
      v => !!v  || 'category is required' ,
      v=> /.+@.+/ .test(v) ||'category must be valid' 
     ],
    
    created_at:'',
    created_atRules:[
      v => !!v  || 'created_at is required' ,
      v=> /.+@.+/ .test(v) ||'created_at must be valid' 
     ],
    
    updated_at:'',
    updated_atRules:[
      v => !!v  || 'updated_at is required' ,
      v=> /.+@.+/ .test(v) ||'updated_at must be valid' 
     ],
    
    }
    },
 methods:{
   submit (){ alert( 'submit acionado ')},
   reset (){ alert( 'reset acionado')},
   } 
   } 
 </script>
   