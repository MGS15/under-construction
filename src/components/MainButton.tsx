const MainButton = ({text}: {text: string}) => {
	return (
		<button className={`rounded-none bg-slate-300 text-gray-900`} >
			{text}
		</button>
	);
}

export default MainButton;