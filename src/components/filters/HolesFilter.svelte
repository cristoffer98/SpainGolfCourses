<script>
  export let holesFilter;
  export let setHolesFilter;
</script>

<label for="holes-filter">Antal hål:</label>
<select id="holes-filter" bind:value={holesFilter} on:change={setHolesFilter}>
  <option value="all">Alla</option>
  <option value="18">18 hål</option>
  <option value="9">9 hål</option>
</select>
