<template>
  <div class="example-1">
    <v-container>
      <p class="text-h4 font-weight-bold">Example - 1</p>
      <div class="text-subtitle-2 font-weight-light mb-5">Basic Form Components</div>
      <v-row class="text-center">
        <v-col cols="12">
          <!-- INPUT -->
          <v-text-field
            v-model="fd.input"
            label="Input"
            variant="outlined"
            name="full_name"
            required
          ></v-text-field>

          <!-- Autocomplete -->
          <v-autocomplete
            v-model="fd.autocompleteSingle"
            label="Autocomplete"
            name="country_1"
            variant="outlined"
            :items="countryList"
          ></v-autocomplete>

          <!-- Autocomplete multiple -->
          <v-autocomplete
            v-model="fd.autocompleteMulti"
            name="country_multiple"
            :items="countryList"
            variant="outlined"
            dense
            chips
            small-chips
            label="Autocomplete Multiple"
            multiple
          ></v-autocomplete>

          <!-- Select -->
          <v-select
            v-model="fd.select"
            variant="outlined"
            label="Select"
            name="country"
            :items="countryList"
          ></v-select>

          <!-- Textarea -->
          <v-textarea label="Textarea" v-model="fd.textarea"></v-textarea>

          <!-- Radio box -->
          <v-radio-group v-model="fd.radio">
            <v-radio name="gender" label="Male" value="1"></v-radio>
            <v-radio name="gender" label="Female" value="2"></v-radio>
          </v-radio-group>

          <!-- Checkbox -->
          <v-checkbox
            label="I agree conditions"
            name="agree"
            v-model="fd.agree"
          ></v-checkbox>

          <!-- Button -->
          <v-btn prepend-icon="mdi-vuetify" color="primary">Submit</v-btn>
          <p class="mb-6"></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Example-1",
  metaInfo: {
    title: 'Example - 1 | Excel Data Filler 4',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data: () => ({
    // Country List
    countryList: ["Bhutan", "Bangladesh", "India", "Israel"],
    // Form Data
    fd: {
      input: "",
      autocompleteSingle: "",
      autocompleteMulti: [],
      select: "",
      textarea: "",
      radio: "",
      agree: false, // checkbox
    },
  }),
};
</script>
