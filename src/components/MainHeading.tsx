import TypewriterComponent from "typewriter-effect"

const MainHeading = () => {
	return (
		<table className={`text-2xl sm:text-4xl md:text-6xl xl:text-7xl`} >
			<tbody>
				<tr>
					<td>
						<span className="text-[#E1306C]">{`< `}</span>
					</td>
					<td>
						<TypewriterComponent
							options={{
								strings: ['Soufiane Elkhamlichi', 'Full-stack Developer'],
								autoStart: true,
								loop: true,
								wrapperClassName: `inline-block`,
								cursor: '_',
								delay: 150,
								deleteSpeed: 50,
							}}
						/>
					</td>
					<td>
						<span className="text-[#E1306C]">{` />`}</span>
					</td>
				</tr>

			</tbody>
		</table>
	)
}

export default MainHeading
