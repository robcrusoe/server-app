import { ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

	@ViewChild('elementName', { static: true }) elementName: ElementRef;
	@ViewChild('elementContent', { static: true }) elementContent: ElementRef;
	@Output('elCreated') elementCreated = new EventEmitter<{ type: string, name: string, content: string }>();

	constructor() { }

	onServerAdded(serverData: { serverName: string, serverContent: string }): void {
		this.elementCreated.emit({
			type: 'server',
			name: this.elementName.nativeElement.value,
			content: this.elementContent.nativeElement.value
		});
	}

	onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }): void {
		this.elementCreated.emit({
			type: 'blueprint',
			name: this.elementName.nativeElement.value,
			content: this.elementContent.nativeElement.value
		});
	}

}
