import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Washington Weather HQ</h1>
      {/* $('#innerContent').load('https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx'); */}
      {/* <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script> */}
      {/* <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
      <iframe is="x-frame-bypass" src="https://news.ycombinator.com/"></iframe> */}
      {/* <iframe src="https://www.mountain-forecast.com/peaks/Mount-Washington-2/forecasts/1917" width="100%"
        height="4500" loading="lazy">
      </iframe> */}
      {/* Alltrails */}
      {/* <iframe src="https://www.alltrails.com/us/new-hampshire/mount-washington" width="100%"
        height="400px" loading="lazy">
      </iframe> */}
      {/* weather.com */}
      {/* <iframe src="https://weather.com/weather/tenday/l/c0292db17aea257fa09360f7942149ec5d9cd9e9e319f8bcff6bf11b111d6253" width="100%"
        height="400px" loading="lazy">
      </iframe> */}
      {/* Weather Station */}
      <div id={styles.weatherStationContainer}>
        {/* <iframe id={styles.weatherStation} src="https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx#innerContent" loading="lazy">
        </iframe> */}
        <iframe id={styles.weatherStation} src="https://www.mountwashington.org/experience-the-weather/mount-washington-weather.aspx#innerContent" loading="lazy">
        </iframe>
      </div>

      {/* TODO USE div #innerContent */}
      {/* Youtube live videos */}
      {/* TODO: use carousel */}
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9cOe77NwBMk?si=-YmY2hQfQKpqEQy3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RUN2G9r136c?si=jd9VkaFJlNyAQfiQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5qVHjf7hKZU?si=4sFvjthHC_FVDpVL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </main>
  )
}
