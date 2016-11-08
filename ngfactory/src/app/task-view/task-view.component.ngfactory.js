"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/task-view/task-view.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('../../../../src/app/services/TaskService');
var import10 = require('../../../../src/app/services/JobService');
var import11 = require('@angular/router/src/router');
var import12 = require('@angular/router/src/router_state');
var import13 = require('@angular/core/src/metadata/view');
var import14 = require('@angular/core/src/linker/component_factory');
var import15 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import16 = require('../../../../src/app/pipes/timestampFormat');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('@angular/common/src/directives/ng_if');
var import19 = require('../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import20 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import21 = require('@angular/common/src/directives/ng_for');
var import22 = require('../../../node_modules/@angular/common/src/directives/ng_switch.ngfactory');
var import23 = require('@angular/common/src/directives/ng_switch');
var import24 = require('@angular/core/src/security');
var import25 = require('../task-options/task-options.component.ngfactory');
var import26 = require('../../../../src/app/task-options/task-options.component');
var Wrapper_TaskViewComponent = (function () {
    function Wrapper_TaskViewComponent(p0, p1, p2, p3, p4) {
        this.changed = false;
        this.context = new import0.TaskViewComponent(p0, p1, p2, p3, p4);
    }
    Wrapper_TaskViewComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TaskViewComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_TaskViewComponent;
}());
exports.Wrapper_TaskViewComponent = Wrapper_TaskViewComponent;
var renderType_TaskViewComponent_Host = null;
var _View_TaskViewComponent_Host0 = (function (_super) {
    __extends(_View_TaskViewComponent_Host0, _super);
    function _View_TaskViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent_Host0, renderType_TaskViewComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'task-view', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TaskViewComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TaskViewComponent_0_4 = new Wrapper_TaskViewComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.TaskService), this.parentInjector.get(import10.JobService), this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute));
        this._appEl_0.initComponent(this._TaskViewComponent_0_4.context, [], compView_0);
        compView_0.create(this._TaskViewComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TaskViewComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TaskViewComponent) && (0 === requestNodeIndex))) {
            return this._TaskViewComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TaskViewComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TaskViewComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent_Host0;
}(import1.AppView));
function viewFactory_TaskViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskViewComponent_Host === null)) {
        (renderType_TaskViewComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_TaskViewComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.TaskViewComponentNgFactory = new import14.ComponentFactory('task-view', viewFactory_TaskViewComponent_Host0, import0.TaskViewComponent);
var styles_TaskViewComponent = [];
var renderType_TaskViewComponent = null;
var _View_TaskViewComponent0 = (function (_super) {
    __extends(_View_TaskViewComponent0, _super);
    function _View_TaskViewComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent0, renderType_TaskViewComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_68 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'task-view'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'panel panel-default', 'id', 'options-container'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'h3', new import4.InlineArray2(2, 'class', 'options-container-title'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray4(4, 'class', 'btn btn-success', 'type', 'button'), null);
        this._text_11 = this.renderer.createText(this._el_10, 'Run', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Refresh', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'Back', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_19 = this.renderer.createText(this._el_3, '\n	', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n	', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_22 = new import3.AppElement(22, 0, this, this._anchor_22);
        this._TemplateRef_22_5 = new import17.TemplateRef_(this._appEl_22, viewFactory_TaskViewComponent1);
        this._NgIf_22_6 = new import15.Wrapper_NgIf(this._appEl_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_24 = new import3.AppElement(24, 0, this, this._anchor_24);
        this._TemplateRef_24_5 = new import17.TemplateRef_(this._appEl_24, viewFactory_TaskViewComponent5);
        this._NgIf_24_6 = new import15.Wrapper_NgIf(this._appEl_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_26 = new import3.AppElement(26, 0, this, this._anchor_26);
        this._TemplateRef_26_5 = new import17.TemplateRef_(this._appEl_26, viewFactory_TaskViewComponent6);
        this._NgIf_26_6 = new import15.Wrapper_NgIf(this._appEl_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_28 = new import3.AppElement(28, 0, this, this._anchor_28);
        this._TemplateRef_28_5 = new import17.TemplateRef_(this._appEl_28, viewFactory_TaskViewComponent7);
        this._NgIf_28_6 = new import15.Wrapper_NgIf(this._appEl_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_30 = new import3.AppElement(30, 0, this, this._anchor_30);
        this._TemplateRef_30_5 = new import17.TemplateRef_(this._appEl_30, viewFactory_TaskViewComponent8);
        this._NgIf_30_6 = new import15.Wrapper_NgIf(this._appEl_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_32 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_32 = new import3.AppElement(32, 0, this, this._anchor_32);
        this._TemplateRef_32_5 = new import17.TemplateRef_(this._appEl_32, viewFactory_TaskViewComponent21);
        this._NgIf_32_6 = new import15.Wrapper_NgIf(this._appEl_32.vcRef, this._TemplateRef_32_5);
        this._text_33 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_34 = new import3.AppElement(34, 0, this, this._anchor_34);
        this._TemplateRef_34_5 = new import17.TemplateRef_(this._appEl_34, viewFactory_TaskViewComponent22);
        this._NgIf_34_6 = new import15.Wrapper_NgIf(this._appEl_34.vcRef, this._TemplateRef_34_5);
        this._text_35 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_36 = new import3.AppElement(36, 0, this, this._anchor_36);
        this._TemplateRef_36_5 = new import17.TemplateRef_(this._appEl_36, viewFactory_TaskViewComponent23);
        this._NgIf_36_6 = new import15.Wrapper_NgIf(this._appEl_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_38 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_38 = new import3.AppElement(38, 0, this, this._anchor_38);
        this._TemplateRef_38_5 = new import17.TemplateRef_(this._appEl_38, viewFactory_TaskViewComponent24);
        this._NgIf_38_6 = new import15.Wrapper_NgIf(this._appEl_38.vcRef, this._TemplateRef_38_5);
        this._text_39 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_16, 'click', this.eventHandler(this._handle_click_16_0.bind(this)));
        this._pipe_timestampFormat_0 = new import16.TimestampFormat();
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._anchor_32,
            this._text_33,
            this._anchor_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._anchor_38,
            this._text_39,
            this._text_40
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_TaskViewComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import18.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import17.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import18.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import17.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import18.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import17.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import18.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import17.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import18.NgIf) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        if (((token === import17.TemplateRef) && (32 === requestNodeIndex))) {
            return this._TemplateRef_32_5;
        }
        if (((token === import18.NgIf) && (32 === requestNodeIndex))) {
            return this._NgIf_32_6.context;
        }
        if (((token === import17.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import18.NgIf) && (34 === requestNodeIndex))) {
            return this._NgIf_34_6.context;
        }
        if (((token === import17.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import18.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import17.TemplateRef) && (38 === requestNodeIndex))) {
            return this._TemplateRef_38_5;
        }
        if (((token === import18.NgIf) && (38 === requestNodeIndex))) {
            return this._NgIf_38_6.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_22_0_0 = this.context.showData;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.detectChangesInInputProps(this, this._anchor_22, throwOnChange);
        var currVal_24_0_0 = this.context.showEmptyData;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.detectChangesInInputProps(this, this._anchor_24, throwOnChange);
        var currVal_26_0_0 = this.context.showError;
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.detectChangesInInputProps(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = this.context.showLoading;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.detectChangesInInputProps(this, this._anchor_28, throwOnChange);
        var currVal_30_0_0 = this.context.showLastJobData;
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.detectChangesInInputProps(this, this._anchor_30, throwOnChange);
        var currVal_32_0_0 = this.context.showLastJobEmptyData;
        this._NgIf_32_6.check_ngIf(currVal_32_0_0, throwOnChange, false);
        this._NgIf_32_6.detectChangesInInputProps(this, this._anchor_32, throwOnChange);
        var currVal_34_0_0 = this.context.showLastJobError;
        this._NgIf_34_6.check_ngIf(currVal_34_0_0, throwOnChange, false);
        this._NgIf_34_6.detectChangesInInputProps(this, this._anchor_34, throwOnChange);
        var currVal_36_0_0 = this.context.showLastJobLoading;
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.detectChangesInInputProps(this, this._anchor_36, throwOnChange);
        var currVal_38_0_0 = this.context.showTaskOptionsForm;
        this._NgIf_38_6.check_ngIf(currVal_38_0_0, throwOnChange, false);
        this._NgIf_38_6.detectChangesInInputProps(this, this._anchor_38, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_68 = import4.interpolate(1, 'Task ', ((this.context.task == null) ? null : this.context.task.name), '');
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this.renderer.setText(this._text_8, currVal_68);
            this._expr_68 = currVal_68;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskViewComponent0.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_10_0 = (this.context.showTaskOptions(this.context.project.id, this.context.project.name, this.context.task.id, this.context.task.name, this.context.task.description) !== false);
        return (true && pd_10_0);
    };
    _View_TaskViewComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_13_0 = (this.context.load() !== false);
        return (true && pd_13_0);
    };
    _View_TaskViewComponent0.prototype._handle_click_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_16_0 = (this.context.back() !== false);
        return (true && pd_16_0);
    };
    return _View_TaskViewComponent0;
}(import1.AppView));
function viewFactory_TaskViewComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskViewComponent === null)) {
        (renderType_TaskViewComponent = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_TaskViewComponent, {}));
    }
    return new _View_TaskViewComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_TaskViewComponent0 = viewFactory_TaskViewComponent0;
var _View_TaskViewComponent1 = (function (_super) {
    __extends(_View_TaskViewComponent1, _super);
    function _View_TaskViewComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent1, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h5', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Details', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_9, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Project:', null);
        this._text_12 = this.renderer.createText(this._el_9, '', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_14, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Task:', null);
        this._text_17 = this.renderer.createText(this._el_14, '', null);
        this._text_18 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_19, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Description:', null);
        this._text_22 = this.renderer.createText(this._el_19, '', null);
        this._text_23 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_25 = import4.createRenderElement(this.renderer, this._el_24, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_26 = this.renderer.createText(this._el_25, 'Steps:', null);
        this._text_27 = this.renderer.createText(this._el_24, '', null);
        this._text_28 = this.renderer.createText(this._el_7, '\n			', null);
        this._text_29 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_31 = new import3.AppElement(31, 0, this, this._anchor_31);
        this._TemplateRef_31_5 = new import17.TemplateRef_(this._appEl_31, viewFactory_TaskViewComponent2);
        this._NgIf_31_6 = new import15.Wrapper_NgIf(this._appEl_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_33 = new import3.AppElement(33, 0, this, this._anchor_33);
        this._TemplateRef_33_5 = new import17.TemplateRef_(this._appEl_33, viewFactory_TaskViewComponent3);
        this._NgIf_33_6 = new import15.Wrapper_NgIf(this._appEl_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_0, '\n	', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._anchor_33,
            this._text_34
        ], [], []);
        return null;
    };
    _View_TaskViewComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import18.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import17.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import18.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_31_0_0 = (((this.parent.context.project.tasks == null) ? null : this.parent.context.project.tasks.length) > 0);
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.detectChangesInInputProps(this, this._anchor_31, throwOnChange);
        var currVal_33_0_0 = (((this.parent.context.project.tasks == null) ? null : this.parent.context.project.tasks.length) > 0);
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.detectChangesInInputProps(this, this._anchor_33, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_41 = import4.interpolate(1, ' ', this.parent.context.project.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setText(this._text_12, currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = import4.interpolate(1, ' ', this.parent.context.task.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setText(this._text_17, currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = import4.interpolate(1, ' ', this.parent.context.task.description, '');
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setText(this._text_22, currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = import4.interpolate(1, ' ', ((this.parent.context.task.steps == null) ? null : this.parent.context.task.steps.length), '');
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setText(this._text_27, currVal_44);
            this._expr_44 = currVal_44;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent1;
}(import1.AppView));
function viewFactory_TaskViewComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent2 = (function (_super) {
    __extends(_View_TaskViewComponent2, _super);
    function _View_TaskViewComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent2, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'h5', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Tasks', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_TaskViewComponent2;
}(import1.AppView));
function viewFactory_TaskViewComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent3 = (function (_super) {
    __extends(_View_TaskViewComponent3, _super);
    function _View_TaskViewComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent3, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray4(4, 'class', 'list-group', 'id', 'project-task-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2, viewFactory_TaskViewComponent4);
        this._NgFor_2_6 = new import19.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parent.parentInjector.get(import20.IterableDiffers), this.parent.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n		', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_TaskViewComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import21.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parent.parent.context.project.tasks;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent3;
}(import1.AppView));
function viewFactory_TaskViewComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent4 = (function (_super) {
    __extends(_View_TaskViewComponent4, _super);
    function _View_TaskViewComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent4, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'project-task-row list-group-item'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h4', new import4.InlineArray2(2, 'class', 'list-group-item-heading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'list-group-item-text'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n					', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n						', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Description:', null);
        this._text_11 = this.renderer.createText(this._el_7, '', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_7, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_7, '\n						', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_7, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Steps:', null);
        this._text_16 = this.renderer.createText(this._el_7, '', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n					', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_5, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n						', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_18, 'button', new import4.InlineArray4(4, 'class', 'btn btn-success', 'type', 'button'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Run', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n						', null);
        this._el_23 = import4.createRenderElement(this.renderer, this._el_18, 'button', new import4.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'View', null);
        this._text_25 = this.renderer.createText(this._el_18, '\n					', null);
        this._text_26 = this.renderer.createText(this._el_5, '\n				', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_20, 'click', this.eventHandler(this._handle_click_20_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskViewComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_28 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setText(this._text_3, currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = import4.interpolate(1, '', this.context.$implicit.description, '\n						');
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setText(this._text_11, currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = import4.interpolate(1, '', ((this.context.$implicit.steps == null) ? null : this.context.$implicit.steps.length), '\n					');
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setText(this._text_16, currVal_30);
            this._expr_30 = currVal_30;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskViewComponent4.prototype._handle_click_20_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_20_0 = (this.parent.parent.parent.context.showTaskOptions(this.parent.parent.parent.context.project.id, this.parent.parent.parent.context.project.name, this.context.$implicit.id, this.context.$implicit.name, this.context.$implicit.description) !== false);
        return (true && pd_20_0);
    };
    _View_TaskViewComponent4.prototype._handle_click_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_23_0 = (this.parent.parent.parent.context.view(this.parent.parent.parent.context.project.id, this.context.$implicit.id) !== false);
        return (true && pd_23_0);
    };
    return _View_TaskViewComponent4;
}(import1.AppView));
function viewFactory_TaskViewComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent5 = (function (_super) {
    __extends(_View_TaskViewComponent5, _super);
    function _View_TaskViewComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent5, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'no-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Project not found', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n	', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10
        ], [], []);
        return null;
    };
    return _View_TaskViewComponent5;
}(import1.AppView));
function viewFactory_TaskViewComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent6 = (function (_super) {
    __extends(_View_TaskViewComponent6, _super);
    function _View_TaskViewComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent6, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'error-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Problem while loading project', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'p', new import4.InlineArray2(2, 'id', 'error-data-message'), null);
        this._text_10 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_4, 'button', new import4.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Back', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15
        ], [disposable_0], []);
        return null;
    };
    _View_TaskViewComponent6.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this.parent.context.back() !== false);
        return (true && pd_11_0);
    };
    return _View_TaskViewComponent6;
}(import1.AppView));
function viewFactory_TaskViewComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent7 = (function (_super) {
    __extends(_View_TaskViewComponent7, _super);
    function _View_TaskViewComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent7, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'loading-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Loading...', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n	', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    return _View_TaskViewComponent7;
}(import1.AppView));
function viewFactory_TaskViewComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent8 = (function (_super) {
    __extends(_View_TaskViewComponent8, _super);
    function _View_TaskViewComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent8, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_136 = import7.UNINITIALIZED;
        this._expr_137 = import7.UNINITIALIZED;
        this._expr_139 = import7.UNINITIALIZED;
        this._expr_141 = import7.UNINITIALIZED;
        this._expr_143 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'ph-project-task-last-job-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h5', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Last job data', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'ph-project-task-last-job-details'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '\n						', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_11, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Job: ', null);
        this._text_15 = this.renderer.createText(this._el_11, '', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '\n						', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_17, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, 'Created at:', null);
        this._text_21 = this.renderer.createText(this._el_17, '', null);
        this._text_22 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_23 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, '\n						', null);
        this._el_25 = import4.createRenderElement(this.renderer, this._el_23, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_26 = this.renderer.createText(this._el_25, 'Started at:', null);
        this._text_27 = this.renderer.createText(this._el_23, '', null);
        this._text_28 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_29 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, '\n						', null);
        this._el_31 = import4.createRenderElement(this.renderer, this._el_29, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, 'Finished at:', null);
        this._text_33 = this.renderer.createText(this._el_29, '', null);
        this._text_34 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_35 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_35, '\n						', null);
        this._el_37 = import4.createRenderElement(this.renderer, this._el_35, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_37, 'Duration:', null);
        this._text_39 = this.renderer.createText(this._el_35, '', null);
        this._text_40 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_41 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, '\n						', null);
        this._el_43 = import4.createRenderElement(this.renderer, this._el_41, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_44 = this.renderer.createText(this._el_43, 'Status:', null);
        this._text_45 = this.renderer.createText(this._el_41, '\n						', null);
        this._el_46 = import4.createRenderElement(this.renderer, this._el_41, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_46_3 = new import22.Wrapper_NgSwitch();
        this._text_47 = this.renderer.createText(this._el_46, '\n							', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._appEl_48 = new import3.AppElement(48, 46, this, this._anchor_48);
        this._TemplateRef_48_5 = new import17.TemplateRef_(this._appEl_48, viewFactory_TaskViewComponent9);
        this._NgSwitchCase_48_6 = new import22.Wrapper_NgSwitchCase(this._appEl_48.vcRef, this._TemplateRef_48_5, this._NgSwitch_46_3.context);
        this._text_49 = this.renderer.createText(this._el_46, '\n							', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._appEl_50 = new import3.AppElement(50, 46, this, this._anchor_50);
        this._TemplateRef_50_5 = new import17.TemplateRef_(this._appEl_50, viewFactory_TaskViewComponent10);
        this._NgSwitchCase_50_6 = new import22.Wrapper_NgSwitchCase(this._appEl_50.vcRef, this._TemplateRef_50_5, this._NgSwitch_46_3.context);
        this._text_51 = this.renderer.createText(this._el_46, '\n							', null);
        this._anchor_52 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._appEl_52 = new import3.AppElement(52, 46, this, this._anchor_52);
        this._TemplateRef_52_5 = new import17.TemplateRef_(this._appEl_52, viewFactory_TaskViewComponent11);
        this._NgSwitchCase_52_6 = new import22.Wrapper_NgSwitchCase(this._appEl_52.vcRef, this._TemplateRef_52_5, this._NgSwitch_46_3.context);
        this._text_53 = this.renderer.createText(this._el_46, '\n							', null);
        this._anchor_54 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._appEl_54 = new import3.AppElement(54, 46, this, this._anchor_54);
        this._TemplateRef_54_5 = new import17.TemplateRef_(this._appEl_54, viewFactory_TaskViewComponent12);
        this._NgSwitchCase_54_6 = new import22.Wrapper_NgSwitchCase(this._appEl_54.vcRef, this._TemplateRef_54_5, this._NgSwitch_46_3.context);
        this._text_55 = this.renderer.createText(this._el_46, '\n							', null);
        this._anchor_56 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._appEl_56 = new import3.AppElement(56, 46, this, this._anchor_56);
        this._TemplateRef_56_5 = new import17.TemplateRef_(this._appEl_56, viewFactory_TaskViewComponent13);
        this._NgSwitchDefault_56_6 = new import22.Wrapper_NgSwitchDefault(this._appEl_56.vcRef, this._TemplateRef_56_5, this._NgSwitch_46_3.context);
        this._text_57 = this.renderer.createText(this._el_46, '\n						', null);
        this._text_58 = this.renderer.createText(this._el_41, '\n					', null);
        this._text_59 = this.renderer.createText(this._el_9, '\n					', null);
        this._el_60 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_61 = this.renderer.createText(this._el_60, '\n						', null);
        this._el_62 = import4.createRenderElement(this.renderer, this._el_60, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_63 = this.renderer.createText(this._el_62, 'Progress:', null);
        this._text_64 = this.renderer.createText(this._el_60, '\n						', null);
        this._el_65 = import4.createRenderElement(this.renderer, this._el_60, 'div', new import4.InlineArray2(2, 'class', 'progress'), null);
        this._text_66 = this.renderer.createText(this._el_65, '\n							', null);
        this._el_67 = import4.createRenderElement(this.renderer, this._el_65, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_67_3 = new import22.Wrapper_NgSwitch();
        this._text_68 = this.renderer.createText(this._el_67, '\n								', null);
        this._anchor_69 = this.renderer.createTemplateAnchor(this._el_67, null);
        this._appEl_69 = new import3.AppElement(69, 67, this, this._anchor_69);
        this._TemplateRef_69_5 = new import17.TemplateRef_(this._appEl_69, viewFactory_TaskViewComponent14);
        this._NgSwitchCase_69_6 = new import22.Wrapper_NgSwitchCase(this._appEl_69.vcRef, this._TemplateRef_69_5, this._NgSwitch_67_3.context);
        this._text_70 = this.renderer.createText(this._el_67, '\n\n								', null);
        this._anchor_71 = this.renderer.createTemplateAnchor(this._el_67, null);
        this._appEl_71 = new import3.AppElement(71, 67, this, this._anchor_71);
        this._TemplateRef_71_5 = new import17.TemplateRef_(this._appEl_71, viewFactory_TaskViewComponent15);
        this._NgSwitchCase_71_6 = new import22.Wrapper_NgSwitchCase(this._appEl_71.vcRef, this._TemplateRef_71_5, this._NgSwitch_67_3.context);
        this._text_72 = this.renderer.createText(this._el_67, '\n\n								', null);
        this._anchor_73 = this.renderer.createTemplateAnchor(this._el_67, null);
        this._appEl_73 = new import3.AppElement(73, 67, this, this._anchor_73);
        this._TemplateRef_73_5 = new import17.TemplateRef_(this._appEl_73, viewFactory_TaskViewComponent16);
        this._NgSwitchCase_73_6 = new import22.Wrapper_NgSwitchCase(this._appEl_73.vcRef, this._TemplateRef_73_5, this._NgSwitch_67_3.context);
        this._text_74 = this.renderer.createText(this._el_67, '\n\n								', null);
        this._anchor_75 = this.renderer.createTemplateAnchor(this._el_67, null);
        this._appEl_75 = new import3.AppElement(75, 67, this, this._anchor_75);
        this._TemplateRef_75_5 = new import17.TemplateRef_(this._appEl_75, viewFactory_TaskViewComponent17);
        this._NgSwitchCase_75_6 = new import22.Wrapper_NgSwitchCase(this._appEl_75.vcRef, this._TemplateRef_75_5, this._NgSwitch_67_3.context);
        this._text_76 = this.renderer.createText(this._el_67, '\n\n								', null);
        this._anchor_77 = this.renderer.createTemplateAnchor(this._el_67, null);
        this._appEl_77 = new import3.AppElement(77, 67, this, this._anchor_77);
        this._TemplateRef_77_5 = new import17.TemplateRef_(this._appEl_77, viewFactory_TaskViewComponent18);
        this._NgSwitchDefault_77_6 = new import22.Wrapper_NgSwitchDefault(this._appEl_77.vcRef, this._TemplateRef_77_5, this._NgSwitch_67_3.context);
        this._text_78 = this.renderer.createText(this._el_67, '\n							', null);
        this._text_79 = this.renderer.createText(this._el_65, '\n						', null);
        this._text_80 = this.renderer.createText(this._el_60, '\n					', null);
        this._text_81 = this.renderer.createText(this._el_9, '\n				', null);
        this._text_82 = this.renderer.createText(this._el_7, '\n			', null);
        this._text_83 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_84 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_85 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_86 = this.renderer.createText(this._el_85, '\n			', null);
        this._el_87 = import4.createRenderElement(this.renderer, this._el_85, 'ul', new import4.InlineArray4(4, 'class', 'ph-project-task-last-job-tabs nav nav-tabs', 'role', 'tablist'), null);
        this._text_88 = this.renderer.createText(this._el_87, '\n				', null);
        this._anchor_89 = this.renderer.createTemplateAnchor(this._el_87, null);
        this._appEl_89 = new import3.AppElement(89, 87, this, this._anchor_89);
        this._TemplateRef_89_5 = new import17.TemplateRef_(this._appEl_89, viewFactory_TaskViewComponent19);
        this._NgFor_89_6 = new import19.Wrapper_NgFor(this._appEl_89.vcRef, this._TemplateRef_89_5, this.parent.parentInjector.get(import20.IterableDiffers), this.parent.ref);
        this._text_90 = this.renderer.createText(this._el_87, '\n			', null);
        this._text_91 = this.renderer.createText(this._el_85, '\n			', null);
        this._el_92 = import4.createRenderElement(this.renderer, this._el_85, 'div', new import4.InlineArray2(2, 'class', 'tab-content ph-project-task-last-job-tab-contents'), null);
        this._text_93 = this.renderer.createText(this._el_92, '\n				', null);
        this._anchor_94 = this.renderer.createTemplateAnchor(this._el_92, null);
        this._appEl_94 = new import3.AppElement(94, 92, this, this._anchor_94);
        this._TemplateRef_94_5 = new import17.TemplateRef_(this._appEl_94, viewFactory_TaskViewComponent20);
        this._NgFor_94_6 = new import19.Wrapper_NgFor(this._appEl_94.vcRef, this._TemplateRef_94_5, this.parent.parentInjector.get(import20.IterableDiffers), this.parent.ref);
        this._text_95 = this.renderer.createText(this._el_92, '\n			', null);
        this._text_96 = this.renderer.createText(this._el_85, '\n		', null);
        this._text_97 = this.renderer.createText(this._el_0, '\n	', null);
        this._pipe_timestampFormat_0_0 = import4.pureProxy1(this.parent._pipe_timestampFormat_0.transform.bind(this.parent._pipe_timestampFormat_0));
        this._pipe_timestampFormat_0_1 = import4.pureProxy1(this.parent._pipe_timestampFormat_0.transform.bind(this.parent._pipe_timestampFormat_0));
        this._pipe_timestampFormat_0_2 = import4.pureProxy1(this.parent._pipe_timestampFormat_0.transform.bind(this.parent._pipe_timestampFormat_0));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._anchor_48,
            this._text_49,
            this._anchor_50,
            this._text_51,
            this._anchor_52,
            this._text_53,
            this._anchor_54,
            this._text_55,
            this._anchor_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._anchor_69,
            this._text_70,
            this._anchor_71,
            this._text_72,
            this._anchor_73,
            this._text_74,
            this._anchor_75,
            this._text_76,
            this._anchor_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._anchor_89,
            this._text_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._anchor_94,
            this._text_95,
            this._text_96,
            this._text_97
        ], [], []);
        return null;
    };
    _View_TaskViewComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === import23.NgSwitchCase) && (48 === requestNodeIndex))) {
            return this._NgSwitchCase_48_6.context;
        }
        if (((token === import17.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import23.NgSwitchCase) && (50 === requestNodeIndex))) {
            return this._NgSwitchCase_50_6.context;
        }
        if (((token === import17.TemplateRef) && (52 === requestNodeIndex))) {
            return this._TemplateRef_52_5;
        }
        if (((token === import23.NgSwitchCase) && (52 === requestNodeIndex))) {
            return this._NgSwitchCase_52_6.context;
        }
        if (((token === import17.TemplateRef) && (54 === requestNodeIndex))) {
            return this._TemplateRef_54_5;
        }
        if (((token === import23.NgSwitchCase) && (54 === requestNodeIndex))) {
            return this._NgSwitchCase_54_6.context;
        }
        if (((token === import17.TemplateRef) && (56 === requestNodeIndex))) {
            return this._TemplateRef_56_5;
        }
        if (((token === import23.NgSwitchDefault) && (56 === requestNodeIndex))) {
            return this._NgSwitchDefault_56_6.context;
        }
        if (((token === import23.NgSwitch) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgSwitch_46_3.context;
        }
        if (((token === import17.TemplateRef) && (69 === requestNodeIndex))) {
            return this._TemplateRef_69_5;
        }
        if (((token === import23.NgSwitchCase) && (69 === requestNodeIndex))) {
            return this._NgSwitchCase_69_6.context;
        }
        if (((token === import17.TemplateRef) && (71 === requestNodeIndex))) {
            return this._TemplateRef_71_5;
        }
        if (((token === import23.NgSwitchCase) && (71 === requestNodeIndex))) {
            return this._NgSwitchCase_71_6.context;
        }
        if (((token === import17.TemplateRef) && (73 === requestNodeIndex))) {
            return this._TemplateRef_73_5;
        }
        if (((token === import23.NgSwitchCase) && (73 === requestNodeIndex))) {
            return this._NgSwitchCase_73_6.context;
        }
        if (((token === import17.TemplateRef) && (75 === requestNodeIndex))) {
            return this._TemplateRef_75_5;
        }
        if (((token === import23.NgSwitchCase) && (75 === requestNodeIndex))) {
            return this._NgSwitchCase_75_6.context;
        }
        if (((token === import17.TemplateRef) && (77 === requestNodeIndex))) {
            return this._TemplateRef_77_5;
        }
        if (((token === import23.NgSwitchDefault) && (77 === requestNodeIndex))) {
            return this._NgSwitchDefault_77_6.context;
        }
        if (((token === import23.NgSwitch) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._NgSwitch_67_3.context;
        }
        if (((token === import17.TemplateRef) && (89 === requestNodeIndex))) {
            return this._TemplateRef_89_5;
        }
        if (((token === import21.NgFor) && (89 === requestNodeIndex))) {
            return this._NgFor_89_6.context;
        }
        if (((token === import17.TemplateRef) && (94 === requestNodeIndex))) {
            return this._TemplateRef_94_5;
        }
        if (((token === import21.NgFor) && (94 === requestNodeIndex))) {
            return this._NgFor_94_6.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        var currVal_46_0_0 = ((this.parent.context.lastJob == null) ? null : this.parent.context.lastJob.status);
        this._NgSwitch_46_3.check_ngSwitch(currVal_46_0_0, throwOnChange, false);
        this._NgSwitch_46_3.detectChangesInInputProps(this, this._el_46, throwOnChange);
        var currVal_48_0_0 = 'onqueue';
        this._NgSwitchCase_48_6.check_ngSwitchCase(currVal_48_0_0, throwOnChange, false);
        this._NgSwitchCase_48_6.detectChangesInInputProps(this, this._anchor_48, throwOnChange);
        var currVal_50_0_0 = 'running';
        this._NgSwitchCase_50_6.check_ngSwitchCase(currVal_50_0_0, throwOnChange, false);
        this._NgSwitchCase_50_6.detectChangesInInputProps(this, this._anchor_50, throwOnChange);
        var currVal_52_0_0 = 'success';
        this._NgSwitchCase_52_6.check_ngSwitchCase(currVal_52_0_0, throwOnChange, false);
        this._NgSwitchCase_52_6.detectChangesInInputProps(this, this._anchor_52, throwOnChange);
        var currVal_54_0_0 = 'error';
        this._NgSwitchCase_54_6.check_ngSwitchCase(currVal_54_0_0, throwOnChange, false);
        this._NgSwitchCase_54_6.detectChangesInInputProps(this, this._anchor_54, throwOnChange);
        this._NgSwitchDefault_56_6.detectChangesInInputProps(this, this._anchor_56, throwOnChange);
        var currVal_67_0_0 = this.parent.context.lastJob.status;
        this._NgSwitch_67_3.check_ngSwitch(currVal_67_0_0, throwOnChange, false);
        this._NgSwitch_67_3.detectChangesInInputProps(this, this._el_67, throwOnChange);
        var currVal_69_0_0 = 'onqueue';
        this._NgSwitchCase_69_6.check_ngSwitchCase(currVal_69_0_0, throwOnChange, false);
        this._NgSwitchCase_69_6.detectChangesInInputProps(this, this._anchor_69, throwOnChange);
        var currVal_71_0_0 = 'success';
        this._NgSwitchCase_71_6.check_ngSwitchCase(currVal_71_0_0, throwOnChange, false);
        this._NgSwitchCase_71_6.detectChangesInInputProps(this, this._anchor_71, throwOnChange);
        var currVal_73_0_0 = 'running';
        this._NgSwitchCase_73_6.check_ngSwitchCase(currVal_73_0_0, throwOnChange, false);
        this._NgSwitchCase_73_6.detectChangesInInputProps(this, this._anchor_73, throwOnChange);
        var currVal_75_0_0 = 'error';
        this._NgSwitchCase_75_6.check_ngSwitchCase(currVal_75_0_0, throwOnChange, false);
        this._NgSwitchCase_75_6.detectChangesInInputProps(this, this._anchor_75, throwOnChange);
        this._NgSwitchDefault_77_6.detectChangesInInputProps(this, this._anchor_77, throwOnChange);
        var currVal_89_0_0 = this.parent.context.jobOutputGroupList;
        this._NgFor_89_6.check_ngForOf(currVal_89_0_0, throwOnChange, false);
        this._NgFor_89_6.detectChangesInInputProps(this, this._anchor_89, throwOnChange);
        var currVal_94_0_0 = this.parent.context.jobOutputGroupList;
        this._NgFor_94_6.check_ngForOf(currVal_94_0_0, throwOnChange, false);
        this._NgFor_94_6.detectChangesInInputProps(this, this._anchor_94, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_136 = import4.interpolate(1, ' ', this.parent.context.lastJob.id, '\n					');
        if (import4.checkBinding(throwOnChange, this._expr_136, currVal_136)) {
            this.renderer.setText(this._text_15, currVal_136);
            this._expr_136 = currVal_136;
        }
        valUnwrapper.reset();
        var currVal_137 = import4.interpolate(1, ' ', valUnwrapper.unwrap(import4.castByValue(this._pipe_timestampFormat_0_0, this.parent._pipe_timestampFormat_0.transform)(this.parent.context.lastJob.createdAt)), '\n					');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_137, currVal_137))) {
            this.renderer.setText(this._text_21, currVal_137);
            this._expr_137 = currVal_137;
        }
        valUnwrapper.reset();
        var currVal_139 = import4.interpolate(1, ' ', valUnwrapper.unwrap(import4.castByValue(this._pipe_timestampFormat_0_1, this.parent._pipe_timestampFormat_0.transform)(this.parent.context.lastJob.startedAt)), '\n					');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_139, currVal_139))) {
            this.renderer.setText(this._text_27, currVal_139);
            this._expr_139 = currVal_139;
        }
        valUnwrapper.reset();
        var currVal_141 = import4.interpolate(1, ' ', valUnwrapper.unwrap(import4.castByValue(this._pipe_timestampFormat_0_2, this.parent._pipe_timestampFormat_0.transform)(this.parent.context.lastJob.finishedAt)), '\n					');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_141, currVal_141))) {
            this.renderer.setText(this._text_33, currVal_141);
            this._expr_141 = currVal_141;
        }
        var currVal_143 = import4.interpolate(1, ' ', this.parent.context.lastJob.duration, 's\n					');
        if (import4.checkBinding(throwOnChange, this._expr_143, currVal_143)) {
            this.renderer.setText(this._text_39, currVal_143);
            this._expr_143 = currVal_143;
        }
        this._NgSwitch_46_3.detectChangesInHostProps(this, this._el_46, throwOnChange);
        this._NgSwitch_67_3.detectChangesInHostProps(this, this._el_67, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent8;
}(import1.AppView));
function viewFactory_TaskViewComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent8(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent9 = (function (_super) {
    __extends(_View_TaskViewComponent9, _super);
    function _View_TaskViewComponent9(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent9, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-primary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.lastJob.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent9;
}(import1.AppView));
function viewFactory_TaskViewComponent9(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent9(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent10 = (function (_super) {
    __extends(_View_TaskViewComponent10, _super);
    function _View_TaskViewComponent10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent10, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-warning'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.lastJob.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent10;
}(import1.AppView));
function viewFactory_TaskViewComponent10(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent10(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent11 = (function (_super) {
    __extends(_View_TaskViewComponent11, _super);
    function _View_TaskViewComponent11(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent11, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.lastJob.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent11;
}(import1.AppView));
function viewFactory_TaskViewComponent11(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent11(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent12 = (function (_super) {
    __extends(_View_TaskViewComponent12, _super);
    function _View_TaskViewComponent12(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent12, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.lastJob.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent12;
}(import1.AppView));
function viewFactory_TaskViewComponent12(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent12(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent13 = (function (_super) {
    __extends(_View_TaskViewComponent13, _super);
    function _View_TaskViewComponent13(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent13, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent13.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.lastJob.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent13;
}(import1.AppView));
function viewFactory_TaskViewComponent13(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent13(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent14 = (function (_super) {
    __extends(_View_TaskViewComponent14, _super);
    function _View_TaskViewComponent14(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent14, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-info', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.parent.context.lastJob.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.parent.context.lastJob.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.parent.context.lastJob.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent14;
}(import1.AppView));
function viewFactory_TaskViewComponent14(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent14(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent15 = (function (_super) {
    __extends(_View_TaskViewComponent15, _super);
    function _View_TaskViewComponent15(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent15, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-success', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent15.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.parent.context.lastJob.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.parent.context.lastJob.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.parent.context.lastJob.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent15;
}(import1.AppView));
function viewFactory_TaskViewComponent15(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent15(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent16 = (function (_super) {
    __extends(_View_TaskViewComponent16, _super);
    function _View_TaskViewComponent16(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent16, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent16.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-striped progress-bar-warning', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent16.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.parent.context.lastJob.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.parent.context.lastJob.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.parent.context.lastJob.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent16;
}(import1.AppView));
function viewFactory_TaskViewComponent16(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent16(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent17 = (function (_super) {
    __extends(_View_TaskViewComponent17, _super);
    function _View_TaskViewComponent17(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent17, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent17.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-danger', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent17.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.parent.context.lastJob.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.parent.context.lastJob.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.parent.context.lastJob.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent17;
}(import1.AppView));
function viewFactory_TaskViewComponent17(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent17(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent18 = (function (_super) {
    __extends(_View_TaskViewComponent18, _super);
    function _View_TaskViewComponent18(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent18, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent18.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-success', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskViewComponent18.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.parent.context.lastJob.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.parent.context.lastJob.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.parent.context.lastJob.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent18;
}(import1.AppView));
function viewFactory_TaskViewComponent18(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent18(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent19 = (function (_super) {
    __extends(_View_TaskViewComponent19, _super);
    function _View_TaskViewComponent19(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent19, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent19.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'li', new import4.InlineArray2(2, 'role', 'presentation'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n					', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'a', new import4.InlineArray4(4, 'data-toggle', 'tab', 'role', 'tab'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n				', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_TaskViewComponent19.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_5 = this.context.$implicit.active;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_0, 'active', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, 'tab-', this.context.$implicit.id, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '#tab-content-', this.context.$implicit.id, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL, currVal_7));
            this._expr_7 = currVal_7;
        }
        var currVal_8 = ('tab-content-' + this.context.$implicit.id);
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-controls', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_3, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent19;
}(import1.AppView));
function viewFactory_TaskViewComponent19(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent19(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent20 = (function (_super) {
    __extends(_View_TaskViewComponent20, _super);
    function _View_TaskViewComponent20(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent20, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
    }
    _View_TaskViewComponent20.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray4(4, 'class', 'tab-pane tab-pane-output-group', 'role', 'tabpanel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n					', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n						', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n					', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n				', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_TaskViewComponent20.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_7 = import4.interpolate(1, 'tab-content-', this.context.$implicit.id, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_0, 'id', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this.context.$implicit.active;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_0, 'active', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = import4.interpolate(1, 'tab-content-body-', this.context.$implicit.id, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementProperty(this._el_4, 'id', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this.context.$implicit.output;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_4, 'innerHTML', this.viewUtils.sanitizer.sanitize(import24.SecurityContext.HTML, currVal_10));
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskViewComponent20;
}(import1.AppView));
function viewFactory_TaskViewComponent20(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent20(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent21 = (function (_super) {
    __extends(_View_TaskViewComponent21, _super);
    function _View_TaskViewComponent21(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent21, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent21.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'ph-project-task-last-job-no-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Last job not found', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n	', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10
        ], [], []);
        return null;
    };
    return _View_TaskViewComponent21;
}(import1.AppView));
function viewFactory_TaskViewComponent21(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent21(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent22 = (function (_super) {
    __extends(_View_TaskViewComponent22, _super);
    function _View_TaskViewComponent22(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent22, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent22.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'ph-project-task-last-job-error-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Problem while loading last job data', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'p', new import4.InlineArray2(2, 'id', 'ph-project-task-last-job-error-data-message'), null);
        this._text_10 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_4, 'button', new import4.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Try again', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15
        ], [disposable_0], []);
        return null;
    };
    _View_TaskViewComponent22.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this.parent.context.getLastJobData() !== false);
        return (true && pd_11_0);
    };
    return _View_TaskViewComponent22;
}(import1.AppView));
function viewFactory_TaskViewComponent22(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent22(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent23 = (function (_super) {
    __extends(_View_TaskViewComponent23, _super);
    function _View_TaskViewComponent23(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent23, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent23.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'ph-project-task-last-job-loading-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Loading last job data...', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n	', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    return _View_TaskViewComponent23;
}(import1.AppView));
function viewFactory_TaskViewComponent23(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent23(viewUtils, parentInjector, declarationEl);
}
var _View_TaskViewComponent24 = (function (_super) {
    __extends(_View_TaskViewComponent24, _super);
    function _View_TaskViewComponent24(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskViewComponent24, renderType_TaskViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskViewComponent24.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'task-options', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import25.viewFactory_TaskOptionsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TaskOptionsComponent_0_4 = new import25.Wrapper_TaskOptionsComponent(this.parent.parentInjector.get(import9.TaskService));
        this._appEl_0.initComponent(this._TaskOptionsComponent_0_4.context, [], compView_0);
        compView_0.create(this._TaskOptionsComponent_0_4.context, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'taskRunWithSuccess', this.eventHandler(this._handle_taskRunWithSuccess_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'taskRunWithError', this.eventHandler(this._handle_taskRunWithError_0_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_0, 'taskRunCancel', this.eventHandler(this._handle_taskRunCancel_0_2.bind(this)));
        var subscription_0 = this._TaskOptionsComponent_0_4.context.taskRunWithSuccess.subscribe(this.eventHandler(this._handle_taskRunWithSuccess_0_0.bind(this)));
        var subscription_1 = this._TaskOptionsComponent_0_4.context.taskRunWithError.subscribe(this.eventHandler(this._handle_taskRunWithError_0_1.bind(this)));
        var subscription_2 = this._TaskOptionsComponent_0_4.context.taskRunCancel.subscribe(this.eventHandler(this._handle_taskRunCancel_0_2.bind(this)));
        this.init([].concat([this._el_0]), [this._el_0], [
            disposable_0,
            disposable_1,
            disposable_2
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_TaskViewComponent24.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.TaskOptionsComponent) && (0 === requestNodeIndex))) {
            return this._TaskOptionsComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_TaskViewComponent24.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parent.context.runProjectId;
        this._TaskOptionsComponent_0_4.check_projectId(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.parent.context.runProjectName;
        this._TaskOptionsComponent_0_4.check_projectName(currVal_0_0_1, throwOnChange, false);
        var currVal_0_0_2 = this.parent.context.runTaskId;
        this._TaskOptionsComponent_0_4.check_taskId(currVal_0_0_2, throwOnChange, false);
        var currVal_0_0_3 = this.parent.context.runTaskName;
        this._TaskOptionsComponent_0_4.check_taskName(currVal_0_0_3, throwOnChange, false);
        var currVal_0_0_4 = this.parent.context.runTaskDescription;
        this._TaskOptionsComponent_0_4.check_taskDescription(currVal_0_0_4, throwOnChange, false);
        var currVal_0_0_5 = this.parent.context.runTaskOptions;
        this._TaskOptionsComponent_0_4.check_options(currVal_0_0_5, throwOnChange, false);
        this._TaskOptionsComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TaskOptionsComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._TaskOptionsComponent_0_4.context.ngAfterViewInit();
            }
        }
    };
    _View_TaskViewComponent24.prototype._handle_taskRunWithSuccess_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunWithSuccess($event) !== false);
        return (true && pd_0_0);
    };
    _View_TaskViewComponent24.prototype._handle_taskRunWithError_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunWithError($event) !== false);
        return (true && pd_0_0);
    };
    _View_TaskViewComponent24.prototype._handle_taskRunCancel_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunCancel($event) !== false);
        return (true && pd_0_0);
    };
    return _View_TaskViewComponent24;
}(import1.AppView));
function viewFactory_TaskViewComponent24(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskViewComponent24(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=task-view.component.ngfactory.js.map