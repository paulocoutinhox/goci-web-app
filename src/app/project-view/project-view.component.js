"use strict";
var core_1 = require("@angular/core");
var ProjectService_1 = require("../services/ProjectService");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var TaskService_1 = require("../services/TaskService");
var GlobalService_1 = require("../services/GlobalService");
var ProjectViewComponent = (function () {
    function ProjectViewComponent(globalService, projectService, taskService, router, route) {
        this.globalService = globalService;
        this.projectService = projectService;
        this.taskService = taskService;
        this.router = router;
        this.route = route;
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['project'];
        });
        this.globalService.jobListEmitter.subscribe(function (jobList) {
            _this.jobList = jobList;
        });
        this.load();
    };
    ProjectViewComponent.prototype.load = function () {
        var _this = this;
        this.hideAll();
        if (this.globalService.loadingDelayTime > 0) {
            this.showLoading = true;
        }
        Rx_1.Observable.empty().delay(this.globalService.loadingDelayTime).subscribe(null, null, function () {
            _this.getData();
        });
    };
    ProjectViewComponent.prototype.getData = function () {
        var _this = this;
        this.projectService.view(this.projectId)
            .then(function (wr) {
            var project = wr.data['project'];
            if (project) {
                _this.project = project;
                _this.hideAll();
                if (_this.project != null) {
                    _this.showData = true;
                }
                else {
                    _this.showEmptyData = true;
                }
            }
            else {
                _this.onError();
            }
        })
            .catch(function () {
            _this.onError();
        });
    };
    ProjectViewComponent.prototype.back = function () {
        this.router.navigate(['/project/list']);
    };
    ProjectViewComponent.prototype.hideAll = function () {
        this.showData = false;
        this.showEmptyData = false;
        this.showLoading = false;
        this.showError = false;
        this.showTaskOptionsForm = false;
    };
    ProjectViewComponent.prototype.onError = function () {
        this.hideAll();
        this.showError = true;
        this.project = null;
    };
    ProjectViewComponent.prototype.showTaskOptions = function (task) {
        var _this = this;
        this.showTaskOptionsForm = false;
        this.runProjectId = this.project.id;
        this.runProjectName = this.project.name;
        this.runTaskId = task.id;
        this.runTaskName = task.name;
        this.runTaskDescription = task.description;
        this.runTaskOptions = null;
        this.taskService.options(this.project.id, task.id)
            .then(function (wr) {
            if (wr.success != null) {
                _this.runTaskOptions = wr.data['options'];
                _this.showTaskOptionsForm = true;
            }
            else {
                toastr.error('Error when get task options, try again');
            }
        })
            .catch(function (error) {
            toastr.error(error);
        });
    };
    ProjectViewComponent.prototype.taskRunWithSuccess = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    ProjectViewComponent.prototype.taskRunWithError = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    ProjectViewComponent.prototype.taskRunCancel = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    ProjectViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'project-view',
                    templateUrl: 'project-view.component.html'
                },] },
    ];
    ProjectViewComponent.ctorParameters = [
        { type: GlobalService_1.GlobalService, },
        { type: ProjectService_1.ProjectService, },
        { type: TaskService_1.TaskService, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ];
    return ProjectViewComponent;
}());
exports.ProjectViewComponent = ProjectViewComponent;
//# sourceMappingURL=project-view.component.js.map