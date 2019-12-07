<template>
  <v-layout class="Task__main_content py-3" column justify-center>
    <v-row class="Task__homework_name mx-1">
      <h1>Finish task #1</h1>

      <v-spacer> </v-spacer>

      <v-btn color="light" class="Task__send_homework"> File input</v-btn>

      <v-btn color="primary" class="Task__send_homework ml-2">
        Send Homework</v-btn
      >
    </v-row>

    <div class="mx-1">
      Deadline: 17 Jan 19:00
    </div>

    <v-card class="Task__homework_text mx-0">
      <v-card-text>
        Risus nec feugiat in fermentum posuere urna. Sapien nec sagittis aliquam
        malesuada. Lectus arcu bibendum at varius vel. Ac auctor augue mauris
        augue neque gravida in fermentum et. Faucibus turpis in eu mi bibendum
        neque egestas congue. Sociis natoque penatibus et magnis dis parturient.
        Nibh nisl condimentum id venenatis a. Odio euismod lacinia at quis
        risus.
        <ul class="mt-2">
          <li>Do somethig this way:</li>
          <li>Do something another way:</li>
        </ul>
      </v-card-text>
    </v-card>
    <div class="Task__main_bottom"></div>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
.Task__main_content {
  width: 100%;
  /* background-color: lightgray; */
  /* border-bottom: gray solid 1px;
  border-top: gray solid 1px; */
}
.Task__homework_text {
  margin: 20px;
  background-color: white;
}
.Task__homework_text {
  width: 100%;
  height: 70%;
}
</style>
