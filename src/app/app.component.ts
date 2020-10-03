import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [
		{
			type: 'server',
			name: 'Test Server',
			content: 'Just a Test'
		}
	];

	onElementCreated(elementCreated: { type: string, name: string, content: string }): void {
		this.serverElements.push(elementCreated);
	}
}
