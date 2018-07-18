import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { AddComponent } from "./add/add.component";

const appRoutes: Routes = [
    { path: '', component: TableComponent },
    { path: 'add', component: AddComponent },
    { path: '**', component: TableComponent },
    { path: 'home', component: TableComponent }
];

export const routing = RouterModule.forRoot(appRoutes);