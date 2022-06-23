export class SharedTools {
	constructor(
		public index: number,
		public domain: string,
		public name: string,
		public location: string,
		public description: string
	) {	}
}

export const sharedTools = [
	new SharedTools(1, 'back end', 'API Client', 'server/docs/apicalls.http', 
	'use Visual Studio Code API Client extension for quick API tests, saving trips to Postman'),
	new SharedTools(2, 'front end', 'form-controls', 'client/src/app/modules/shared/form-controls',	
	'wrapper classes for date, input, multi-choices, single-choice, radio button group. Saving boilerplate code.'),
	new SharedTools(3, 'front end', 'default value pipe', 'client/src/app/modules/shared/default-value.pipe.ts', 'populate default value N/A for a \
	null-valued form control'),
	new SharedTools(4, 'front end', 'snack-bar', 'client/src/app/modules/shared/misce/snack-bar', 'pop-up bar at the bottom to display notification \
	for a few seconds'),
	new SharedTools(5, 'front end', 'spinner', 'client/src/app/modules/shared/misce/spinner', 'a spinner displayed when app is retrieving data'),
	new SharedTools(6, 'front end', 'tree', 'client/src/app/modules/shared/misce/tree', 'a visual tree for data structure documentation'),
	new SharedTools(7, 'front end', 'invalid controls', 'client/src/app/services/form-tools', 'log all invalid form controls in browser console'),
	new SharedTools(8, 'front end', 'tree traversing $ -> #', 'client/src/app/services/form-tools', 'recursively convert all $ string to number in an object'),
	new SharedTools(9, 'front end', 'color scale', '', 'display a color scale'),
];