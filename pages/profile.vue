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

        <div class="profile__description">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ea, alias eligendi minus quibusdam cupiditate rerum, eos fuga,
            aspernatur nobis explicabo ratione architecto corrupti? Placeat
            aspernatur sed fugiat culpa adipisci?
          </p>
        </div>
        <div class="profile__icons">
          <a
            class="profile__icon"
            v-for="(sc, index) in socialIcons"
            :key="index"
            :href="`https://${sc}`"
            ><v-icon size="45"> mdi-{{ index }} </v-icon></a
          >
        </div>
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

        <div class="post">
          <v-row>
            <v-avatar class="post__photo" size="30"
              ><v-img
                src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
              >
              </v-img>
            </v-avatar>
            <h3 class="post__author">Good Student</h3>
            <p class="post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cum cumque culpa doloribus, ipasum dolor sed obcaecati quos,
              aperiam laborum hic, maiores accusantium atque. Minus quos ratione
              illo pariatur incidunt?
            </p>

            <v-row class="my-2 small d-flex justify-between post__chip">
              <v-chip>#coding</v-chip>
              <div class="post__data">07 Dec 2918</div>
            </v-row>
          </v-row>
        </div>
        <div class="post">
          <v-row>
            <v-avatar class="post__photo" size="30"
              ><v-img
                src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
              >
              </v-img>
            </v-avatar>
            <h3 class="post__author">Good Student</h3>
            <p class="post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cum cumque culpa doloribus, ipasum dolor sed obcaecati quos,
              aperiam laborum hic, maiores accusantium atque. Minus quos ratione
              illo pariatur incidunt?
            </p>

            <v-row class="my-2 small d-flex justify-between post__chip">
              <v-chip>#coding</v-chip>
              <div class="post__data">07 Dec 2918</div>
            </v-row>
          </v-row>
        </div>
        <div class="post">
          <v-row>
            <v-avatar class="post__photo" size="30"
              ><v-img
                src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
              >
              </v-img>
            </v-avatar>
            <h3 class="post__author">Good Student</h3>
            <p class="post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cum cumque culpa doloribus, ipasum dolor sed obcaecati quos,
              aperiam laborum hic, maiores accusantium atque. Minus quos ratione
              illo pariatur incidunt?
            </p>

            <v-row class="my-2 small d-flex justify-between post__chip">
              <v-chip>#coding</v-chip>
              <div class="post__data">07 Dec 2918</div>
            </v-row>
          </v-row>
        </div>
        <div class="post">
          <v-row>
            <v-avatar class="post__photo" size="30"
              ><v-img
                src="https://www.speridian.com/wp-content/uploads/2019/07/studentalign.jpg"
              >
              </v-img>
            </v-avatar>
            <h3 class="post__author">Good Student</h3>
            <p class="post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cum cumque culpa doloribus, ipasum dolor sed obcaecati quos,
              aperiam laborum hic, maiores accusantium atque. Minus quos ratione
              illo pariatur incidunt?
            </p>

            <v-row class="my-2 small d-flex justify-between post__chip">
              <v-chip>#coding</v-chip>
              <div class="post__data">07 Dec 2918</div>
            </v-row>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: {
        facebook: 'facebook.com',
        twitter: 'twitter.org',
        vk: 'vk.com',
        'github-box': 'github.com'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  &__photo {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin: auto;
  }
  &__name {
    text-align: center;
  }
  &__description {
    text-align: center;
    &_group {
      text-align: center;
    }
  }
  &__icons {
    display: flex;
    justify-content: space-between;
    > a {
      text-decoration: none;
    }
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
.post {
  margin-left: 1.2rem;
  margin-top: 0.5rem;
  &__photo {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  &__data {
    font-size: 0.8rem;
  }
  &__author {
    font-weight: 400;
  }
  h3 {
    margin-left: 0.5rem;
  }
  &__chip {
    margin: 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
