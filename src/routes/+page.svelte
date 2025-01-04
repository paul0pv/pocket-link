<script lang="ts">
  import '../app.css'
  import LinkIcon from '../lib/components/icons/Link.svelte'
  import QrIcon from '../lib/components/icons/Qr.svelte'
</script>

      <main class="grid justify-center items-center p-8 min-h-[calc(100vh-6.75rem)] border-t-[1px] border-solid border-steel-gray lg:px-36">
        <article class="grid justify-center p-4 text-center">
          <h2 class="text-5xl">Welcome to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-midnight-blue to-steel-gray">PocketLink</span></h2>
          <p class="self-center my-4 md:text-lg">A tool to create and manage short links and QR codes.</p>
          <div class="flex flex-col gap-4 my-4 justify-around items-center w-full lg:flex-row lg:gap-3">
            <span class="flex items-center justify-center gap-2 py-3 px-5 text-teal-accent border-solid border-[1px] border-steel-gray rounded-lg cursor-pointer w-1/2" > 
              <LinkIcon />
              Create Link
            </span>
            <span class={`flex items-center justify-center gap-2 py-3 px-5 text-light-gray bg-steel-gray brightness-110 rounded-lg cursor-pointer w-1/2`}>  
                <QrIcon />
                Generate QR
            </span>
          </div>
        </article>
  
        <div class="flex flex-col justify-center items-center text-center gap-2"> 
          <span>You can check the project on</span>
          <a href="#" class="underline underline-offset-2">This link</a>
        </div>
      </main>
