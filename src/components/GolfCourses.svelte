<script>
  import { courses } from "../golf_data";
  import GolfCourseList from "./GolfCourseList.svelte";
  import GolfCourse from "./GolfCourse.svelte";

  let searchTerm = "";
  let maxDistance = 90;
  let maxHoles = 18;
  let areaFilter;
  let golfhaftetFilter = "";

  let filteredCourses = courses.filter(
    (course) =>
      course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (areaFilter === course.Area || !areaFilter) &&
      (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
      course.Distance <= maxDistance &&
      course.Holes <= maxHoles
  );

  let selectedCourse = null;
  let displayCourseList = true;

  function displayCourse(course) {
    selectedCourse = course;
    displayCourseList = false;
  }

  function returnToList() {
    selectedCourse = null;
    displayCourseList = true;
  }

  function resetFields() {
    searchTerm = "";
    maxDistance = 90;
    maxHoles = 18;
    areaFilter = "";
    golfhaftetFilter = "";

    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }

  function handleSearchTermInput(event) {
    searchTerm = event.target.value;
    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }

  function handleDistanceInput(event) {
    maxDistance = event.target.value;
    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }

  function handleHolesInput(event) {
    maxHoles = event.target.value;
    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }

  function handleAreaFilter(event) {
    areaFilter = event.target.value;
    console.log(areaFilter);
    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }
  function handleGolfhaftetFilter(event) {
    golfhaftetFilter = event.target.value;
    filteredCourses = courses.filter(
      (course) =>
        course.Course.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!areaFilter || areaFilter === course.Area) &&
        (!golfhaftetFilter || golfhaftetFilter === course.Golfhäftet) &&
        course.Distance <= maxDistance &&
        course.Holes <= maxHoles
    );
  }
</script>

<div>
  {#if displayCourseList}
    <div class="main-filter-container">
      <div>
        <label for="search">Sök:</label>
        <input
          id="search"
          type="text"
          placeholder="Sök efter namn"
          on:input={handleSearchTermInput}
        />
        <label for="area">Område:</label>
        <select id="area" value={areaFilter} on:change={handleAreaFilter}>
          <option value="">All</option>
          {#each Array.from(new Set(courses.map((course) => course.Area))) as area}
            <option value={area}>{area}</option>
          {/each}
        </select>
        <label for="golfhaftet">Golfhäftet:</label>
        <select
          id="golfhaftet"
          value={golfhaftetFilter}
          on:change={handleGolfhaftetFilter}
        >
          <option value="">All</option>
          {#each Array.from(new Set(courses.map((course) => course.Golfhäftet))) as gh}
            <option value={gh}>{gh}</option>
          {/each}
        </select>
        <label for="distance">Avstånd:</label>
        <input
          type="range"
          id="distance"
          name="distance"
          min="0"
          max="90"
          step="10"
          value={maxDistance}
          on:input={handleDistanceInput}
        />
        <output for="distance">{maxDistance} min</output>
        <label for="holes">Antal hål:</label>
        <input
          type="range"
          id="holes"
          name="holes"
          min="9"
          max="18"
          step="9"
          value={maxHoles}
          on:input={handleHolesInput}
        />
        <output for="holes">{maxHoles}</output>
      </div>
      <button class="reset-button" on:click={resetFields}>Reset</button>
    </div>
    <ul>
      {#each filteredCourses as course}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={() => displayCourse(course)}>
          <GolfCourseList
            Course={course.Course}
            Image={course.Image}
            Distance={course.Distance}
            Area={course.Area}
            Holes={course.Holes}
          />
        </li>
      {/each}
    </ul>
  {:else}
    <button class="return-button" on:click={returnToList}>Return</button>
    <GolfCourse {...selectedCourse} />
  {/if}
</div>

<style>
  .main-filter-container {
    margin: 0 auto;
    margin-bottom: 20px;
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
  .reset-button {
    padding: 0.5rem 1rem;
    background-color: rgb(221, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .reset-button:hover {
    background-color: rgb(81, 0, 0);
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
