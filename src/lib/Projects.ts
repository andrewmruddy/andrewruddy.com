const projects = [
	{
		title: 'Affordable Metal 3D Printing',
		technologies: ['Additive Manufacturing', 'FFF/FDM', '3D Printing', 'BASF Ultrafuse'],
		role: 'Extracurricular/Individual Project',
		description:
				'I have recently been working on a low-cost metal 3D printing workflow, leveraging BASF Ultrafuse 17-4 PH stainless steel filament with a consumer-grade 3D printer to create durable, high-strength metal components without expensive industrial equipment. I have successfully applied this process in my job for tooling and prototyping, optimize print parameters, and establish best practices for post-processing. Through extensive testing, I have developed a structured approach that allows for lightweight, complex geometries that traditional machining cannot achieve. One success includes robotic grippers that are 50% lighter than machined equivalents, reducing payload strain while maintaining durability. I also designed a custom dual-spindle wrench that is 40% lighter and 75% cheaper to produce, improving efficiency in an assembly process. By integrating advanced mechanical design techniques like Inventor\'s Shape Generator, I have expanded the practical applications of metal additive manufacturing beyond its conventional limits. My goal is to continue refining this process, applying it to new projects, and sharing my findings with others interested in affordable, high-performance 3D-printed metal parts.',
		url: [],
		pictures: ['https://raw.githubusercontent.com/andrewmruddy/andrewruddy.com/refs/heads/main/assets/IMG_9186.jpg','https://raw.githubusercontent.com/andrewmruddy/andrewruddy.com/refs/heads/main/assets/IMG_9264.jpg'],
		paused: false
	},
	{
		title: 'Dorna Robot Development',
		technologies: ['Python', 'Robotics', '3D Printing', 'Regression Modeling'],
		role: 'Extracurricular/Individual Project',
		description:
			'My projects with Dorna robots range from programming the robots to draw, pick and place, and change tools. I have also spent plenty of time programming the robots to be a bartender. To get the robot to pour the exact amount, I modeled the bottle\'s behavior with extensive data collection. I then created a mathematical model for the bottle\'s pouring dynamics so the robot could pour precise amounts over the full range of the bottle\'s volume.',
		url: ['https://www.youtube.com/embed/EgrA19qtnZg?si=B-MW6noya46l8uFg',
				'https://youtube.com/embed/W_CNs2aZyZo?si=9PzPpF47P6pi7kpJ'
			],
		pictures: [],
		paused: false
	},
	{
		title: 'Medium Hob Robot',
		technologies: ['FANUC', 'PLC', 'Robotics', 'Mechanical Design', 'System Design'],
		role: 'Team Project | Lead Design Enigineer & Project Manager',
		description:
			'The Medium Hob machine tending project involved programming and integrating a FANUC M30iD-35 robot to automate production on a Mitsubishi GD30 CNC Gear Hobbing Machine. To achieve seamless communication between the robot, the CNC machine, and the PLC, I utilized auxiliary M-codes for machine-to-PLC communication and coordinated system states between the robot and the PLC via Ethernet/IP. This integration required precise synchronization to ensure smooth operation and prevent errors during the machine-tending process. By designing and implementing this system, I was able to automate a traditionally manual operation, improving production efficiency and consistency while providing valuable hands-on experience with advanced robotics and industrial communication protocols.',
		url: ['https://youtube.com/embed/o1lj1Di2mhU'],
			pictures: [],
		paused: false
	},
	{
		title: 'Small Hob Robot',
		technologies: ['Universal Robots', 'PLC', 'Mechanical Design', 'Robotics', 'System Design'],
		role: 'Team Project | Lead Design Enigineer & Project Manager',
		description: 'The Small Hob machine tending project involved programming and integrating the UR-10e robot to automate production on a Mitsubishi GE15A CNC Gear Hobbing Machine. Instead of using Ethernet/IP for communication, I developed a custom GUI in Python and leveraged a Raspberry Pi to act as the intermediary for communication between the robot and the main PLC via Modbus TCP. The PLC monitored machine states by physically tapping into the button wiring and stack light signals, enabling precise tracking of operational conditions. This setup required creative problem-solving to retrofit the system and establish reliable communication pathways. By combining custom software development with hardware integration, I was able to automate the machine-tending process, improving production consistency and efficiency while gaining valuable experience in robotics, programming, and industrial communication.',
		url: ['https://www.youtube.com/embed/YCnl5yQDZ7Q?si=Hj2DiU451kpzMUy0'],
		pictures: [],
		paused: false
	},
	{
		title: 'Lightning Cell',
		technologies: ['FANUC', 'PLC', 'Mechanical Design', 'Robotics', 'System Design'],
		role: 'Team Project | Lead Design Enigineer & Project Manager',
		description: 'The "Lightning Cell" project involved designing and implementing a FANUC robot to automate machine tending for two Haas VF-1 CNC machines in a high-mix, low-volume production environment. The system featured an electromagnetic end-of-arm tool for the robot, allowing it to handle a variety of parts with precision and adaptability. Magnetic workholding was used within the CNC machines, streamlining the setup process and ensuring secure and efficient part positioning during machining. This project required careful coordination between the robot, CNC machines, and production workflows to accommodate the variability inherent in high-mix production. By integrating these technologies, the Lightning Cell significantly reduced setup times, increased throughput, and provided a scalable solution for automating complex manufacturing operations. This project also strengthened my skills in robotics, workholding design, and optimizing systems for dynamic production environments.',
		url: ['https://www.youtube.com/embed/QLsm-LVmHag?si=Ls_fBn8K_aakHQSV'],
		pictures: [],
		paused: false
	}
];

export default projects;
