import { NgModule } from '@angular/core';

import { MatCardModule, MatGridListModule } from '@angular/material';

const MaterialComponentes =[
    MatGridListModule,
    MatCardModule
]
@NgModule({
    imports: [MaterialComponentes],
    exports: [MaterialComponentes]
})
export class MaterialModule{}