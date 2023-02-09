<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let distanceValue;

  function handleDistanceValueChange() {
    dispatch("distanceValueChange", distanceValue);
  }
</script>

<div class="filters-row-container">
  <label for="distance">Avstånd i min</label>
  <div>
    <input
      id="distance"
      type="number"
      min="0"
      max="90"
      step="10"
      bind:value={distanceValue}
      on:input={handleDistanceValueChange}
    />
    <input
      id="distance"
      type="range"
      min="0"
      max="90"
      step="10"
      bind:value={distanceValue}
      on:input={handleDistanceValueChange}
    />
  </div>
</div>

<style>
  .filters-row-container {
    padding-top: 20px;
  }
</style>
