<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card max-width="500" class="mx-4 background-primary">
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"> </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="student in item.items" :key="item.title">
                <v-list-item-avatar size="30">
                  <v-img
                    :src="'https://www.w3schools.com/w3images/avatar2.png'"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ student.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'"
                    >mdi-chat-bubble</v-icon
                  >
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: 'mdi-account-circle',
          title: 'Студенты',
          active: true,
          items: [{ title: 'Алексей Шевцов' }, { title: 'Джесус AVGN' }]
        },
        {
          action: 'mdi-playlist-edit',
          title: 'Задания',
          items: [
            { title: 'Поесть в КФС и сделать отчет' },
            { title: 'Сходить в Университет' }
          ]
        }
      ]
    }
  }
}
</script>
