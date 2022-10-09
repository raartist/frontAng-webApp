import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./post-list.component.html",
    selector: "post-list-component",
    styleUrls: ["./post-list.component.css"]
})

export class PostListComponent {
    @Input() postList :any[] = [];
}