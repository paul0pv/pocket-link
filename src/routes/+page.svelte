<script lang="ts">
  import '../app.css'
  //import BetaIcon from '$lib/components/icons/Beta.svelte'
  import LinkIcon from '../lib/components/icons/Link.svelte'
  import RedirectIcon from '$lib/components/icons/Redirect.svelte';
  import QrIcon from '../lib/components/icons/Qr.svelte'
</script>

      <section class="grid justify-center text-center">
        <h2 class="text-4xl mb-2 lg:text-5xl xl:text-6xl">Welcome to <span class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-midnight-blue to-steel-gray">PocketLink</span></h2>
        <p class="self-center my-4 md:text-lg">Shorten your links in seconds, create QR codes for all your needs, and track their performance.</p>
        <div class="flex flex-wrap gap-4 my-2 justify-center items-center w-full">
          <span class="flex items-center justify-center gap-2 py-3 px-6 text-teal-accent border-solid border-[1px] border-steel-gray rounded-lg cursor-pointer" > 
            <LinkIcon />
            Create Link
          </span>
          <span class="flex items-center justify-center gap-2 py-3 px-6 text-light-gray bg-steel-gray brightness-110 rounded-lg cursor-pointer">  
              <QrIcon />
              Generate QR
          </span>
        </div>
      </section>

      <div class="flex flex-col justify-center items-center text-center gap-2"> 
        <span class="font-light">You can check the project on</span>
        <a href="/home" class="flex gap-1 underline underline-offset-2 mb-4"><span class="project-shortlink"></span><RedirectIcon /></a>
        <span class="flex font-light justify-center items-center lg:gap-2">
           Remember: we're still in beta, so let us know if you find any bugs or have suggestions for improvement. 🧙‍♂️
        </span>
        <a href="/home" class="flex gap-1 underline underline-offset-2"><span class="issues-shortlink"></span><RedirectIcon /></a>
      </div>

      <style>
        .project-shortlink::after {
          content: 'This Link';
        }

        .issues-shortlink::after {
          content: 'GitHub issues';
        }

        @media (min-width: 764px) {
          .project-shortlink:hover::after, .issues-shortlink:hover::after {
          content: 'Shorten Link';
        }
        }
      </style>
