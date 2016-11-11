import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppMainComponent } from "../components/app-main/app-main.component";
import { GlobalService } from "../services/GlobalService";
import { JobService } from "../services/JobService";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { AppFooterComponent } from "../components/app-footer/app-footer.component";
import { JobListComponent } from "../components/job-list/job-list.component";
import { ProjectListComponent } from "../components/project-list/project-list.component";
import { ProjectViewComponent } from "../components/project-view/project-view.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TaskService } from "../services/TaskService";
import { ProjectService } from "../services/ProjectService";
import { TaskViewComponent } from "../components/task-view/task-view.component";
import { TimestampFormat } from "../components/pipes/timestampFormat";
import { TaskOptionsComponent } from "../components/task-options/task-options.component";
import { ProjectTaskItemComponent } from "../components/project-task-item/project-task-item.component";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { AppRoutingModule } from "./app-routing.module";

toastr.options = {timeOut: 5000, progressBar: true, hideDuration: 300, positionClass: 'toast-top-center'};

@NgModule({
	declarations: [
		AppMainComponent,
		HomeComponent,
		AppHeaderComponent,
		AppFooterComponent,
		JobListComponent,
		ProjectListComponent,
		ProjectViewComponent,
		NotFoundComponent,
		TaskViewComponent,
		TaskOptionsComponent,
		ProjectTaskItemComponent,
		TimestampFormat
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,
		ChartsModule,
		AppRoutingModule
	],
	bootstrap: [
		AppMainComponent
	],
	providers: [
		GlobalService,
		JobService,
		TaskService,
		ProjectService
	]
})

export class AppModule {
}
