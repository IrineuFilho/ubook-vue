<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row>
        <v-simple-table
            style="width: 100%"
        >
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">E-mail</th>
              <th class="text-left">Telefone</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.telephone }}</td>
              <td></td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-col>
  </v-container>

</template>
<script>

  export default {
    name: 'list',
    data() {
      return {
        desserts: [{ name: 'a', calories: '1' }]
      }
    }
  }

</script>

<style lang="scss">
  .v-data-table {
    thead {
      background: #fff !important;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    tbody{
      tr:hover{
        background: #fff3f2 !important;
      }
    }
  }
</style>
