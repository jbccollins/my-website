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
		name: 'Lapidary',
		tags: [TYPESCRIPT],
		id: 'lapidary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'React Interactive Canvas',
		tags: [REACT],
		id: 'react-interactive-canvas',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'DC Metro Monitor',
		tags: [REACT],
		id: 'metro-monitor',
		website: 'https://www.dcmetromonitor.com/?mapPosition=38.897174971889264%2C-77.02809381298722%2C18&stationCodes=A01%2CC01',
		description: 'DC Metro Monitor is a website that provides a comprehensive snapshot of the DC Metro system at all times. It features a map with real-time train positions, arrival times and WMATA alerts all in once place! This was the first website that I ever built and deployed on my own. I had just started a new job in DC and I was taking the metro into work every day. At the time there was no single webpage I could visit that woudld give me all the information that I cared about for my commute on any given day. All that information was all out there but it was inconveniently scattered throughout WMATA\'s website which is very cluttered. This made it impossible to undestand at a glance what I should prepare for when leaving for work. The biggest challenge for this project was data wrangling. Getting a good base set of '
	},
	{
		name: 'Cornhole Simulator',
		tags: [C_SHARP],
		id: 'cornhole-simulator',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapgggggidary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapidazhzzzry',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapsidahhy',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
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