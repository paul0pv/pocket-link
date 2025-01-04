<script lang="ts">

        let darkTheme = $state(false)
        let themeIcon = $state('🌞');

    function handleThemeChange() {
        darkTheme = !darkTheme
        themeIcon = darkTheme === false ? '🌞' : '🌜'
        }

</script>

<button onclick={handleThemeChange}>{themeIcon}</button>