<script>
  export let Course;
  export let Image;
  export let Distance;
  export let Area;
</script>

<div>
  <h3>{Course}</h3>
  <p>{Area}</p>
  <p>{Distance} min</p>
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
</style>
