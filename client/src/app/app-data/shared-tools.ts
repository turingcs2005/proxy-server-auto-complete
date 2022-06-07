export class SharedTools {
	constructor(
		public name: string,
		public location: string,
		public description: string
	) {	}
}

export const sharedTools = [
	new SharedTools('API Client', 'server/docs/apicalls.http', 'use Visual Studio Code API Client extension for quick API tests'),
	new SharedTools('form-controls', 'client/src/app/modules/shared/form-controls', 'wrapper classes for date, input, \
	multi-choices, single-choice, radio button group'),
	new SharedTools('default value pipe', 'client/src/app/modules/shared/default-value.pipe.ts', 'populate default value N/A for a \
	null-valued form control'),
	new SharedTools('snack-bar', 'client/src/app/modules/shared/misce/snack-bar', 'pop-up bar at the bottom to display notification \
	for a few seconds'),
	new SharedTools('spinner', 'client/src/app/modules/shared/misce/spinner', 'a spinner displayed when app is retrieving data'),
	new SharedTools('tree', 'client/src/app/modules/shared/misce/tree', 'a visual tree for data structure documentation'),
	new SharedTools('invalid controls', 'client/src/app/services/form-tools', 'log all invalid form controls in browser console'),
	new SharedTools('tree traversing $ -> #', 'client/src/app/services/form-tools', 'recursively convert all $ string to number in an object'),
];