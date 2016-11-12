import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../../services/ProjectService";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { TaskService } from "../../services/TaskService";
import { GlobalService } from "../../services/GlobalService";
import { Project } from "../../models/Project";
import { Job } from "../../models/Job";
import { ProjectTask } from "../../models/ProjectTask";
import { WebResponse } from "../../models/WebResponse";
import { Utils } from "../../models/Utils";
import { ProgressService } from "../../services/ProgressService";

@Component({
	selector: 'project-view',
	templateUrl: 'project-view.component.html'
})

export class ProjectViewComponent implements OnInit {

	projectId: string;
	project: Project;

	showData: boolean;
	showEmptyData: boolean;
	showError: boolean;

	jobList: Job[];

	runTaskOptions: any;
	runProjectId: string;
	runProjectName: string;
	runTaskId: string;
	runTaskName: string;
	runTaskDescription: string;
	showTaskOptionsForm: boolean;

	constructor(private globalService: GlobalService, private projectService: ProjectService, private taskService: TaskService, private progressService: ProgressService, private router: Router, private route: ActivatedRoute) {

	}

	ngOnInit(): any {
		this.route.params.subscribe(params => {
			this.projectId = params['project'];
		});

		this.globalService.jobListEmitter.subscribe((jobList: Job[]) => {
			this.jobList = jobList;
		});

		this.load();
	}

	load() {
		this.hideAll();
		this.progressService.setProgress(0.5);

		Observable.empty().delay(this.globalService.loadingDelayTime).subscribe(null, null, () => {
			this.getData();
		});
	}

	getData() {
		this.projectService.view(this.projectId)
			.then((wr: WebResponse) => {
				var project: Project = wr.data['project'];

				if (project) {
					this.project = project;

					this.hideAll();

					if (this.project != null) {
						this.showData = true;
					} else {
						this.showEmptyData = true;
					}
				} else {
					this.onError();
				}

				this.progressService.done();
			})
			.catch(() => {
				this.onError();
				this.progressService.done();
			});
	}

	back() {
		this.router.navigate(['/project/list']);
	}

	hideAll() {
		this.showData = false;
		this.showEmptyData = false;
		this.showError = false;
		this.showTaskOptionsForm = false;
	}

	onError() {
		this.hideAll();
		this.showError = true;
		this.project = null;
	}

	showTaskOptions(task: ProjectTask) {
		this.showTaskOptionsForm = false;
		this.runProjectId = this.project.id;
		this.runProjectName = this.project.name;
		this.runTaskId = task.id;
		this.runTaskName = task.name;
		this.runTaskDescription = task.description;
		this.runTaskOptions = null;

		this.progressService.setProgress(0.5);

		this.taskService.options(this.project.id, task.id)
			.then((wr: WebResponse) => {
				if (wr.success == true) {
					this.runTaskOptions = wr.data['options'];
					this.showTaskOptionsForm = true;
				} else {
					toastr.error('Error when get task options, try again');
				}

				this.progressService.done();
			})
			.catch(error => {
				if (Utils.isEmpty(error)) {
					toastr.error('Error when get task options, try again');
				} else {
					toastr.error(error);
				}

				this.progressService.done();
			});
	}

	taskRunWithSuccess($event: any) {
		this.hideAll();
		this.showData = true;
	}

	taskRunWithError($event: any) {
		this.hideAll();
		this.showData = true;
	}

	taskRunCancel($event: any) {
		this.hideAll();
		this.showData = true;
	}

}
