<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card max-width="400" class="main-page__card">
          <v-img
            src="https://cdn.dribbble.com/users/2043038/screenshots/5284555/a2-16_2x.png"
            height="200px"
            class="white--text align-end justify-center"
          >
            <v-card-title>Mathematics</v-card-title>
          </v-img>
          <v-card-text>
            <div>26/27 groups</div>
            <div>2019</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="400" class="main-page__card">
          <v-img
            src="https://www.irishtimes.com/polopoly_fs/1.3930778.1560950858!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
            height="200px"
            class="white--text align-end justify-center"
          >
            <v-card-title>Physics</v-card-title>
          </v-img>
          <v-card-text>
            <div>26/27 groups</div>
            <div>2019</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="400" class="main-page__card">
          <v-img
            src="http://job.psu.ru/files/images/web-programmer-motvbffli138db7nz0pa1o5vcn1fa07w6gryk2hle0.jpg"
            height="200px"
            class="white--text align-end justify-center"
          >
            <v-card-title>IT</v-card-title>
          </v-img>
          <v-card-text>
            <div>26/27 groups</div>
            <div>2019</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="400" class="main-page__card">
          <v-img
            src="https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg"
            height="200px"
            class="white--text align-end justify-center"
          >
            <v-card-title>English</v-card-title>
          </v-img>
          <v-card-text>
            <div>26/27 groups</div>
            <div>2019</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-page {
  &__card {
    transition: 0.4s ease;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 10px 10px 51px -1px rgba(0, 0, 0, 0.52);
      -moz-box-shadow: 10px 10px 51px -1px rgba(0, 0, 0, 0.52);
      box-shadow: 10px 10px 51px -1px rgba(0, 0, 0, 0.52);
      transform: scale(1.1);
    }
  }
}
</style>
