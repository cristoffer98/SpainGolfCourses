<script>
  export let Course;
  export let Image;
  export let RankLeadingCourses;
  export let Distance;
  export let Condition;
  export let Link;
  export let Area;
  export let Par;
  export let Golfhäftet;
  export let Price;
</script>

<div>
  <h3>{Course}</h3>
  <table class="styled-table">
    <tbody>
      <tr>
        <td>Område:</td>
        <td>{Area}</td>
      </tr>
      <tr>
        <td>Avstånd:</td>
        <td>{Distance} min</td>
      </tr>
      <tr>
        <td>Rank:</td>
        <td>{RankLeadingCourses}</td>
      </tr>
      <tr>
        <td>Par:</td>
        <td>{Par}</td>
      </tr>
      <tr>
        <td>Pris:</td>
        <td>{Price}€</td>
      </tr>
      <tr>
        <td>Finns i Golfhäftet:</td>
        <td>{Golfhäftet}</td>
      </tr>
      <tr>
        <td>Skick:</td>
        <td>{Condition}</td>
      </tr>
      <tr>
        <td>Läs mer:</td>
        <td>
          <a href={Link}>
            <button>TILL LEADING COURSES</button>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<img src={Image} alt="Image of {Course}" />

<style>
  * {
    font-family: "Montserrat", sans-serif;
  }
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    padding: 10px;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    text-align: left;
    width: 100%;
  }
  .styled-table th tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  .styled-table td {
    padding: 12px 15px;
  }
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  button {
    background-color: #009879;
    color: white;
    padding: 10px 10px;
    margin: 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #01705a;
  }
  img {
    width: 100%; /* set image width to match table width */
    max-width: 1300px;
  }
</style>
