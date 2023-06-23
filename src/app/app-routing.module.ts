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

    {
        path: 'technologies',
        loadChildren: () =>
            import('../app/modules/technologies/technologies.module').then(
                (module) => module.TechnologiesModule,
            ),
    },

    {
        path: 'core-skills',
        loadChildren: () =>
            import('../app/modules/core-skills/core-skills.module').then(
                (module) => module.CoreSkillsModule,
            ),
    },

    {
        path: 'soft-skills',
        loadChildren: () =>
            import('../app/modules/soft-skills/soft-skills.module').then(
                (module) => module.SoftSkillsModule,
            ),
    },

    {
        path: 'educational-background',
        loadChildren: () =>
            import(
                '../app/modules/educational-background/educational-background.module'
            ).then((module) => module.EducationalBackgroundModule),
    },

    {
        path: 'achievements-and-recognition',
        loadChildren: () =>
            import(
                '../app/modules/achievements-and-recognitions/achievements-and-recognitions.module'
            ).then((module) => module.AchievementsAndRecognitionsModule),
    },

    {
        path: 'training-and-seminars',
        loadChildren: () =>
            import(
                '../app/modules/training-and-seminars/training-and-seminars.module'
            ).then((module) => module.TrainingAndSeminarsModule),
    },

    {
        path: 'character-references',
        loadChildren: () =>
            import(
                '../app/modules/character-refereces/character-refereces.module'
            ).then((module) => module.CharacterReferecesModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
