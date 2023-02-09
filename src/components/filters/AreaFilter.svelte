<script>
  export let Area;

  function handleCheckboxes() {
    let checkboxes = document.querySelectorAll(
      '.filter-item input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
</script>

<div class="filter-container">
  <!-- <ul>
    {#each Area as area}
      <li class="filter-item">
        <label for={area}>{area}</label>
        <input type="checkbox" name={area} id={area} checked />
      </li>
    {/each}
  </ul> -->
  <form action="myservlet.do" method="POST">
    <select name="SelectArea" id="SelectArea" onchange="this.form.submit()">
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
    </select>
  </form>
  <ul>
    <li class="filter-item">
      <label for="Alicante">Alicante</label>
      <input type="checkbox" name="Alicante" id="Alicante" checked />
    </li>
    <li class="filter-item">
      <label for="Torrevieja">Torrevieja</label>
      <input type="checkbox" name="Torrevieja" id="Torrevieja" checked />
    </li>
    <li class="filter-item">
      <label for="Murcia">Murcia</label>
      <input type="checkbox" name="Murcia" id="Murcia" checked />
    </li>
    <li class="filter-item">
      <label for="Benidorm">Benidorm</label>
      <input type="checkbox" name="Benidorm" id="Benidorm" checked />
    </li>
    <li class="filter-item">
      <label for="Cartagena">Cartagena</label>
      <input type="checkbox" name="Cartagena" id="Cartagena" checked />
    </li>
    <li class="filter-item">
      <label for="Lite-soder">Lite söder</label>
      <input type="checkbox" name="Lite-soder" id="Lite-soder" checked />
    </li>
  </ul>
  <button on:click={handleCheckboxes}> Avmarkera allt </button>
</div>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .filter-item {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
  }

  label {
    display: block;
    padding: 5px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }
</style>
