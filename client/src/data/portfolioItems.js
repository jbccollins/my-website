import lapidaryBackground from 'assets/lapidary-background.png';
import dcMetroMonitorBackground from 'assets/dc-metro-monitor-background.png';
import reactInteractiveCanvasBackground from 'assets/react-interactive-canvas-background.png';
import cornholeSimulatorBackground from 'assets/cornhole-simulator-background.jpg';
import usWeatherMonitorBackground from 'assets/us-weather-monitor-background.png';
import spotifyPhilipsHueAlbumSyncBackground from 'assets/spotify-philips-hue-album-sync-background.png';
import reactLeafletFlyInMarkerBackground from 'assets/react-leaflet-fly-in-marker-background.gif';
import postcssTwistUrlAssetsBackground from 'assets/postcss-twist-url-assets-background.jpg';

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
		website: 'https://www.dcmetromonitor.com/?mapPosition=38.897174971889264%2C-77.02809381298722%2C18&stationCodes=A01%2CC01',
    description: 'A live filterable map of the DC Metro system featuring train positions, train arrival predictions and WMATA alerts all in once place!'
    //description: 'DC Metro Monitor is a website that provides a comprehensive snapshot of the DC Metro system at all times. It features a map with real-time train positions, arrival times and WMATA alerts all in once place! This was the first website that I ever built and deployed on my own. I had just started a new job in DC and I was taking the metro into work every day. At the time there was no single webpage I could visit that woudld give me all the information that I cared about for my commute on any given day. All that information was all out there but it was inconveniently scattered throughout WMATA\'s website which is very cluttered. This made it impossible to undestand at a glance what I should prepare for when leaving for work. The biggest challenge for this project was data wrangling. Getting a good base set of '
	},
	{
		name: 'Spotify Hue Light Sync',
    image: spotifyPhilipsHueAlbumSyncBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'spotify-philips-hue-album-sync',
    description: 'A webapp that syncs your Philips Hue lights with the most prominent colors in the album art for your currently playing Spotify track.'
	},
	{
    name: 'Lapidary',
    image: lapidaryBackground,
		tags: [TYPESCRIPT],
    id: 'lapidary',
    description: 'Configurable faceted filtering.'
	},
	{
    name: 'React Leaflet Fly-in Marker',
    image: reactLeafletFlyInMarkerBackground,
		tags: [REACT],
    id: 'react-leaflet-fly-in-marker',
    description: 'A wrapper component for leaflet marker icons allowing you to animate them falling in from above. It\'s raining markers!'
	},
	{
    name: 'React Interactive Canvas',
    image: reactInteractiveCanvasBackground,
		tags: [REACT],
    id: 'react-interactive-canvas',
    description: 'Declarative canvas components that support mouse events.'
	},
	{
    name: 'Cornhole Simulator',
    image: cornholeSimulatorBackground,
		tags: [C_SHARP],
		id: 'cornhole-simulator',
    description: 'A weather-proof way to waste time.'
	},
	{
    name: 'US Weather Monitor',
    image: usWeatherMonitorBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'us-weather-monitor',
    description: 'A no frills realtime weather map featuring a live looping precipitation radar and local forcasting.'
	},

	{
		name: 'Postcss Twist URL Assets',
    image: postcssTwistUrlAssetsBackground,
		tags: [NPM, TYPESCRIPT],
		id: 'postcss-twist-url-assets',
    description: 'A postcss plugin that will transform relative url paths into absolute url paths. Particularly useful when wrangling images from npm packages that use relative urls in their css.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapida1dsry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapi2dary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapid3ary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapid4ary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapida5ry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapida6ry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	}
];

export { portfolioItems };