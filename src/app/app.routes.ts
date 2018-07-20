import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";

const appRoutes: Routes = [
    { path: '', component: TableComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '**', component: TableComponent },
    { path: 'home', component: TableComponent }
];

export const routing = RouterModule.forRoot(appRoutes);