<template>
  <div
    class="fixed bg-black bg-opacity-25 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="flex bg-gray-100 mt-6 shadow-lg max-w-xl" style="height: 500px;">
      <div class="bg-gray-100 rounded-lg">
        <ul class="h-full overflow-auto">
          <li
            v-for="(n, index) in 5"
            class="pl-6 pt-3 pb-1 last:border-b-0 border-b border-gray-200 hover:bg-gray-200 last:pb-4"
          >
            <h3 class="font-bold text-lg">
              <span class="text-orange-600">#</span>
              Migration
              <span class="text-xs font-normal text-gray-500">Database</span>
            </h3>
            <p class="text-gray-600 text-md">
              Lorem ipsum dolor, sit amet consectetur.
              Lorem ipsum dolor sit,
              <b
                class="bg-blue-200 bg-opacity-50 font-normal px-1"
              >Muchachos arriva</b>
              amet consectetur adipisicing elit. Aperiam alias,
              nobis quo nemo nihil consectetur dolores pariatur,
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/tailwind.css";

export default {};
</script>

<style scoped>
</style>