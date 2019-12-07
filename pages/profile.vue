<template>
  <v-container fluid>
    <v-img
      src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
      class="profile__photo"
    ></v-img>
    <h1 class="profile__name">Good Student</h1>
    <p class="profile__description_group">27 group student</p>
  </v-container>
</template>

<style lang="scss" scoped>
.profile {
  &__name {
    text-align: center;
  }

  &__photo {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin: auto;
  }
  &__description {
    &_group {
      text-align: center;
    }
  }
}
</style>
