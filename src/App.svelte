<script>
  import GolfCourses from "./components/GolfCourses.svelte";
</script>

<div class="main-layer-container">
  <GolfCourses />
</div>

<style>
  .main-layer-container {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .main-layer-container {
      max-width: none;
    }
  }
</style>
