<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     
      <v-spacer></v-spacer>
     
     
    </v-app-bar>

    <v-main>
      <FormGenerator/>
    </v-main>
  </v-app>
</template>

<script>
import FormGenerator from './components/FormGenerator';

export default {
  name: 'App',

  components: {
    FormGenerator,
    
  },

  data: () => ({
    //
  }),
};
</script>
