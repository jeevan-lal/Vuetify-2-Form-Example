<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center">
      <div class="align-center mb-5" style="display: inline-flex;">
        <div class="ma-4">
          <v-img width="100" :aspect-ratio="1" :src="require('../assets/logo.svg')"></v-img>
        </div>
        <div class="text-h4 text-blue-accent-1">+</div>
        <div class="ma-4">
          <v-img width="100" :aspect-ratio="1" :src="require('../assets/512x512.png')"></v-img>
        </div>
      </div>
      <h1 class="text-h3 font-weight-bold">Vuetify 2 - Testing</h1>
      <div class="text-subtitle-2 font-weight-light mt-3">Testing Form Page For <a href="https://efiller.netlify.app/" target="_blank">Excel Data Filler - V4</a></div>
      <div class="py-6" />
      
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Example</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <router-link to="/example/1">Example - 1</router-link>
                </td>
                <td>Basic Form Components</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: 'Testing Vuetify 2 | Excel Data Filler 4',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data: () => ({
    //
  }),
};
</script>