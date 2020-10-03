import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

	elementName: string = '';
	elementContent: string = '';
	@Output('elCreated') elementCreated = new EventEmitter<{ type: string, name: string, content: string }>();

	constructor() { }

	onServerAdded(serverData: { serverName: string, serverContent: string }): void {
		this.elementCreated.emit({
			type: 'server',
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }): void {
		this.elementCreated.emit({
			type: 'blueprint',
			name: blueprintData.blueprintName,
			content: blueprintData.blueprintName
		});
	}

}
