import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../app/modules/home/home.module').then(
                (module) => module.HomeModule,
            ),
    },

    {
        path: 'latest-projects',
        loadChildren: () =>
            import(
                '../app/modules/latest-projects/latest-projects.module'
            ).then((module) => module.LatestProjectsModule),
    },

    {
        path: 'all-projects',
        loadChildren: () =>
            import('../app/modules/all-projects/all-projects.module').then(
                (module) => module.AllProjectsModule,
            ),
    },

    {
        path: 'free-lance-and-pro-bono-projects',
        loadChildren: () =>
            import(
                '../app/modules/freelance-projects/freelance-projects.module'
            ).then((module) => module.FreelanceProjectsModule),
    },

    {
        path: 'frame-works-and-libraries',
        loadChildren: () =>
            import('../app/modules/frameworks/frameworks.module').then(
                (module) => module.FrameworksModule,
            ),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
