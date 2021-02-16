<template>
  <div>
    <div class="ml-0 md:ml-20 w-full md:w-56">
      <div class="relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <svg
            class="text-gray-400"
            width="15px"
            height="15px"
            viewBox="0 0 20 20"
          >
            <g fill="currentColor" fill-rule="nonzero">
              <path
                d="M14.32,12.9 L19.71,18.3 C20.0471653,18.6991459 20.0202154,19.290578 19.6481468,19.6574061 C19.2760783,20.0242342 18.6843235,20.0427927 18.29,19.7 L12.91,14.32 C9.57396751,16.9114945 4.79796777,16.4625999 2.00324212,13.2948775 C-0.791483525,10.1271551 -0.641657117,5.3324464 2.34539464,2.34539464 C5.3324464,-0.641657117 10.1271551,-0.791483525 13.2948775,2.00324212 C16.4625999,4.79796777 16.9114945,9.57396751 14.32,12.91 L14.32,12.9 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z"
              />
            </g>
          </svg>
        </div>
        <input
          class="rounded-full w-full text-white pl-10 h-8 pr-2 placeholder-gray-500"
          placeholder="Search..."
          type="text"
          @focus="show = true"
          @blur="show = false"
          v-model="query"
          name="sigmie"
          id="search"
        />
        <div
          v-if="query.length > 0"
          @click="query = ''"
          class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-auto"
        >
          <svg
            width="10px"
            height="10px"
            class="text-gray-500 focus:text-white display-none focus:display-block"
            viewBox="0 0 10 10"
          >
            <g fill="currentColor" fill-rule="nonzero">
              <path
                d="M9.24,7.83 C9.5797768,8.22676028 9.55693227,8.81819417 9.18756322,9.18756322 C8.81819417,9.55693227 8.22676028,9.5797768 7.83,9.24 L5,6.41 L2.17,9.24 C1.77323972,9.5797768 1.18180583,9.55693227 0.812436779,9.18756322 C0.44306773,8.81819417 0.420223204,8.22676028 0.76,7.83 L3.59,5 L0.76,2.17 C0.420223204,1.77323972 0.44306773,1.18180583 0.812436779,0.812436779 C1.18180583,0.44306773 1.77323972,0.420223204 2.17,0.76 L5,3.59 L7.83,0.76 C8.22676028,0.420223204 8.81819417,0.44306773 9.18756322,0.812436779 C9.55693227,1.18180583 9.5797768,1.77323972 9.24,2.17 L6.41,5 L9.24,7.83 L9.24,7.83 Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div
      id="overlay"
      :class="
        show && query.length > 0
          ? 'ease-out duration-300 opacity-100 visible'
          : 'ease-in duration-300 opacity-0 invisible'
      "
      class="fixed bg-black bg-opacity-25 bottom-0 inset-x-0 px-1 py-4 sm:py-8 sm:px-4 pb-6 delay-75 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center transition-all inset-0"
    >
      <div
        class="flex rounded-lg overflow-x-hidden bg-white shadow-lg max-w-xl max-h-full mx-auto"
      >
        <div class="bg-white-100 rounded-lg max-h-full">
          <ul v-if="results.length > 0" class="h-full overflow-auto">
            <li
              v-for="(result, index) in results"
              class="pl-6 pt-3 pb-1 last:border-b-0 border-b border-gray-200 hover:bg-gray-100 last:pb-4 cursor-pointer"
            >
              <RouterLink :to="'/app/google.html'" class="home-link">
                <div class="text-md leading-5 font-bold text-gray-700 truncate">
                  <span class="text-orange-400">#</span>
                  {{
                    result._source.hierarchy[
                      Object.keys(result._source.hierarchy)[
                        Object.keys(result._source.hierarchy).length - 1
                      ]
                    ]
                  }}

                  <span
                    class="ml-1 font-normal leading-tight text-sm text-gray-500"
                    >in {{ result._source.hierarchy[1] }}</span
                  >
                </div>
                <div class="my-2 max-w-xl text-sm leading-5 text-gray-500">
                  <p>
                    {{ result._source.content }}
                  </p>
                </div>
              </RouterLink>
            </li>
          </ul>
          <div v-else class="px-10 py-5">
            <div>
              <div class="text-center">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  No results to show for "{{ query }}"
                </h3>
                <div class="mt-2">
                  <p class="text-sm leading-5 text-gray-500">
                    We couldn't find what you're looking for
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/tailwind.css";

export default {
  watch: {
    query(newValue, oldValue) {
      const axios = require("axios");

      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer 5|GohDxes08aqgiBMSTvowZawljLZSoQUZuqF78xU7",
          "Content-Type": "application/json",
        },
        data: {
          query: {
            multi_match: {
              query: newValue,
              fields: ["content"],
            },
          },
        },
        url: "http://proxy.localhost:8080/foore/_search",
      };

      const self = this;
      axios(options)
        .then(function (response) {
          self.results = response.data.hits.hits;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data: function () {
    return {
      query: "",
      show: false,
      results: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
#overlay {
  margin-top: 3.6rem;
}
</style>