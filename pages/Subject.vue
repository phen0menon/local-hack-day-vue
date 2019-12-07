<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="7">
        <h1 class="ml-1">
          <v-avatar size="35">
            <v-img
              :src="'https://www.w3schools.com/w3images/avatar2.png'"
            ></v-img
          ></v-avatar>
          <span class="ml-2">Дисциплина: Математика</span>
        </h1>
        <h5 class="subtitle ml-1 my-1">
          В этой дисциплине мы будем изучать базовые термины и технологии,
          которые будут применяться для решения разнообразных проблем в
          математической науке.
        </h5>
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1 mt-4"
        >
          <template v-slot:item.points="{ item }">
            <v-chip :color="getColor(item.points)" dark>{{
              item.points
            }}</v-chip>
          </template>
          <template v-slot:item.desc="{ item }">
            <p>{{ item.desc.substr(0, 80) }}</p>
          </template>
        </v-data-table>
      </v-col>

      <v-col cols="12" sm="5">
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
                  <template v-if="!student.checkbox">
                    <v-img
                      :src="'https://www.w3schools.com/w3images/avatar2.png'"
                    ></v-img>
                  </template>

                  <template v-else>
                    <v-checkbox></v-checkbox>
                  </template>
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
          action: 'mdi-filter',
          title: 'Фильтровать',
          items: [
            { title: 'По дате', checkbox: true },
            { title: 'По названию', checkbox: true }
          ]
        }
      ],

      headers: [
        {
          text: 'Название задания',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Предмет', value: 'subject' },
        { text: 'Начало', value: 'period_start' },
        { text: 'Конец', value: 'period_end' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 'Математика',
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 'Математика',
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 'Математика',
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 'Математика',
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 'Математика',
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        }
      ]
    }
  },
  methods: {
    getColor(points) {
      if (points > 400) return 'red'
      else if (points > 200) return 'orange'
      else return 'green'
    }
  }
}
</script>
