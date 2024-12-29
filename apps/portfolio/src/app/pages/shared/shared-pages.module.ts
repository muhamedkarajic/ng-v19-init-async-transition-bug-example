import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
const importsAndExports: NgModule['exports'] = [
    SharedModule,
];

@NgModule({
    imports: importsAndExports,
    exports: importsAndExports
})
export class SharedPagesModule { }
