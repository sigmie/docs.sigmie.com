<template>
  <div class="flex bg-gray-100 mt-6 rounded" style="height: 500px;">
    <div class="w-7/12 bg-gray-100 rounded-l-lg">
      <ul>
        <li v-for="(n, index) in 5">
          {{ n }}
          Migration
          <span>Database</span>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </li>
        <li>
          Migration
          <span>Database</span>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </li>
        <li>
          Migration
          <span>Database</span>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </li>
      </ul>
    </div>
    <div class="w-5/12 bg-gray-200 rounded-r-lg">ya</div>
  </div>
</template>

<script>
import "../styles/tailwind.css";

export default {};
</script>

<style scoped>
</style>