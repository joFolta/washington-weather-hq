import * as React from 'react';
import got from 'got';

export default async function LiveVideos() {
  let wildCatVideoId = '';

  try {
    const response = await got('https://www.youtube.com/@MWOBS/live');
    const liveStreamPage = response.body; // '<!doctype html> ...'
    const WILD_CAT_VIDEO = /link rel="canonical" href="https:\/\/www\.youtube.com\/watch\?v=(.*?)">/;
    wildCatVideoId = liveStreamPage?.match(WILD_CAT_VIDEO)?.[1] || '';
  } catch (error) {
    console.log(error); // 'Internal server error ...'
  }

  // TODO: change favicon (not Vercel's favicon)

  return (
    <>
      <h1 style={{ fontSize: "30px", marginBottom: "25px" }}>📽 Live Video Feeds</h1>
      <iframe
        width="100%"
        height="195px"
        src="https://www.youtube-nocookie.com/embed/RUN2G9r136c?si=jd9VkaFJlNyAQfiQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <iframe
        width="100%"
        height="195px"
        src="https://www.youtube-nocookie.com/embed/5qVHjf7hKZU?si=4sFvjthHC_FVDpVL"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <iframe
        width="100%"
        height="195px"
        src={`https://www.youtube.com/embed/${wildCatVideoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {/* TODO: This video feed is currently off. Uncomment when back on. */}
      {/* <iframe
        width="100%"
        height="195px"
        src="https://www.youtube.com/embed/I9Lg1IiuupA?si=-r7bKrgL1tv6mw5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> */}
    </>
  );
}
