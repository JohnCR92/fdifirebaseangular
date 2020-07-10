import { RouterModule, Routes, Params } from '@angular/router';
import { PersonaFormComponent } from './form/persona-form.component';
import { PersonaFormeditComponent } from './formedit/persona-formedit.component';
import { DatatablesCaseComponent } from './form/datatables-case.component';
import { PersonaListComponent } from './list/persona-list.component';

export const routes: Routes = [
    {
        path: '',
        component: PersonaListComponent
    },

    {
        path: 'form',
        component: PersonaFormComponent
    },

    {
        path: 'formedit/:prsId',
        component: PersonaFormeditComponent
    }

]

export const routing = RouterModule.forChild(routes);