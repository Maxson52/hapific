<svelte:head>
  <title>Hapific</title>
</svelte:head>

<main
  class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-whiteish-100"
>
  <div class="tracking-[-0.08em] w-3/4">
    <h1 class="mb-2 text-greenish-100">Hapific</h1>
    <h1>— A better lifestyle <br /> leads to a better life.</h1>
  </div>

  <div class="flex flex-col tracking-[-0.08em] w-3/4">
    <a href="https://course.hapific.com" data-sveltekit-preload-data="off"
      >Our Course</a
    >
    <a href="https://simplist.hapific.com" data-sveltekit-preload-data="off"
      >Simplist</a
    >
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-4xl md:text-6xl lg:text-7xl;
  }

  a {
    @apply underline underline-offset-4 decoration-2;
  }
</style>
