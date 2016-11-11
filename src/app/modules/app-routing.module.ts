import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { JobListComponent } from "../components/job-list/job-list.component";
import { ProjectListComponent } from "../components/project-list/project-list.component";
import { ProjectViewComponent } from "../components/project-view/project-view.component";
import { TaskViewComponent } from "../components/task-view/task-view.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'job/list', component: JobListComponent
	},
	{
		path: 'project/list', component: ProjectListComponent
	},
	{
		path: 'project/view/:project', component: ProjectViewComponent
	},
	{
		path: 'task/view/:project/:task', component: TaskViewComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}