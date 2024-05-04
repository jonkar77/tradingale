import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET() {
  try {
    // Initialize arrays as empty
    let linksArray = [];
    let imagesArray = [];

    // Add a cache-busting query parameter to the URL
    const res = await fetch('https://in.tradingview.com/markets/cryptocurrencies/prices-most-traded/');
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if the elements exist before extracting their content
    const showElements = document.querySelectorAll('.apply-common-tooltip.tickerDescription-GrtoTeat');

    const top3Shows = Array.from(showElements)
      .slice(0, 3) // Get the top 3 elements
      .map((element) => element.textContent);

    const showVolumes = [];
    const volumeRows = document.querySelectorAll('.row-RdUXZpkv.listRow');
    volumeRows.forEach((row) => {
      const tdElements = row.querySelectorAll('td');
      if (tdElements.length >= 3) {
        const volume = tdElements[2].textContent; // Get the third td element's text content
        showVolumes.push(volume);
      }
    });

    const showLogos = [];
    const logoElements = document.querySelectorAll('.tv-circle-logo-PsAlMQQF.tv-circle-logo--xsmall-PsAlMQQF.tickerLogo-GrtoTeat');
    logoElements.forEach((img) => {
      const logoSrc = img.src; // Get the src attribute of the image
      showLogos.push(logoSrc);
    });

    return NextResponse.json({
      "ticks": top3Shows,
      "volumes": showVolumes.slice(0, 3), // Get the top 3 volume data
      "logos": showLogos.slice(0,3),
    });
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return NextResponse.error('Failed to fetch data');
  }
}
