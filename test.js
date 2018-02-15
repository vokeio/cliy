#!/usr/bin/env node

const Cliy = require('./index');
const Package = require('./package');

// node test -12 test la

(async function() {

	const program = new Cliy();

	await program.setup({
		name: 'test',
		// order: '', // TODO added feature
		version: Package.version,
		operations: [
			{
				key: '1',
				name: 'one',
				method: async function (argument, values) {
					console.log(`one: ${argument}`);
					console.log(`one: ${JSON.stringify(values)}`);
					return 'one';
				},
				operations: [
					{
						key: '2',
						name: 'two',
						method: async function (argument, values) {
							console.log(`two: ${argument}`);
							console.log(`two: ${JSON.stringify(values)}`);
							return 'two'
						}
					},
					{
						key: '3',
						name: 'three',
						method: async function (argument, values) {
							console.log(`three: ${argument}`);
							console.log(`three: ${JSON.stringify(values)}`);
							return 'three'
						}
					}
				]
			}
		]
	});

	await program.run(process.argv);

}()).catch(function (error) {
	console.log(error);
});
