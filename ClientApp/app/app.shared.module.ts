import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
    declarations: [
        AppComponent,
		OverviewComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: OverviewComponent },
			{ path: '**', redirectTo: 'overview' }
        ])
    ]
})
export class AppModuleShared {
}
