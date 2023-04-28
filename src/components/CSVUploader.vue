// This component should be used to upload a CSV file // and then print the
header and the frist 5 rows of the file in the web page in a spreadsheet like
view.

<template>
  <div class="csv-uploader">
    <h1>CSV Uploader</h1>
    <input type="file" id="file" accept=".csv" />
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="cell in row" :key="cell">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CSVUploader',
  data() {
    return {
      headers: ['1', '2', '3'],
      rows: [
        ['1', '2', '3'],
        ['1', '2', '3'],
        ['1', '2', '3'],
      ],
    };
  },
  methods: {
    async handleFileUpload(event: Event): Promise<void> {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) {
        return;
      }
      const text = await file.text();
      const lines = text.split('\n');
      this.headers = lines[0].split(',');
      this.rows = lines.slice(1, 6).map((line) => line.split(','));
    },
  },
  mounted() {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.addEventListener('change', this.handleFileUpload);
  },
});
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
