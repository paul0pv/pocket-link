<script lang="ts">

        let darkTheme: boolean = $state(false)
        let themeIcon: string = $state('🌞');

    function handleThemeChange() {
        darkTheme = !darkTheme
        themeIcon = darkTheme === false ? '🌞' : '🌜'
        }

</script>

<button onclick={handleThemeChange}>{themeIcon}</button>