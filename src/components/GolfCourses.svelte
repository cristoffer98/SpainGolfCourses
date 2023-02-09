<script>
  import { courses } from "../golf_data";
  import AreaFilter from "./filters/AreaFilter.svelte";
  import DistanceFilter from "./filters/DistanceFilter.svelte";
  import GolfCourse from "./GolfCourse.svelte";
  import GolfCourseList from "./GolfCourseList.svelte";

  let selectedCourse;
  let inputValue = "";
  let filteredCourses = courses;
  let displayCourseList = true;
  let distanceValue = 80;
  let filterCheckbox = false;

  function displayCourse(course) {
    selectedCourse = course;
    displayCourseList = false;
  }
  function returnToList() {
    selectedCourse = null;
    displayCourseList = true;
  }

  function handleDistanceValueChange(event) {
    distanceValue = event.detail;
  }

  function hideFilterCheckbox() {
    filterCheckbox = false;
  }

  $: filteredCourses = courses
    .filter((course) =>
      course.Course.toLowerCase().includes(inputValue.toLowerCase())
    )
    .filter((course) =>
      filterCheckbox ? course.Distance <= distanceValue : true
    );
</script>

<div class="course-list-container">
  <div class="navbar-container">
    <div class:hidden={!displayCourseList}>
      <input
        type="text"
        bind:value={inputValue}
        on:input={hideFilterCheckbox}
        placeholder="Sök bana"
      />
    </div>
    <div id="distance-container" class:hidden={!displayCourseList}>
      <div class="checkbox-filter-container">
        <h3><label for="checkboxFilter">Filtrera mera </label></h3>
        <input type="checkbox" bind:checked={filterCheckbox} />
      </div>
      {#if filterCheckbox}
        <div class="filter-container">
          <!-- <AreaFilter /> -->
          <DistanceFilter
            {distanceValue}
            on:distanceValueChange={handleDistanceValueChange}
          />
        </div>
      {/if}
    </div>
  </div>
  {#if !displayCourseList}
    <button class="return-button" on:click={returnToList}>Return</button>
  {/if}
  <ul class:hidden={!displayCourseList}>
    {#each filteredCourses as course}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => displayCourse(course)}>
        <GolfCourseList {...course} />
      </li>
    {/each}
  </ul>
  {#if selectedCourse}
    <GolfCourse {...selectedCourse} />
  {/if}
</div>

<style>
  .hidden {
    display: none;
  }
  .checkbox-filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
  }
  .filter-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .course-list-container {
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .navbar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #distance-container {
    padding: 30px;
    flex-direction: row;
  }
  input[type="checkbox"] {
    margin: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap; /* wrap items to the next row */
    justify-content: center; /* distribute items evenly horizontally */
    margin: 0 auto;
    padding: 0;
  }
  li {
    list-style-type: none;
    display: flex;
    flex-direction: column; /* stack elements vertically */
    align-items: center; /* center elements horizontally */
    width: 300px; /* set a fixed width */
    height: 350px; /* set a fixed height */
    margin: 10px; /* add margin */
    padding: 20px; /* add padding */
    border-radius: 10px; /* add rounded corners */
    box-shadow: 2px 2px 4px rgb(7, 7, 7); /* add a drop shadow */
  }
  li:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.3s;
  }
  .return-button {
    padding: 0.5rem 1rem;
    background-color: rgb(0, 195, 255);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .return-button:hover {
    background-color: rgb(0, 147, 192);
  }
</style>
