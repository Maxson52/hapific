<svelte:head>
  <title>Hapific</title>

  <meta name="title" content="Hapific" />
  <meta name="description" content="Why wait for happiness to come to you?" />
  <meta name="keywords" content="hapific, happiness, productivity" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://hapific.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Hapific" />
  <meta
    property="og:description"
    content="Why wait for happiness to come to you?"
  />
  <meta property="og:image" content="/banner.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="hapific.com" />
  <meta property="twitter:url" content="https://hapific.com" />
  <meta name="twitter:title" content="Hapific" />
  <meta
    name="twitter:description"
    content="Why wait for happiness to come to you?"
  />
  <meta name="twitter:image" content="/banner.png" />
</svelte:head>

<main
  class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-whiteish-100"
>
  <div class="tracking-[-0.08em] w-3/4">
    <h1 class="mb-2 text-greenish-100">Hapific</h1>
    <h1>— Why wait for <br /> happy? Go get it.</h1>
  </div>

  <div class="flex flex-col tracking-[-0.08em] w-3/4 mt-4">
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
    @apply underline underline-offset-4 decoration-2 text-base md:text-lg lg:text-xl;
  }
</style>
