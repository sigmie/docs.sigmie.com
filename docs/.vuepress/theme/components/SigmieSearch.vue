<template>
  <div>
    <input type="text" name="sigmie" id="sigmie-search" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  float: left;
  padding: 0rem 1rem;
  background-color: #202327;
}

#sigmie-search:active,
#sigmie-search:focus {
  background-color: #373940;
}

#sigmie-search {
  background-color: #202327;
  cursor: text;
  width: 10rem;
  height: 2rem;
  color: #4e6e8e;
  display: inline-block;
  border: 0px;
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background-size: 1rem;
}
</style>