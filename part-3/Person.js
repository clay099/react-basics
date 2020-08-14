const Person = (props) => {
	console.log(props.name.length);
	return (
		<div>
			<h2>New Person</h2>
			<p>Learn some information about this person</p>
			<p>Name: {props.name.length < 8 ? props.name : props.name.slice(0, 7) + "..."}</p>
			<p>Age: {props.age}</p>
			<h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
			<h3>Hobbies:</h3>
			<ul>
				{props.hobbies.map((h) => (
					<li>{h}</li>
				))}
			</ul>
		</div>
	);
};
