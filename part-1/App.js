const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="clayton" />
	</div>
);

ReactDOM.render(<App />, document.getElementById("root"));
