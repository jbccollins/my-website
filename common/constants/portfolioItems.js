const NPM = {
	className: 'npm',
	text: 'NPM'
};
const TYPESCRIPT = {
	className: 'typescript',
	text: 'TypeScript'
}
const portfolioItems = [
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapidary',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'React Interactive Canvas',
		tags: [NPM,],
		id: 'react-interactive-canvas',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'DC Metro Monitor',
		tags: [NPM, TYPESCRIPT],
		id: 'dc-metro-monitor',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ipsum molestie enim mollis tempor. Curabitur tempor sem id justo gravida, eget molestie justo pretium. Etiam non turpis vitae lectus gravida molestie. Fusce nisi nisl, tincidunt quis purus in, finibus laoreet est. In eu sem ac massa vulputate tincidunt. Maecenas sed finibus sem, sed lobortis urna. Morbi et sapien nec lectus tempor accumsan. Nam ex elit, lacinia sit amet placerat a, suscipit sed ligula.'
	},
	{
		name: 'Lapidary',
		tags: [NPM, TYPESCRIPT],
		id: 'lapidasgdfgary',
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