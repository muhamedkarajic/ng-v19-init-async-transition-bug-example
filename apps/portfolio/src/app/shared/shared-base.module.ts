import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const importsAndExportsInternal: NgModule['exports'] = [
    CommonModule,
    RouterModule,
    NgOptimizedImage
];

@NgModule({
    imports: importsAndExportsInternal,
    exports: importsAndExportsInternal
})
export class SharedBaseModule { }
