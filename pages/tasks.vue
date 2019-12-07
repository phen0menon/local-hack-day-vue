<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1 mt-4">
    <template v-slot:item.points="{ item }">
      <v-chip :color="getColor(item.points)" dark>{{ item.points }}</v-chip>
    </template>
    <template v-slot:item.desc="{ item }">
      <p>{{ item.desc.substr(0, 80) }}</p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Название задания',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Баллы', value: 'points' },
        { text: 'Предмет', value: 'subject' },
        { text: 'Учитель', value: 'teacher' },
        { text: 'Начало', value: 'period_start' },
        { text: 'Конец', value: 'period_end' },
        { text: 'Описание', value: 'desc' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 6.0,
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 6.0,
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 6.0,
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 6.0,
          teacher: 24,
          period_start: '12.13.19',
          period_end: '12.03.19',
          desc:
            'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
        },
        {
          name: 'Frozen Yogurt',
          points: 159,
          subject: 6.0,
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
