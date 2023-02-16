<script>
  import { createEventDispatcher } from "svelte";
  import DistanceFilter from "./DistanceFilter.svelte";

  const dispatch = createEventDispatcher();

  let distanceFilter = "";
  let holesFilter = "";

  function handleDistanceFilter(event) {
    distanceFilter = event.target.value;
    dispatch("distanceFilter", distanceFilter);
  }

  function handleHolesFilter(event) {
    holesFilter = event.target.value;
    dispatch("holesFilter", holesFilter);
  }
</script>

<div class="filter">
  <DistanceFilter on:distanceChange{handleDistanceFilter}>
  <div class="filter-group">
    <label for="holes">Holes</label>
    <select
      id="holes"
      name="holes"
      bind:value={holesFilter}
      on:change={handleHolesFilter}
    >
      <option value="">All</option>
      <option value="9">9</option>
      <option value="18">18</option>
    </select>
  </div>
</div>
