const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="clayton" />
		<Tweet
			username="WinThePig"
			name="Winnie"
			date={new Date().toDateString()}
			message="Frenchies are great"
		/>
		<Tweet
			username="MadRose"
			name="Madd"
			date={new Date().toDateString()}
			message="Frenchies the best"
		/>
		<Tweet
			username="ClayClay"
			name="Clay"
			date={new Date().toDateString()}
			message="Winnie is Cool"
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById("root"));
