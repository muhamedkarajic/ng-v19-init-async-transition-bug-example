import { NgModule } from "@angular/core";
import { SharedBaseModule } from './shared-base.module';

const importsAndExports: NgModule['exports'] = [
    SharedBaseModule,
];

@NgModule({
    imports: importsAndExports,
    exports: importsAndExports
})
export class SharedModule { }
