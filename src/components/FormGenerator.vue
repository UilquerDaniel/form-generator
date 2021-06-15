<template>
  <v-container app>
    <v-row>
      <v-col class="col-10">
        <v-text-field label="Nome da tabela" v-model="table"></v-text-field>
        <v-btn color="success" @click="getFormFields()">
          Gerar Formulário
        </v-btn>
        <v-btn icon @click="formVisible = true" class="float-right">
          <v-icon> mdi-view-compact</v-icon>
        </v-btn>

        <v-btn icon @click="formVisible = false" class="float-right">
          <v-icon> mdi-code-tags</v-icon>
        </v-btn>
      </v-col>

      <v-col class="col-8"><PreviewForm v-if="formVisible" /> </v-col>
      <v-col class="col-3">
        <v-container>
          <v-row>
            <v-card v-if="formVisible">
              Opções
              <v-divider></v-divider>
              <ul class="list-group" type='none'>
                <li class="item-action">Cras justo odio</li>
                <li class="item-action" >Dapibus ac facilisis in</li>
                <li class="item-action" >Morbi leo risus</li>
                <li class="item-action" >Porta ac consectetur ac</li>
                <li class="item-action" >Vestibulum at eros</li>
              </ul>
            </v-card>
          </v-row>
        </v-container>
      </v-col>

      <v-col class="col-8">
        <code class="d-flex" v-show="!formVisible">
          <pre id="code" v-show="!formVisible">
 {{openTemplate}}   
  {{openContainer}}  
   {{openRow}}  
    {{openCard}}  
    
     {{openForm}}  
      {{openContainer}}  
       {{openRow}}  
        <span v-for="(field, index) in data" :key="`col-${index}`" style="margin-top:-80px;margin-bottom:-40px">
        <span style="margin:0px;" v-if=" field.type == 'int' || field.type == 'varchar' || field.type == 'decimal' || field.type == 'text'  ">
         {{openCol}} 
          {{ field.type == 'int' ? openSelect: openTextInput}}  
             v-model="{{index}}"
             :rules="{{index}}Rules" 
             :counter="20" 
             label="{{index}}" 
             required 
            <span v-if="field.type == 'int'">
            :hint="`${ {{index}} }, ${ {{index}} }`"
            item-text="{{index}}"
            item-value="{{index}}"
            :items="{{index}}"
            persistent-hint
            return-object
            single-line
           </span>
        
        {{ field.type == 'int' ? closeSelect: closeTextInput}}
       {{closeCol}}
     </span>
             </span>
      {{closeRow}} 
     {{closeContainer}} 
    {{closeForm}} 
   {{closeCard}} 
  {{closeRow}} 
 {{closeContainer}} 
{{closeTemplate}}  
{{openScript}}
export default {
 data: function () { 
   return {
    valid:false,
    <span v-for="(field, index) in data" :key="'span'+index" >
    {{index}}:'',
    {{index}}Rules:[
      v => !!v  || '{{index}} is required' ,
      v=> /.+@.+/ .test(v) ||'{{index}} must be valid' 
     ],
    </span>
    }
    },
 methods:{
   submit (){ alert( 'submit acionado ')},
   reset (){ alert( 'reset acionado')},
   } 
   } 
 {{closeScript}}
   </pre>
        </code>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const a = "<";
import axios from "axios";
import { apiUrl } from "../../.env";
import PreviewForm from "./PreviewForm.vue";
export default {
  components: {
    PreviewForm,
  },

  data: function () {
    return {
      openTemplate: "<template>",
      closeTemplate: "</template>",
      openContainer: "<v-container>",
      closeContainer: "</v-container>",
      openCard: "<v-card>",
      closeCard: "</v-card>",
      openForm: "<v-form>",
      closeForm: "</v-form>",
      openRow: "<v-row>",
      closeRow: "</v-row>",
      openCol: "<v-col>",
      closeCol: "</v-col>",
      openTextInput: "<v-text-field",
      closeTextInput: "></v-text-field>",
      openSelect: "<v-select",
      closeSelect: "></v-select>",
      openScript: "<script>",
      closeScript: `${a}/script>`,
      cols: [],
      script: [],
      fields: [],
      table: "users",
      colon: ":",
      data: [],
      formVisible: false,
    };
  },

  methods: {
    async getFormFields() {
      const { data } = await axios.get(`${apiUrl}/table/${this.table}`);
      this.data = data;
      setTimeout(() => {
        this.codeReturn();
      }, 1000);
    },

    codeReturn() {
      let code = "";
      document.getElementsByTagName("pre").forEach((element) => {
        //   console.log(element.outerText);
        code += `${element.outerText}`;
      });
      // console.log(code);
      const file = new Blob([code], { type: "text/html" });
      const data = new FormData();
      data.append("file", file, "PreviewForm.vue");
      axios.post(`${apiUrl}/uploads`, data);
      //console.log(file);
    },
  },

  mounted: async function () {
    //const file = new Blob(['um texto aqui dentro'], {type : 'text/html'})
    //  console.log(file '')
  },
};
</script>

<style>
.item-action{
  padding: 5px;
  margin-left: -10px;
  border-bottom: rgb(243, 241, 241) 1px solid;
}

.item-action:hover{
  background-color: #eedcdc;
  
}
</style>