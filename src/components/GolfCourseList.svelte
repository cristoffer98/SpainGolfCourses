<script>
  export let Course;
  export let Image;
  export let Distance;
  export let Area;
  export let Holes;
</script>

<div class="card-display-container">
  <h2>{Course}</h2>
  <hr />
  <div class="display-course-container">
    <p>{Holes} hål</p>
    <hr />
    <p>{Area}</p>
    <hr />
    <p>{Distance} min</p>
  </div>
  {#if Image === null}
    <img src="../../public/defaultImage.jpeg" alt={Course} />
  {:else}
    <img src={Image} alt={Course} />
  {/if}
</div>

<style>
  img {
    width: 100%; /* set image width to match card width */
  }
  .display-course-container {
    display: flex;
    justify-content: space-around;
    margin: 0 30px 0 30px;
  }
</style>
