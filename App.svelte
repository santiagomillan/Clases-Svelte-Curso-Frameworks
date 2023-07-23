<script>
import Form from "./Form.svelte";
import {title} from "./styles.js";
</script>


<main>
  <h2>Peliculas</h2>
  <Form/>

</main>

<style>
  :global(body) {
    --bg: #ffe9c5 ;
    --color: #e54b00;
    --color2: #512613;
    background: var(--bg);
    color: var(--color);
  }
</style>