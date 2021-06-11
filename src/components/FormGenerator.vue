<template>
  <v-container app>
    <v-row>
      <v-col class="col-10">
          {{table}}
        <v-text-field label="Nome da tabela" v-model="table"></v-text-field>
        <v-btn color="success" @click="getUserFields()"> Obert Código </v-btn>
      </v-col>
      
     <v-col>
        <code class="d-flex">
        <pre>
        {{ openForm }}
        {{ pageTitle }}
        <span v-for="(col, key) in cols" :key="key">
          {{ col }}
        </span>

        {{buttons}}

        {{ closeForm }}

         {{openScript}}
            export default {
                data: () => ({
                valid: false,
                    <span v-for="(field, key) in fields" :key="'span'+key" >
                         {{field}}: '',
                         {{field}}Rules: [
                    v => !!v || '{{field}} is required',
                    v => /.+@.+/.test(v) || '{{field}} must be valid',
                    ],
                    </span>
                    }),

                    methods:{

                        submit(){alert('submit acionado ')},

                        reset(){alert('reset acionado ')},
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
export default {
  data: function () {
    return {
      openForm: `<template>\n<v-form\nv-model="valid">\n<v-container>\n<v-row>`,
      pageTitle:`<v-col class='col-10'>\n<h1> Insert Item </h1>\n</v-col>`,
      closeForm: `</v-row>\n</v-container>\n</v-form>\n</template>`,
      buttons: ` <v-col class='col-10'> <v-btn\ncolor="success"\nclass="mr-4"\n@click="submit()" > Salvar
    </v-btn>\n<v-btn\ncolor="error"\nclass="mr-4"\n@click="reset()">
      Reset Form
    </v-btn> </v-col>`,
      openScript: "<script>",
      closeScript: `${a}/script>`,
      cols: [],
      script: [],
      fields: [],
      table:''
    };
  },

  methods: {
    async getUserFields() {
      const { data } = await axios.get(`${apiUrl}/get-form/${this.table}`);

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          console.log(data[key]);
          if (
            data[key].type == "varchar" ||
            data[key].type == "int" ||
            data[key].type == "date" ||
             data[key].type == "decimal" ||
            data[key].type == "text"
          ) {
            this.fields.push(key);
            this.cols.push(
              `\n <v-col class="col-6 col-sm-4" >\n <v-${data[key].type=='int'? 'select':'text-field'}\n v-model="${key}"\n :rules="${key}Rules"\n :counter="${key}"\n label="${key}"\n required\n></v-${data[key].type=='int'? 'select':'text-field'}>\n</v-col>`
            );
          }
        }
      }
    },
  },

  mounted: function () {
  },
};
</script>

<style>
</style>