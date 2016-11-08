"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/project-view/project-view.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('../../../../src/app/services/ProjectService');
var import10 = require('../../../../src/app/services/TaskService');
var import11 = require('@angular/router/src/router');
var import12 = require('@angular/router/src/router_state');
var import13 = require('@angular/core/src/metadata/view');
var import14 = require('@angular/core/src/linker/component_factory');
var import15 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import16 = require('@angular/core/src/linker/template_ref');
var import17 = require('@angular/common/src/directives/ng_if');
var import18 = require('../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import19 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import20 = require('@angular/common/src/directives/ng_for');
var import21 = require('../project-task-item/project-task-item.component.ngfactory');
var import22 = require('../../../../src/app/project-task-item/project-task-item.component');
var import23 = require('../task-options/task-options.component.ngfactory');
var import24 = require('../../../../src/app/task-options/task-options.component');
var Wrapper_ProjectViewComponent = (function () {
    function Wrapper_ProjectViewComponent(p0, p1, p2, p3, p4) {
        this.changed = false;
        this.context = new import0.ProjectViewComponent(p0, p1, p2, p3, p4);
    }
    Wrapper_ProjectViewComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ProjectViewComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ProjectViewComponent;
}());
exports.Wrapper_ProjectViewComponent = Wrapper_ProjectViewComponent;
var renderType_ProjectViewComponent_Host = null;
var _View_ProjectViewComponent_Host0 = (function (_super) {
    __extends(_View_ProjectViewComponent_Host0, _super);
    function _View_ProjectViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent_Host0, renderType_ProjectViewComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'project-view', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProjectViewComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProjectViewComponent_0_4 = new Wrapper_ProjectViewComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.ProjectService), this.parentInjector.get(import10.TaskService), this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute));
        this._appEl_0.initComponent(this._ProjectViewComponent_0_4.context, [], compView_0);
        compView_0.create(this._ProjectViewComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProjectViewComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProjectViewComponent) && (0 === requestNodeIndex))) {
            return this._ProjectViewComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProjectViewComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ProjectViewComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectViewComponent_Host0;
}(import1.AppView));
function viewFactory_ProjectViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectViewComponent_Host === null)) {
        (renderType_ProjectViewComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProjectViewComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ProjectViewComponentNgFactory = new import14.ComponentFactory('project-view', viewFactory_ProjectViewComponent_Host0, import0.ProjectViewComponent);
var styles_ProjectViewComponent = [];
var renderType_ProjectViewComponent = null;
var _View_ProjectViewComponent0 = (function (_super) {
    __extends(_View_ProjectViewComponent0, _super);
    function _View_ProjectViewComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent0, renderType_ProjectViewComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_45 = import7.UNINITIALIZED;
    }
    _View_ProjectViewComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'project-view'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'panel panel-default', 'id', 'options-container'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'h3', new import4.InlineArray2(2, 'class', 'options-container-title'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_11 = this.renderer.createText(this._el_10, 'Refresh', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Back', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n	', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._text_18 = this.renderer.createText(this._el_0, '\n	', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_19 = new import3.AppElement(19, 0, this, this._anchor_19);
        this._TemplateRef_19_5 = new import16.TemplateRef_(this._appEl_19, viewFactory_ProjectViewComponent1);
        this._NgIf_19_6 = new import15.Wrapper_NgIf(this._appEl_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_21 = new import3.AppElement(21, 0, this, this._anchor_21);
        this._TemplateRef_21_5 = new import16.TemplateRef_(this._appEl_21, viewFactory_ProjectViewComponent5);
        this._NgIf_21_6 = new import15.Wrapper_NgIf(this._appEl_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_23 = new import3.AppElement(23, 0, this, this._anchor_23);
        this._TemplateRef_23_5 = new import16.TemplateRef_(this._appEl_23, viewFactory_ProjectViewComponent6);
        this._NgIf_23_6 = new import15.Wrapper_NgIf(this._appEl_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_25 = new import3.AppElement(25, 0, this, this._anchor_25);
        this._TemplateRef_25_5 = new import16.TemplateRef_(this._appEl_25, viewFactory_ProjectViewComponent7);
        this._NgIf_25_6 = new import15.Wrapper_NgIf(this._appEl_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_27 = new import3.AppElement(27, 0, this, this._anchor_27);
        this._TemplateRef_27_5 = new import16.TemplateRef_(this._appEl_27, viewFactory_ProjectViewComponent8);
        this._NgIf_27_6 = new import15.Wrapper_NgIf(this._appEl_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
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
            this._text_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._anchor_27,
            this._text_28,
            this._text_29
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ProjectViewComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import17.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import16.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import17.NgIf) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        if (((token === import16.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import17.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import16.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import17.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import16.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import17.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_19_0_0 = this.context.showData;
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.detectChangesInInputProps(this, this._anchor_19, throwOnChange);
        var currVal_21_0_0 = this.context.showEmptyData;
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.detectChangesInInputProps(this, this._anchor_21, throwOnChange);
        var currVal_23_0_0 = this.context.showError;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.detectChangesInInputProps(this, this._anchor_23, throwOnChange);
        var currVal_25_0_0 = this.context.showLoading;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        var currVal_27_0_0 = this.context.showTaskOptionsForm;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.detectChangesInInputProps(this, this._anchor_27, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_45 = import4.interpolate(1, 'Project ', ((this.context.project == null) ? null : this.context.project.name), '');
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setText(this._text_8, currVal_45);
            this._expr_45 = currVal_45;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProjectViewComponent0.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_10_0 = (this.context.load() !== false);
        return (true && pd_10_0);
    };
    _View_ProjectViewComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_13_0 = (this.context.back() !== false);
        return (true && pd_13_0);
    };
    return _View_ProjectViewComponent0;
}(import1.AppView));
function viewFactory_ProjectViewComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectViewComponent === null)) {
        (renderType_ProjectViewComponent = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_ProjectViewComponent, {}));
    }
    return new _View_ProjectViewComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ProjectViewComponent0 = viewFactory_ProjectViewComponent0;
var _View_ProjectViewComponent1 = (function (_super) {
    __extends(_View_ProjectViewComponent1, _super);
    function _View_ProjectViewComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent1, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
    }
    _View_ProjectViewComponent1.prototype.createInternal = function (rootSelector) {
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
        this._text_11 = this.renderer.createText(this._el_10, 'Name:', null);
        this._text_12 = this.renderer.createText(this._el_9, '', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_14, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Description:', null);
        this._text_17 = this.renderer.createText(this._el_14, '', null);
        this._text_18 = this.renderer.createText(this._el_7, '\n				', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_7, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_19, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Tasks:', null);
        this._text_22 = this.renderer.createText(this._el_19, '', null);
        this._text_23 = this.renderer.createText(this._el_7, '\n			', null);
        this._text_24 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_26 = new import3.AppElement(26, 0, this, this._anchor_26);
        this._TemplateRef_26_5 = new import16.TemplateRef_(this._appEl_26, viewFactory_ProjectViewComponent2);
        this._NgIf_26_6 = new import15.Wrapper_NgIf(this._appEl_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_0, '\n\n		', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_28 = new import3.AppElement(28, 0, this, this._anchor_28);
        this._TemplateRef_28_5 = new import16.TemplateRef_(this._appEl_28, viewFactory_ProjectViewComponent3);
        this._NgIf_28_6 = new import15.Wrapper_NgIf(this._appEl_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_0, '\n	', null);
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
            this._text_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29
        ], [], []);
        return null;
    };
    _View_ProjectViewComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import17.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import16.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import17.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_26_0_0 = (((this.parent.context.project.tasks == null) ? null : this.parent.context.project.tasks.length) > 0);
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.detectChangesInInputProps(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = (((this.parent.context.project.tasks == null) ? null : this.parent.context.project.tasks.length) > 0);
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.detectChangesInInputProps(this, this._anchor_28, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_36 = import4.interpolate(1, ' ', this.parent.context.project.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setText(this._text_12, currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_37 = import4.interpolate(1, ' ', this.parent.context.project.description, '');
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_17, currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = import4.interpolate(1, ' ', ((this.parent.context.project.tasks == null) ? null : this.parent.context.project.tasks.length), '');
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setText(this._text_22, currVal_38);
            this._expr_38 = currVal_38;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectViewComponent1;
}(import1.AppView));
function viewFactory_ProjectViewComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent2 = (function (_super) {
    __extends(_View_ProjectViewComponent2, _super);
    function _View_ProjectViewComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent2, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'h5', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Tasks', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ProjectViewComponent2;
}(import1.AppView));
function viewFactory_ProjectViewComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent3 = (function (_super) {
    __extends(_View_ProjectViewComponent3, _super);
    function _View_ProjectViewComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent3, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray4(4, 'class', 'list-group', 'id', 'project-task-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2, viewFactory_ProjectViewComponent4);
        this._NgFor_2_6 = new import18.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parent.parentInjector.get(import19.IterableDiffers), this.parent.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n		', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ProjectViewComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import20.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parent.parent.context.project.tasks;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectViewComponent3;
}(import1.AppView));
function viewFactory_ProjectViewComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent4 = (function (_super) {
    __extends(_View_ProjectViewComponent4, _super);
    function _View_ProjectViewComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent4, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'project-task-row list-group-item'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'project-task-item', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_ProjectTaskItemComponent0(this.viewUtils, this.injector(2), this._appEl_2);
        this._ProjectTaskItemComponent_2_4 = new import21.Wrapper_ProjectTaskItemComponent(this.parent.parent.parent.parentInjector.get(import8.GlobalService), this.parent.parent.parent.parentInjector.get(import11.Router));
        this._appEl_2.initComponent(this._ProjectTaskItemComponent_2_4.context, [], compView_2);
        compView_2.create(this._ProjectTaskItemComponent_2_4.context, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'showTaskOptions', this.eventHandler(this._handle_showTaskOptions_2_0.bind(this)));
        var subscription_0 = this._ProjectTaskItemComponent_2_4.context.showTaskOptions.subscribe(this.eventHandler(this._handle_showTaskOptions_2_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], [subscription_0]);
        return null;
    };
    _View_ProjectViewComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.ProjectTaskItemComponent) && (2 === requestNodeIndex))) {
            return this._ProjectTaskItemComponent_2_4.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parent.parent.parent.context.project;
        this._ProjectTaskItemComponent_2_4.check_project(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.context.$implicit;
        this._ProjectTaskItemComponent_2_4.check_task(currVal_2_0_1, throwOnChange, false);
        this._ProjectTaskItemComponent_2_4.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ProjectTaskItemComponent_2_4.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProjectViewComponent4.prototype._handle_showTaskOptions_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_2_0 = (this.parent.parent.parent.context.showTaskOptions($event) !== false);
        return (true && pd_2_0);
    };
    return _View_ProjectViewComponent4;
}(import1.AppView));
function viewFactory_ProjectViewComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent5 = (function (_super) {
    __extends(_View_ProjectViewComponent5, _super);
    function _View_ProjectViewComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent5, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent5.prototype.createInternal = function (rootSelector) {
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
    return _View_ProjectViewComponent5;
}(import1.AppView));
function viewFactory_ProjectViewComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent6 = (function (_super) {
    __extends(_View_ProjectViewComponent6, _super);
    function _View_ProjectViewComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent6, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent6.prototype.createInternal = function (rootSelector) {
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
    _View_ProjectViewComponent6.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this.parent.context.back() !== false);
        return (true && pd_11_0);
    };
    return _View_ProjectViewComponent6;
}(import1.AppView));
function viewFactory_ProjectViewComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent7 = (function (_super) {
    __extends(_View_ProjectViewComponent7, _super);
    function _View_ProjectViewComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent7, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent7.prototype.createInternal = function (rootSelector) {
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
    return _View_ProjectViewComponent7;
}(import1.AppView));
function viewFactory_ProjectViewComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectViewComponent8 = (function (_super) {
    __extends(_View_ProjectViewComponent8, _super);
    function _View_ProjectViewComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectViewComponent8, renderType_ProjectViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectViewComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'task-options', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import23.viewFactory_TaskOptionsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TaskOptionsComponent_0_4 = new import23.Wrapper_TaskOptionsComponent(this.parent.parentInjector.get(import10.TaskService));
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
    _View_ProjectViewComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.TaskOptionsComponent) && (0 === requestNodeIndex))) {
            return this._TaskOptionsComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ProjectViewComponent8.prototype.detectChangesInternal = function (throwOnChange) {
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
    _View_ProjectViewComponent8.prototype._handle_taskRunWithSuccess_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunWithSuccess($event) !== false);
        return (true && pd_0_0);
    };
    _View_ProjectViewComponent8.prototype._handle_taskRunWithError_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunWithError($event) !== false);
        return (true && pd_0_0);
    };
    _View_ProjectViewComponent8.prototype._handle_taskRunCancel_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.taskRunCancel($event) !== false);
        return (true && pd_0_0);
    };
    return _View_ProjectViewComponent8;
}(import1.AppView));
function viewFactory_ProjectViewComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectViewComponent8(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=project-view.component.ngfactory.js.map