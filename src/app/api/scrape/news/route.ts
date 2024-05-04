import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET() {
  // Initialize arrays as empty
  let linksArray = [];
  let imagesArray = [];

  // Add a cache-busting query parameter to the URL
  const res = await fetch('https://economictimes.indiatimes.com/markets/stocks/news?from=mdr&_cacheBuster=' + Date.now());
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Declare storyLinks and storyImages before using them
  let storyLinks, storyImages;

  // Select all anchor tags within each 'eachStory' div
  storyLinks = document.querySelectorAll('.eachStory a');
  linksArray = Array.from(storyLinks).map((link) => link.textContent);

  // Select all images directly within each 'eachStory' div
  storyImages = document.querySelectorAll('.eachStory img');
  imagesArray = Array.from(storyImages).map((img) => img.src); // Get src attribute of each image

  return NextResponse.json({
    "links": linksArray,
    "images": imagesArray,
  });
}
