import Script from "next/script";


const darkModeToggleScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`
export default async function Head() {
    return (
        <>
            <title>Aung Myat Moe - Software Engineer, Founder and Open Source Enthusiast</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content="Aung Myat Moe - Software Engineer, Founder and Open Source Enthusiast"/>
            <meta name="robots" content="all"/>


            <Script dangerouslySetInnerHTML={{__html: darkModeToggleScript}}/>
            <link rel="icon" href="/favicon.ico"/>
            <link
                rel="alternate"
                type="application/rss+xml"
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
            />
            <link
                rel="alternate"
                type="application/feed+json"
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
            />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>

            {/* Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://aungmyatmoe.me/"/>
            <meta property="og:title"
                  content="Aung Myat Moe - Software Engineer, Founder and Open Source Enthusiast"/>
            <meta property="og:description"
                  content="He is a Software Engineer who is passionate about developing web application  and low level engineering."/>
            <meta property="og:image" content="/apple-touch-icon.png"/>

            {/*    Twitter */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://aungmyatmoe.me/"/>
            <meta property="twitter:title"
                  content="Aung Myat Moe - Software Engineer, Founder and Open Source Enthusiast"/>
            <meta property="twitter:description"
                  content="He is a Software Engineer who is passionate about developing web application  and low level engineering."/>
            <meta property="twitter:image" content="/apple-touch-icon.png"/>

        </>
    )
}

