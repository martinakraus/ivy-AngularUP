import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatTabsModule,
        MatButtonModule,
    ],
})
export class UiModule {}
