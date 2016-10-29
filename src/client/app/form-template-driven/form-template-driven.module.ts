import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateDrivenComponent }   from './form-template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [],
    declarations: [FormTemplateDrivenComponent],
    exports: [FormTemplateDrivenComponent],
})
export class FormTemplateDrivenModule { }
