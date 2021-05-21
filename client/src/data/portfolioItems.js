import lapidaryBackground from 'assets/portfolio-items/lapidary-background.png';
import dcMetroMonitorBackground from 'assets/portfolio-items/dc-metro-monitor-background.png';
import reactInteractiveCanvasBackground from 'assets/portfolio-items/react-interactive-canvas-background.png';
import cornholeSimulatorBackground from 'assets/portfolio-items/cornhole-simulator-background.jpg';
import usWeatherMonitorBackground from 'assets/portfolio-items/us-weather-monitor-background.gif';
import spotifyPhilipsHueAlbumSyncBackground from 'assets/portfolio-items/spotify-philips-hue-album-sync-background.png';
import reactLeafletFlyInMarkerBackground from 'assets/portfolio-items/react-leaflet-fly-in-marker-background.gif';
import postcssTwistUrlAssetsBackground from 'assets/portfolio-items/postcss-twist-url-assets-background.jpg';
import destinyPatchNotesExplorerBackground from 'assets/portfolio-items/destiny-patch-notes-explorer-background.jpg';
import asyncCanvasToBlobBackground from 'assets/portfolio-items/async-canvas-to-blob-background.jpg';
import reactLavaLampMenuBackground from 'assets/portfolio-items/react-lava-lamp-menu-background.gif';
import leafletTileLoadingProgressControl from 'assets/portfolio-items/leaflet-tile-loading-progress-control-background.gif';
import myPersonalStarterReactSetupBackground from 'assets/portfolio-items/my-personal-starter-react-setup-background.png';
import reactGradientScrollBackground from 'assets/portfolio-items/react-gradient-scroll-background.jpg';
import thisWebsiteBackground from 'assets/portfolio-items/my-website-background.jpg';
import reactLeafletExtendableBackground from 'assets/portfolio-items/react-leaflet-extendable-background.png';
import marylandCensusDataExplorerBackground from 'assets/portfolio-items/maryland-census-data-explorer-background.jpg';

const NPM = {
	className: 'npm',
	text: 'NPM'
};
const TYPESCRIPT = {
	className: 'typescript',
	text: 'TypeScript'
};
const C_SHARP = {
	className: 'c-sharp',
	text: 'C#'
};
const REACT = {
	className: 'react',
	text: 'React'
};

const portfolioItems = [
	{
    name: 'DC Metro Monitor',
    image: dcMetroMonitorBackground,
		tags: [REACT],
		id: 'metro-monitor',
		website: {
      text: "Website",
      url: 'https://www.dcmetromonitor.com/?mapPosition=38.897174971889264%2C-77.02809381298722%2C18&stationCodes=A01%2CC01',
    },
    description: 'A live map of the DC Metro system.',
    /*
    sections: [
      {
        name: "Motivation",
        content: (
          <div>
            I first started working in Washington DC in April of 2018. I was taking the DC Metro system into work everyday
            and became increasingly frustrated at the lack of any tool that could show me all the info I needed to prepare
            for my commute while also letting me filter out information that I didn't need. And so I built such a tool myself.
          </div>
        ),
      },
      {
        name: "Solution",
        content: (
          <div>
            Metro Monitor is a React based website with a NodeJS backend. It features a fullscreen map powered by Leaflet
            that displays all the rail line and station geometry as well as the live train positions. Clicking on a station
            will bring up an overlay with the next few arrival time predictions for that station. There is also an alert
            indicator which will display all active WMATA alerts. Using filters in the menu it is possible to turn off
            any information that is irrelevant to the user. Don't care about the orange line? Switch it off and you won't see
            that line geometry, any orange line trains or any orange line alerts!
          </div>
        )
      },
      {
        name: "Learned",
        content: (
          <div>
            This was the first React based website I made on my own from start to finish. As such I learned a lot about
          </div>
        )
      }
    ]
    */
  },
	{
    name: 'Lapidary',
    image: lapidaryBackground,
		tags: [TYPESCRIPT],
    id: 'lapidary',
    description: 'Configurable faceted filtering written in TypeScript.',
    website: {
      text: "Demo",
      url: "https://lapidary-demo.herokuapp.com/",
    },
  },
	{
		name: 'My React Starter Kit',
    image: myPersonalStarterReactSetupBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'my-personal-starter-react-setup',
    description: 'A ready-to-go website scaffold that I use for most of my projects.',
    website: {
      text: "Demo",
      url: "https://my-personal-react-setup.herokuapp.com/",
    },
  },
	{
		name: 'Spotify Hue Light Sync',
    image: spotifyPhilipsHueAlbumSyncBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'spotify-philips-hue-album-sync',
    description: 'Sync your hue lights with your Spotify album art.'
  },
	{
    name: 'US Weather Monitor',
    image: usWeatherMonitorBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'weather-monitor',
    description: 'A no frills realtime weather map.',
		website: {
      text: "Website",
      url: 'https://weather-monitor-demo.herokuapp.com/',
    },
	},
	{
		name: 'This Website!',
    image: thisWebsiteBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'my-website',
    description: 'The website that you are currently looking at 🙂 👨🏻‍💻'
  },
	{
    name: 'Maryland Census Data Explorer',
    image: marylandCensusDataExplorerBackground,
		tags: [REACT],
    id: 'maryland-census-data-explorer',
    description: 'Explore income patterns using Maryland\'s 2012 - 2013 census data.',
		website: {
      text: "Website",
      url: 'https://jbccollins.shinyapps.io/census-app/',
    },
	},
	{
    name: 'React Gradient Scroll',
    image: reactGradientScrollBackground,
		tags: [REACT],
    id: 'react-gradient-scroll-indicator',
    description: 'A wrapper for scrollable content that adds subtle gradients.'
	},
	{
    name: 'React Leaflet Fly-in Marker',
    image: reactLeafletFlyInMarkerBackground,
		tags: [REACT],
    id: 'react-leaflet-fly-in-marker',
    description: 'A wrapper component for animated leaflet markers.'
	},
	{
    name: 'React Interactive Canvas',
    image: reactInteractiveCanvasBackground,
		tags: [REACT],
    id: 'react-interactive-canvas',
    description: 'Declarative canvas components that support mouse events.',
    website: {
      text: "Demo",
      url: "https://react-interactive-canvas-demo.herokuapp.com/"
    },
	},
	{
    name: 'Cornhole Simulator',
    disabled: true,
    image: cornholeSimulatorBackground,
		tags: [C_SHARP],
		id: 'cornhole-simulator',
    description: 'A weather-proof way to waste time.'
	},
	{
		name: 'Postcss Twist URL Assets',
    image: postcssTwistUrlAssetsBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'postcss-twist-url-assets',
    description: 'A plugin that will transform relative url paths into absolute url paths.'
	},

	{
		name: 'Async Canvas To Blob',
    image: asyncCanvasToBlobBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'async-canvas-to-blob',
    description: 'A tiny wrapper around canvas.toBlob that makes async usage cleaner.'
  },
	{
		name: 'React Lava Lamp Menu',
    image: reactLavaLampMenuBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'react-lava-lamp-menu',
    description: 'A menu component with a gooey transition effect.',
    website: {
      text: "Demo",
      url: "https://jbccollins.github.io/react-lava-lamp-menu/",
    },
  },
	{
		name: 'Leaflet Tile Loading Progress',
    image: leafletTileLoadingProgressControl,
		tags: [NPM, TYPESCRIPT],
		id: 'leaflet-tile-loading-progress-control',
    description: 'A leaflet control that indicates tile loading progress.'
  },
	{
		name: 'Destiny Patch Notes Explorer',
    image: destinyPatchNotesExplorerBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'destiny-patch-notes-explorer',
    description: 'Filter, subset and visualize patch notes for the video game "Destiny".',
    website: {
      text: "Website",
      url: "https://jbccollins.shinyapps.io/destinypatchnotesexplorer/",
    },
	},
	{
		name: 'React Leaflet Extendable',
    image: reactLeafletExtendableBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'react-leaflet-extendable',
    description: 'A fork of react-leaflet with extendable components.'
	},
];

export { portfolioItems };