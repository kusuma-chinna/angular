import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';
import { CryptoComponent } from './crypto/crypto.component';
import { BlogComponent } from './blog/blog.component';
import { JobsComponent } from "./jobs/jobs.component";
import { SampleComponentComponent } from './default/sample-component/sample-component.component';
import { CreateUserFormComponent } from '../../create-user-form/create-user-form.component'; // Adjust the path
// import { CustomtablesComponent } from '../../customtables/customtables.component'; 
// import { DefaultComponent } from '../../default/default.component'; // Adjust the path


 
const routes: Routes = [
    // {
    //     path: 'create-user-form',
    //     component: CreateUserFormComponent
    // },
    {
        path: 'sampleComponent',
        component: SampleComponentComponent
    },
    // {
    //     path: 'default', // Define a path for the custom tables
    //     component: DefaultComponent // Associate it with the CustomTablesComponent
    // },
    // {
    //     path: 'saas',
    //     component: SaasComponent
    // },
    // {
    //     path: 'crypto',
    //     component: CryptoComponent
    // },
    // {
    //     path: 'blog',
    //     component: BlogComponent
    // },
    // {
    //     path:"jobs",
    //     component:JobsComponent
    // }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
