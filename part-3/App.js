const App = () => (
	<div>
		<Person name="Clay" age={29} hobbies={["Waterpolo", "Running"]} />
		<Person name="WinnieTheFrenchBulldog" age={4} hobbies={["Park time", "Bones", "Tanning"]} />
		<Person name="Madd" age={27} hobbies={["Work", "Walking", "Sleeping"]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById("root"));

