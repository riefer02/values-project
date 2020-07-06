<template>
  <v-form v-model="valid" @submit="formSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.firstname"
            :rules="nameRules"
            :counter="20"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.lastname"
            :rules="nameRules"
            :counter="20"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <CountryOfOriginInput v-model="form.countryOfOrigin" />
        <ParentOneCountryOfOrigin v-model="form.parentOneCountryOfOrigin" />
        <ParentTwoCountryOfOrigin v-model="form.parentTwoCountryOfOrigin" />
        <!--       <DateOfBirthInput /> -->
        <AgeInput v-model.number="form.userAge" />
        <FirstValuesInput v-model="form.values.first" />
        <SecondValuesInput v-model="form.values.second" />
        <ThirdValuesInput v-model="form.values.third" />
      </v-row>
      <v-row class="my-2 d-flex justify-center">
        <v-col cols="12" md="4">
          <v-btn x-large color="#039e9e" dark type="submit">Submit</v-btn>
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
import FirstValuesInput from "@/components/FirstValuesInput.vue";
import SecondValuesInput from "@/components/SecondValuesInput.vue";
import ThirdValuesInput from "@/components/ThirdValuesInput.vue";

export default {
  components: {
    // DateOfBirthInput: DateOfBirthInput,
    CountryOfOriginInput: CountryOfOriginInput,
    ParentOneCountryOfOrigin: ParentOneCountryOfOrigin,
    ParentTwoCountryOfOrigin: ParentTwoCountryOfOrigin,
    AgeInput: AgeInput,
    FirstValuesInput: FirstValuesInput,
    SecondValuesInput: SecondValuesInput,
    ThirdValuesInput: ThirdValuesInput,
  },
  data: () => ({
    valid: false,
    form: {
      firstname: "",
      lastname: "",
      countryOfOrigin: "",
      parentOneCountryOfOrigin: "",
      parentTwoCountryOfOrigin: "",
      userAge: null,
      values: {
        first: "",
        second: "",
        third: "",
      },
    },

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

  methods: {
    formSubmit(e) {
      e.preventDefault();
      let self = this;
      this.axios
        .post("http://localhost:6969/api/v1/submit", {
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          email: this.form.email,
          countryOfOrigin: this.form.countryOfOrigin,
          parentOneCountryOfOrigin: this.form.parentOneCountryOfOrigin,
          parentTwoCountryOfOrigin: this.form.parentTwoCountryOfOrigin,
          userAge: this.form.userAge,
          values: {
            first: this.form.values.first,
            second: this.form.values.second,
            third: this.form.values.third,
          },
        })
        .then(function(response) {
          console.log(response.data);
          self.$router.push("/thankyou");
        })
        .catch(function(error) {
          if (error.response) {
            // console.log(error.response.data.message);
            const arrayOfErrors = error.response.data.message.split(".").map(
              (el) => el.trim()
              // .split(/\s+/)
              // .join(" ")
            );
            // .join("\n");
            // console.log(arrayOfErrors);
            // const objectOfErrors = Object.assign({}, arrayOfErrors);
            // console.log(objectOfErrors);
            self.$store.commit("writeErrors", arrayOfErrors);
            self.$store.commit("toggleModal");
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
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
