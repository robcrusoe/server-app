import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	ContentChild,
	DoCheck,
	ElementRef,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	// encapsulation: ViewEncapsulation.Emulated // Default
	encapsulation: ViewEncapsulation.None // Removes ViewEncapsulation | Styles put in for this Component will be applicable to All Components *
})
export class ServerElementComponent implements
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

	@Input('serverEl') element: { type: string, name: string, content: string };
	@Input('name') name: string;
	@ContentChild('contentParagraph', { static: true }) para: ElementRef;

	constructor() {
		console.log("constructor called!");
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("ngOnChanges called!", changes);
	}

	ngOnInit(): void {
		console.log("ngOnInit called!");
		console.log("** para: ", this.para.nativeElement.textContent);
	}

	ngDoCheck() {
		console.log("ngDoCheck() called!");
	}

	ngAfterContentInit() {
		console.log("ngAfterContentInit called!");
		console.log("** para: ", this.para.nativeElement.textContent);
	}

	ngAfterContentChecked() {
		console.log("ngAfterContentChecked called!");
	}

	ngAfterViewInit() {
		console.log("ngAfterViewInit called!");
	}

	ngAfterViewChecked() {
		console.log("ngAfterViewChecked called!");
	}

	ngOnDestroy() {
		console.log("ngOnDestroy called!");
	}

}
