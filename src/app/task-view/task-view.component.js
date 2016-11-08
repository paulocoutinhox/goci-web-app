"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var TaskService_1 = require("../services/TaskService");
var JobService_1 = require("../services/JobService");
var Utils_1 = require("../models/Utils");
var GlobalService_1 = require("../services/GlobalService");
var JobOutputGroup_1 = require("../models/JobOutputGroup");
var TaskViewComponent = (function () {
    function TaskViewComponent(globalService, taskService, jobService, router, route) {
        this.globalService = globalService;
        this.taskService = taskService;
        this.jobService = jobService;
        this.router = router;
        this.route = route;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['project'];
            _this.taskId = params['task'];
        });
        this.load();
        var lastJobTimer = Rx_1.Observable.timer(1000, 1000);
        lastJobTimer.subscribe(function () { return _this.getLastJobData(); });
    };
    TaskViewComponent.prototype.load = function () {
        var _this = this;
        this.hideAll();
        if (this.globalService.loadingDelayTime > 0) {
            this.showLoading = true;
        }
        Rx_1.Observable.empty().delay(this.globalService.loadingDelayTime).subscribe(null, null, function () {
            _this.getData();
        });
    };
    TaskViewComponent.prototype.getData = function () {
        var _this = this;
        this.taskService.view(this.projectId, this.taskId)
            .then(function (wr) {
            if (wr.success) {
                _this.project = wr.data['project'];
                _this.task = wr.data['task'];
                _this.hideAll();
                if (_this.project != null && _this.task != null) {
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
    TaskViewComponent.prototype.back = function () {
        this.router.navigate(['/project/view', this.projectId]);
    };
    TaskViewComponent.prototype.hideAll = function () {
        this.showData = false;
        this.showEmptyData = false;
        this.showLoading = false;
        this.showError = false;
        this.showTaskOptionsForm = false;
    };
    TaskViewComponent.prototype.hideAllForLastJob = function () {
        this.showLastJobData = false;
        this.showLastJobEmptyData = false;
        this.showLastJobLoading = false;
        this.showLastJobError = false;
    };
    TaskViewComponent.prototype.onError = function () {
        this.hideAll();
        this.showError = true;
        this.project = null;
    };
    TaskViewComponent.prototype.onErrorForLastJob = function () {
        this.hideAllForLastJob();
        this.showLastJobError = true;
        this.lastJob = null;
    };
    TaskViewComponent.prototype.view = function (projectId, taskId) {
        this.router.navigate(['/task/view', projectId, taskId]);
    };
    TaskViewComponent.prototype.showTaskOptions = function (projectId, projectName, taskId, taskName, taskDescription) {
        var _this = this;
        this.showTaskOptionsForm = false;
        this.runProjectId = projectId;
        this.runProjectName = projectName;
        this.runTaskId = taskId;
        this.runTaskName = taskName;
        this.runTaskDescription = taskDescription;
        this.runTaskOptions = null;
        this.taskService.options(projectId, taskId)
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
    TaskViewComponent.prototype.taskRunWithSuccess = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    TaskViewComponent.prototype.taskRunWithError = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    TaskViewComponent.prototype.taskRunCancel = function ($event) {
        this.hideAll();
        this.showData = true;
    };
    TaskViewComponent.prototype.getLastJobData = function () {
        var _this = this;
        this.jobService.last(this.projectId, this.taskId)
            .then(function (wr) {
            var job = wr.data['job'];
            if (job) {
                _this.lastJob = job;
                if (_this.lastJob.id != _this.lastJobId) {
                    _this.lastJobId = _this.lastJob.id;
                    _this.jobOutputGroupList = [];
                }
                var newOutputGroupList = _this.lastJob.outputGroup;
                var activeTabId = "console";
                if (newOutputGroupList) {
                    for (var newOutputGroupKey in newOutputGroupList) {
                        var newOutputGroup = newOutputGroupList[newOutputGroupKey];
                        var hasOutputGroup = false;
                        for (var outputGroupKey in _this.jobOutputGroupList) {
                            var outputGroup = _this.jobOutputGroupList[outputGroupKey];
                            if (outputGroup.name == newOutputGroup.name) {
                                hasOutputGroup = true;
                                if (outputGroup.updatedAt != newOutputGroup.updatedAt) {
                                    outputGroup.updatedAt = newOutputGroup.updatedAt;
                                    outputGroup.output = newOutputGroup.output;
                                }
                            }
                        }
                        if (!hasOutputGroup) {
                            var jobOutputGroup = new JobOutputGroup_1.JobOutputGroup();
                            jobOutputGroup.id = Utils_1.Utils.slugify(newOutputGroup.name);
                            jobOutputGroup.name = newOutputGroup.name;
                            jobOutputGroup.output = newOutputGroup.output;
                            jobOutputGroup.updatedAt = newOutputGroup.updatedAt;
                            _this.jobOutputGroupList.push(jobOutputGroup);
                        }
                    }
                }
                for (var outputGroupKey in _this.jobOutputGroupList) {
                    var outputGroup = _this.jobOutputGroupList[outputGroupKey];
                    if (outputGroup.id == activeTabId) {
                        outputGroup.active = true;
                    }
                    else {
                        outputGroup.active = false;
                    }
                }
                _this.hideAllForLastJob();
                if (_this.lastJob != null) {
                    _this.showLastJobData = true;
                }
                else {
                    _this.showLastJobEmptyData = true;
                }
            }
            else {
                _this.onErrorForLastJob();
            }
        })
            .catch(function () {
            _this.onErrorForLastJob();
        });
    };
    TaskViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'task-view',
                    templateUrl: 'task-view.component.html'
                },] },
    ];
    TaskViewComponent.ctorParameters = [
        { type: GlobalService_1.GlobalService, },
        { type: TaskService_1.TaskService, },
        { type: JobService_1.JobService, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ];
    return TaskViewComponent;
}());
exports.TaskViewComponent = TaskViewComponent;
//# sourceMappingURL=task-view.component.js.map