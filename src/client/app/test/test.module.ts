import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent }   from './test.component';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [TestComponent],
    exports: [TestComponent],
})
export class TestModule { }
