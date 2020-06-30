<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <CountryOfOriginInput />
        <ParentOneCountryOfOrigin />
        <ParentTwoCountryOfOrigin />
        <!--       <DateOfBirthInput /> -->
        <AgeInput />
      </v-row>
      <v-row class="my-2 d-flex justify-center">
        <v-col cols="12" md="4">
          <v-btn x-large color="#039e9e" dark>Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// import DateOfBirthInput from "@/components/DateOfBirthInput.vue";
import CountryOfOriginInput from "@/components/CountryOfOriginInput.vue";
import ParentOneCountryOfOrigin from "@/components/ParentOneCountryOfOrigin.vue";
import ParentTwoCountryOfOrigin from "@/components/ParentTwoCountryOfOrigin.vue";
import AgeInput from "@/components/AgeInput.vue";

export default {
  components: {
    // DateOfBirthInput: DateOfBirthInput,
    CountryOfOriginInput: CountryOfOriginInput,
    ParentOneCountryOfOrigin: ParentOneCountryOfOrigin,
    ParentTwoCountryOfOrigin: ParentTwoCountryOfOrigin,
    AgeInput: AgeInput,
  },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped lang="scss">
.v-btn:before {
  background-color: #039e9e;
}

.v-btn {
  background-color: #039e9e;
}
</style>
