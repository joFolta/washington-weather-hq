import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LiveVideos() {
  return (
    <>
      <iframe
        width="100%"
        height="195px"
        src="https://www.youtube-nocookie.com/embed/RUN2G9r136c?si=jd9VkaFJlNyAQfiQ"
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
      <iframe
        width="100%"
        height="195px"
        src="https://www.youtube-nocookie.com/embed/5qVHjf7hKZU?si=4sFvjthHC_FVDpVL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe
        width="100%"
        height="195px"
        src="https://www.youtube.com/embed/jzjLn4LEyjg?si=Ebr2AcuMvzK2wod4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe >
      {/* TODO: This video feed is currently off. Uncomment when back on. */}
      {/* <iframe
        width="100%"
        height="195px"
        src="https://www.youtube.com/embed/I9Lg1IiuupA?si=-r7bKrgL1tv6mw5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe > */}
    </>
  );
}
