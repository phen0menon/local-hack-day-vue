<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-img
          src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
          class="profile__photo "
        ></v-img>
        <h1 class="profile__name">Good Student</h1>
        <p class="profile__description_group">27 group student</p>
      </v-col>
      <v-col cols="8">
        <v-form d-flex>
          <v-row
            ><v-avatar class="new-post_photo" size="40"
              ><v-img
                src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
              >
              </v-img>
            </v-avatar>
            <v-text-field label="Type your message here" class="new-post_text">
            </v-text-field></v-row
        ></v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.profile {
  &__photo {
    height: 250px;
    width: 250px;
    border-radius: 50%;
  }
}

.new-post {
  &_photo {
    height: 40px;
    width: 40px;
    margin-right: 1.1rem;
    border-radius: 60%;
  }
}
</style>
