"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/task-options/task-options.component');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view_utils');
var import3 = require('@angular/core/src/linker/view');
var import5 = require('@angular/core/src/linker/element');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('../../../../src/app/services/TaskService');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var import11 = require('@angular/core/src/linker/query_list');
var import12 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('@angular/core/src/linker/element_ref');
var import16 = require('../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory');
var import17 = require('../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory');
var import18 = require('../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import19 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import20 = require('@angular/common/src/directives/ng_for');
var import21 = require('@angular/forms/src/directives/reactive_directives/form_group_directive');
var import22 = require('@angular/forms/src/directives/control_container');
var import23 = require('@angular/forms/src/directives/ng_control_status');
var import24 = require('../../../node_modules/@angular/common/src/directives/ng_switch.ngfactory');
var import25 = require('@angular/common/src/directives/ng_switch');
var import26 = require('../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory');
var import27 = require('../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory');
var import28 = require('@angular/forms/src/directives/default_value_accessor');
var import29 = require('@angular/forms/src/directives/control_value_accessor');
var import30 = require('@angular/forms/src/directives/reactive_directives/form_control_name');
var import31 = require('@angular/forms/src/directives/ng_control');
var import32 = require('../../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory');
var import33 = require('@angular/forms/src/directives/select_control_value_accessor');
var import34 = require('../../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory');
var import35 = require('@angular/forms/src/directives/select_multiple_control_value_accessor');
var import36 = require('../../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory');
var import37 = require('@angular/forms/src/directives/checkbox_value_accessor');
var Wrapper_TaskOptionsComponent = (function () {
    function Wrapper_TaskOptionsComponent(p0) {
        this.changed = false;
        this.context = new import0.TaskOptionsComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
    }
    Wrapper_TaskOptionsComponent.prototype.check_projectId = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.projectId = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_projectName = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.projectName = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_taskId = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this.changed = true;
            this.context.taskId = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_taskName = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this.changed = true;
            this.context.taskName = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_taskDescription = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this.changed = true;
            this.context.taskDescription = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_options = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this.changed = true;
            this.context.options = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.check_taskOptions = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_6, currValue))) {
            this.changed = true;
            this.context.taskOptions = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_TaskOptionsComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TaskOptionsComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_TaskOptionsComponent;
}());
exports.Wrapper_TaskOptionsComponent = Wrapper_TaskOptionsComponent;
var renderType_TaskOptionsComponent_Host = null;
var _View_TaskOptionsComponent_Host0 = (function (_super) {
    __extends(_View_TaskOptionsComponent_Host0, _super);
    function _View_TaskOptionsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent_Host0, renderType_TaskOptionsComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskOptionsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'task-options', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TaskOptionsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TaskOptionsComponent_0_4 = new Wrapper_TaskOptionsComponent(this.parentInjector.get(import8.TaskService));
        this._appEl_0.initComponent(this._TaskOptionsComponent_0_4.context, [], compView_0);
        compView_0.create(this._TaskOptionsComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TaskOptionsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TaskOptionsComponent) && (0 === requestNodeIndex))) {
            return this._TaskOptionsComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
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
    return _View_TaskOptionsComponent_Host0;
}(import3.AppView));
function viewFactory_TaskOptionsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskOptionsComponent_Host === null)) {
        (renderType_TaskOptionsComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_TaskOptionsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.TaskOptionsComponentNgFactory = new import10.ComponentFactory('task-options', viewFactory_TaskOptionsComponent_Host0, import0.TaskOptionsComponent);
var styles_TaskOptionsComponent = [];
var renderType_TaskOptionsComponent = null;
var _View_TaskOptionsComponent0 = (function (_super) {
    __extends(_View_TaskOptionsComponent0, _super);
    function _View_TaskOptionsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent0, renderType_TaskOptionsComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_42 = import1.UNINITIALIZED;
        this._expr_43 = import1.UNINITIALIZED;
        this._expr_44 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_btRun_0 = new import11.QueryList();
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray4(4, 'class', 'modal', 'style', 'display: block'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'modal-content'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'class', 'modal-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n\n			', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_4, 'div', new import2.InlineArray2(2, 'style', 'padding: 12px 16px 2px 16px'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_6, 'h4', new import2.InlineArray2(2, 'style', 'width: 100%; text-align: right;'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'RUN NOW', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_6, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import2.createRenderElement(this.renderer, this._el_11, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Project:', null);
        this._text_14 = this.renderer.createText(this._el_11, '', null);
        this._text_15 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_16 = import2.createRenderElement(this.renderer, this._el_6, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._el_17 = import2.createRenderElement(this.renderer, this._el_16, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Task:', null);
        this._text_19 = this.renderer.createText(this._el_16, '', null);
        this._text_20 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_21 = import2.createRenderElement(this.renderer, this._el_6, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import2.createRenderElement(this.renderer, this._el_21, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Description:', null);
        this._text_24 = this.renderer.createText(this._el_21, '', null);
        this._text_25 = this.renderer.createText(this._el_6, '\n			', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n\n			', null);
        this._el_27 = import2.createRenderElement(this.renderer, this._el_4, 'hr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_4, '\n\n			', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._appEl_29 = new import5.AppElement(29, 4, this, this._anchor_29);
        this._TemplateRef_29_5 = new import13.TemplateRef_(this._appEl_29, viewFactory_TaskOptionsComponent1);
        this._NgIf_29_6 = new import12.Wrapper_NgIf(this._appEl_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_4, '\n\n			', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._appEl_31 = new import5.AppElement(31, 4, this, this._anchor_31);
        this._TemplateRef_31_5 = new import13.TemplateRef_(this._appEl_31, viewFactory_TaskOptionsComponent2);
        this._NgIf_31_6 = new import12.Wrapper_NgIf(this._appEl_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_4, '\n		', null);
        this._text_33 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_34 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33,
            this._text_34
        ], [], []);
        return null;
    };
    _View_TaskOptionsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import14.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import13.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import14.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_29_0_0 = this.context.showEmptyMessage;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.detectChangesInInputProps(this, this._anchor_29, throwOnChange);
        var currVal_31_0_0 = this.context.form;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.detectChangesInInputProps(this, this._anchor_31, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_42 = import2.interpolate(1, ' ', this.context.projectName, '');
        if (import2.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setText(this._text_14, currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = import2.interpolate(1, ' ', this.context.taskName, '');
        if (import2.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setText(this._text_19, currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = import2.interpolate(1, ' ', this.context.taskDescription, '');
        if (import2.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setText(this._text_24, currVal_44);
            this._expr_44 = currVal_44;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_btRun_0.dirty) {
                this._viewQuery_btRun_0.reset([this._appEl_31.mapNestedViews(_View_TaskOptionsComponent2, function (nestedView) {
                        return [new import15.ElementRef(nestedView._el_11)];
                    })]);
                this.context.btRun = this._viewQuery_btRun_0.first;
            }
        }
    };
    return _View_TaskOptionsComponent0;
}(import3.AppView));
function viewFactory_TaskOptionsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TaskOptionsComponent === null)) {
        (renderType_TaskOptionsComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_TaskOptionsComponent, {}));
    }
    return new _View_TaskOptionsComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_TaskOptionsComponent0 = viewFactory_TaskOptionsComponent0;
var _View_TaskOptionsComponent1 = (function (_super) {
    __extends(_View_TaskOptionsComponent1, _super);
    function _View_TaskOptionsComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent1, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskOptionsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'h5', new import2.InlineArray2(2, 'style', 'padding: 2px 16px; width: 100%; text-align: center;'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'No options are required for this task, click on RUN button to start the task', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n			', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    return _View_TaskOptionsComponent1;
}(import3.AppView));
function viewFactory_TaskOptionsComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent2 = (function (_super) {
    __extends(_View_TaskOptionsComponent2, _super);
    function _View_TaskOptionsComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent2, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskOptionsComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'form', new import2.InlineArray2(2, 'autocomplete', 'off'), null);
        this._FormGroupDirective_0_3 = new import16.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
        this._NgControlStatusGroup_0_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n				', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_TaskOptionsComponent3);
        this._NgFor_2_6 = new import18.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import19.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n				', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_0, 'hr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n\n				', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'style', 'text-align: right; padding: 12px 16px;'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n					', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_6, 'button', new import2.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Cancel', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n					', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_6, 'button', new import2.InlineArray8(6, 'class', 'btn btn-success', 'style', 'margin-left: 10px', 'type', 'submit'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Run', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n				', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n\n			', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'submit', this.eventHandler(this._handle_submit_0_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_0, 'reset', this.eventHandler(this._handle_reset_0_2.bind(this)));
        var subscription_0 = this._FormGroupDirective_0_3.context.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_8, 'click', this.eventHandler(this._handle_click_8_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_TaskOptionsComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import20.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        if (((token === import21.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._FormGroupDirective_0_3.context;
        }
        if (((token === import22.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parent.context.form;
        this._FormGroupDirective_0_3.check_form(currVal_0_0_0, throwOnChange, false);
        this._FormGroupDirective_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.detectChangesInInputProps(this, this._el_0, throwOnChange);
        var currVal_2_0_0 = this.parent.context.taskOptions;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._FormGroupDirective_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent2.prototype.dirtyParentQueriesInternal = function () {
        this.parent._viewQuery_btRun_0.setDirty();
    };
    _View_TaskOptionsComponent2.prototype._handle_ngSubmit_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.run() !== false);
        return (true && pd_0_0);
    };
    _View_TaskOptionsComponent2.prototype._handle_submit_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._FormGroupDirective_0_3.context.onSubmit($event) !== false);
        return (true && pd_0_0);
    };
    _View_TaskOptionsComponent2.prototype._handle_reset_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._FormGroupDirective_0_3.context.onReset() !== false);
        return (true && pd_0_0);
    };
    _View_TaskOptionsComponent2.prototype._handle_click_8_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_8_0 = (this.parent.context.cancel() !== false);
        return (true && pd_8_0);
    };
    return _View_TaskOptionsComponent2;
}(import3.AppView));
function viewFactory_TaskOptionsComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent3 = (function (_super) {
    __extends(_View_TaskOptionsComponent3, _super);
    function _View_TaskOptionsComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent3, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_TaskOptionsComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'style', 'padding: 2px 16px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n					', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_2_3 = new import24.Wrapper_NgSwitch();
        this._text_3 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import5.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this._appEl_4, viewFactory_TaskOptionsComponent4);
        this._NgSwitchCase_4_6 = new import24.Wrapper_NgSwitchCase(this._appEl_4.vcRef, this._TemplateRef_4_5, this._NgSwitch_2_3.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_6 = new import5.AppElement(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this._appEl_6, viewFactory_TaskOptionsComponent5);
        this._NgSwitchCase_6_6 = new import24.Wrapper_NgSwitchCase(this._appEl_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_2_3.context);
        this._text_7 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_8 = new import5.AppElement(8, 2, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8, viewFactory_TaskOptionsComponent6);
        this._NgSwitchCase_8_6 = new import24.Wrapper_NgSwitchCase(this._appEl_8.vcRef, this._TemplateRef_8_5, this._NgSwitch_2_3.context);
        this._text_9 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_10 = new import5.AppElement(10, 2, this, this._anchor_10);
        this._TemplateRef_10_5 = new import13.TemplateRef_(this._appEl_10, viewFactory_TaskOptionsComponent7);
        this._NgSwitchCase_10_6 = new import24.Wrapper_NgSwitchCase(this._appEl_10.vcRef, this._TemplateRef_10_5, this._NgSwitch_2_3.context);
        this._text_11 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_12 = new import5.AppElement(12, 2, this, this._anchor_12);
        this._TemplateRef_12_5 = new import13.TemplateRef_(this._appEl_12, viewFactory_TaskOptionsComponent9);
        this._NgSwitchCase_12_6 = new import24.Wrapper_NgSwitchCase(this._appEl_12.vcRef, this._TemplateRef_12_5, this._NgSwitch_2_3.context);
        this._text_13 = this.renderer.createText(this._el_2, '\n\n						', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_14 = new import5.AppElement(14, 2, this, this._anchor_14);
        this._TemplateRef_14_5 = new import13.TemplateRef_(this._appEl_14, viewFactory_TaskOptionsComponent10);
        this._NgSwitchCase_14_6 = new import24.Wrapper_NgSwitchCase(this._appEl_14.vcRef, this._TemplateRef_14_5, this._NgSwitch_2_3.context);
        this._text_15 = this.renderer.createText(this._el_2, '\n					', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n				', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16
        ], [], []);
        return null;
    };
    _View_TaskOptionsComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import25.NgSwitchCase) && (4 === requestNodeIndex))) {
            return this._NgSwitchCase_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import25.NgSwitchCase) && (6 === requestNodeIndex))) {
            return this._NgSwitchCase_6_6.context;
        }
        if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import25.NgSwitchCase) && (8 === requestNodeIndex))) {
            return this._NgSwitchCase_8_6.context;
        }
        if (((token === import13.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import25.NgSwitchCase) && (10 === requestNodeIndex))) {
            return this._NgSwitchCase_10_6.context;
        }
        if (((token === import13.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import25.NgSwitchCase) && (12 === requestNodeIndex))) {
            return this._NgSwitchCase_12_6.context;
        }
        if (((token === import13.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import25.NgSwitchCase) && (14 === requestNodeIndex))) {
            return this._NgSwitchCase_14_6.context;
        }
        if (((token === import25.NgSwitch) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._NgSwitch_2_3.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit.type;
        this._NgSwitch_2_3.check_ngSwitch(currVal_2_0_0, throwOnChange, false);
        this._NgSwitch_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = 'text';
        this._NgSwitchCase_4_6.check_ngSwitchCase(currVal_4_0_0, throwOnChange, false);
        this._NgSwitchCase_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = 'password';
        this._NgSwitchCase_6_6.check_ngSwitchCase(currVal_6_0_0, throwOnChange, false);
        this._NgSwitchCase_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = 'hidden';
        this._NgSwitchCase_8_6.check_ngSwitchCase(currVal_8_0_0, throwOnChange, false);
        this._NgSwitchCase_8_6.detectChangesInInputProps(this, this._anchor_8, throwOnChange);
        var currVal_10_0_0 = 'select';
        this._NgSwitchCase_10_6.check_ngSwitchCase(currVal_10_0_0, throwOnChange, false);
        this._NgSwitchCase_10_6.detectChangesInInputProps(this, this._anchor_10, throwOnChange);
        var currVal_12_0_0 = 'checkbox';
        this._NgSwitchCase_12_6.check_ngSwitchCase(currVal_12_0_0, throwOnChange, false);
        this._NgSwitchCase_12_6.detectChangesInInputProps(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = 'textarea';
        this._NgSwitchCase_14_6.check_ngSwitchCase(currVal_14_0_0, throwOnChange, false);
        this._NgSwitchCase_14_6.detectChangesInInputProps(this, this._anchor_14, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgSwitch_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TaskOptionsComponent3;
}(import3.AppView));
function viewFactory_TaskOptionsComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent4 = (function (_super) {
    __extends(_View_TaskOptionsComponent4, _super);
    function _View_TaskOptionsComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent4, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'label', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'input', new import2.InlineArray8(6, 'autocomplete', 'off', 'class', 'form-control', 'type', 'text'), null);
        this._DefaultValueAccessor_5_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._FormControlName_5_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._FormControlName_5_5.context;
        this._NgControlStatus_5_7 = new import17.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'input', this.eventHandler(this._handle_input_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'blur', this.eventHandler(this._handle_blur_5_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.DefaultValueAccessor) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import30.FormControlName) && (5 === requestNodeIndex))) {
            return this._FormControlName_5_5.context;
        }
        if (((token === import31.NgControl) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === import23.NgControlStatus) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_5_3.detectChangesInInputProps(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        this._FormControlName_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_12 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import2.interpolate(1, '', this.parent.context.$implicit.description, '');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_3, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_5, 'id', currVal_14);
            this._expr_14 = currVal_14;
        }
        this._DefaultValueAccessor_5_3.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._FormControlName_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent4.prototype.destroyInternal = function () {
        this._FormControlName_5_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent4.prototype._handle_input_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onChange($event.target.value) !== false);
        return (true && pd_5_0);
    };
    _View_TaskOptionsComponent4.prototype._handle_blur_5_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onTouched() !== false);
        return (true && pd_5_0);
    };
    return _View_TaskOptionsComponent4;
}(import3.AppView));
function viewFactory_TaskOptionsComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent5 = (function (_super) {
    __extends(_View_TaskOptionsComponent5, _super);
    function _View_TaskOptionsComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent5, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'label', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'input', new import2.InlineArray8(6, 'autocomplete', 'off', 'class', 'form-control', 'type', 'password'), null);
        this._DefaultValueAccessor_5_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._FormControlName_5_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._FormControlName_5_5.context;
        this._NgControlStatus_5_7 = new import17.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'input', this.eventHandler(this._handle_input_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'blur', this.eventHandler(this._handle_blur_5_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.DefaultValueAccessor) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import30.FormControlName) && (5 === requestNodeIndex))) {
            return this._FormControlName_5_5.context;
        }
        if (((token === import31.NgControl) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === import23.NgControlStatus) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_5_3.detectChangesInInputProps(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        this._FormControlName_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_12 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import2.interpolate(1, '', this.parent.context.$implicit.description, '');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_3, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_5, 'id', currVal_14);
            this._expr_14 = currVal_14;
        }
        this._DefaultValueAccessor_5_3.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._FormControlName_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent5.prototype.destroyInternal = function () {
        this._FormControlName_5_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent5.prototype._handle_input_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onChange($event.target.value) !== false);
        return (true && pd_5_0);
    };
    _View_TaskOptionsComponent5.prototype._handle_blur_5_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onTouched() !== false);
        return (true && pd_5_0);
    };
    return _View_TaskOptionsComponent5;
}(import3.AppView));
function viewFactory_TaskOptionsComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent6 = (function (_super) {
    __extends(_View_TaskOptionsComponent6, _super);
    function _View_TaskOptionsComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent6, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_9 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'input', new import2.InlineArray8(6, 'autocomplete', 'off', 'class', 'form-control', 'type', 'hidden'), null);
        this._DefaultValueAccessor_2_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._DefaultValueAccessor_2_3.context];
        this._FormControlName_2_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._FormControlName_2_5.context;
        this._NgControlStatus_2_7 = new import17.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'input', this.eventHandler(this._handle_input_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'blur', this.eventHandler(this._handle_blur_2_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.DefaultValueAccessor) && (2 === requestNodeIndex))) {
            return this._DefaultValueAccessor_2_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import30.FormControlName) && (2 === requestNodeIndex))) {
            return this._FormControlName_2_5.context;
        }
        if (((token === import31.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_6;
        }
        if (((token === import23.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_2_5.check_name(currVal_2_1_0, throwOnChange, false);
        this._FormControlName_2_5.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_9 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_9);
            this._expr_9 = currVal_9;
        }
        this._DefaultValueAccessor_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this._FormControlName_2_5.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent6.prototype.destroyInternal = function () {
        this._FormControlName_2_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent6.prototype._handle_input_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_2_0 = (this._DefaultValueAccessor_2_3.context.onChange($event.target.value) !== false);
        return (true && pd_2_0);
    };
    _View_TaskOptionsComponent6.prototype._handle_blur_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_2_0 = (this._DefaultValueAccessor_2_3.context.onTouched() !== false);
        return (true && pd_2_0);
    };
    return _View_TaskOptionsComponent6;
}(import3.AppView));
function viewFactory_TaskOptionsComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent7 = (function (_super) {
    __extends(_View_TaskOptionsComponent7, _super);
    function _View_TaskOptionsComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent7, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_18 = import1.UNINITIALIZED;
        this._expr_19 = import1.UNINITIALIZED;
        this._expr_20 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'label', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n							', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'select', new import2.InlineArray4(4, 'autocomplete', 'off', 'class', 'form-control'), null);
        this._SelectControlValueAccessor_5_3 = new import32.Wrapper_SelectControlValueAccessor(this.renderer, new import15.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._SelectControlValueAccessor_5_3.context];
        this._FormControlName_5_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._FormControlName_5_5.context;
        this._NgControlStatus_5_7 = new import17.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_5, '\n								', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_7 = new import5.AppElement(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import13.TemplateRef_(this._appEl_7, viewFactory_TaskOptionsComponent8);
        this._NgFor_7_6 = new import18.Wrapper_NgFor(this._appEl_7.vcRef, this._TemplateRef_7_5, this.parent.parent.parent.parentInjector.get(import19.IterableDiffers), this.parent.parent.parent.ref);
        this._text_8 = this.renderer.createText(this._el_5, '\n							', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'change', this.eventHandler(this._handle_change_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'blur', this.eventHandler(this._handle_blur_5_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._text_9
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import20.NgFor) && (7 === requestNodeIndex))) {
            return this._NgFor_7_6.context;
        }
        if (((token === import33.SelectControlValueAccessor) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._SelectControlValueAccessor_5_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import30.FormControlName) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._FormControlName_5_5.context;
        }
        if (((token === import31.NgControl) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgControl_5_6;
        }
        if (((token === import23.NgControlStatus) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgControlStatus_5_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        this._SelectControlValueAccessor_5_3.detectChangesInInputProps(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        this._FormControlName_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInInputProps(this, this._el_5, throwOnChange);
        var currVal_7_0_0 = this.parent.context.$implicit.values;
        this._NgFor_7_6.check_ngForOf(currVal_7_0_0, throwOnChange, false);
        this._NgFor_7_6.detectChangesInInputProps(this, this._anchor_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_18 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_18 == null) ? null : currVal_18.toString()));
            this._expr_18 = currVal_18;
        }
        var currVal_19 = import2.interpolate(1, '', this.parent.context.$implicit.description, '');
        if (import2.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_3, currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementProperty(this._el_5, 'id', currVal_20);
            this._expr_20 = currVal_20;
        }
        this._SelectControlValueAccessor_5_3.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._FormControlName_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent7.prototype.destroyInternal = function () {
        this._FormControlName_5_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent7.prototype._handle_change_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._SelectControlValueAccessor_5_3.context.onChange($event.target.value) !== false);
        return (true && pd_5_0);
    };
    _View_TaskOptionsComponent7.prototype._handle_blur_5_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._SelectControlValueAccessor_5_3.context.onTouched() !== false);
        return (true && pd_5_0);
    };
    return _View_TaskOptionsComponent7;
}(import3.AppView));
function viewFactory_TaskOptionsComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent8 = (function (_super) {
    __extends(_View_TaskOptionsComponent8, _super);
    function _View_TaskOptionsComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent8, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'option', import2.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import32.Wrapper_NgSelectOption(new import15.ElementRef(this._el_0), this.renderer, this.parent._SelectControlValueAccessor_5_3.context);
        this._NgSelectMultipleOption_0_4 = new import34.Wrapper_NgSelectMultipleOption(new import15.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TaskOptionsComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import35.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.value;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit.value;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgSelectOption_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this._NgSelectMultipleOption_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        var currVal_4 = import2.interpolate(1, '', this.context.$implicit.text, '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent8.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.context.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.context.ngOnDestroy();
    };
    return _View_TaskOptionsComponent8;
}(import3.AppView));
function viewFactory_TaskOptionsComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent8(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent9 = (function (_super) {
    __extends(_View_TaskOptionsComponent9, _super);
    function _View_TaskOptionsComponent9(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent9, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'checkbox'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'label', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n								', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'input', new import2.InlineArray4(4, 'autocomplete', 'off', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_4_3 = new import36.Wrapper_CheckboxControlValueAccessor(this.renderer, new import15.ElementRef(this._el_4));
        this._NG_VALUE_ACCESSOR_4_4 = [this._CheckboxControlValueAccessor_4_3.context];
        this._FormControlName_4_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_4_4);
        this._NgControl_4_6 = this._FormControlName_4_5.context;
        this._NgControlStatus_4_7 = new import17.Wrapper_NgControlStatus(this._NgControl_4_6);
        this._text_5 = this.renderer.createText(this._el_2, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_4, 'change', this.eventHandler(this._handle_change_4_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_4, 'blur', this.eventHandler(this._handle_blur_4_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.CheckboxControlValueAccessor) && (4 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_4_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (4 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_4_4;
        }
        if (((token === import30.FormControlName) && (4 === requestNodeIndex))) {
            return this._FormControlName_4_5.context;
        }
        if (((token === import31.NgControl) && (4 === requestNodeIndex))) {
            return this._NgControl_4_6;
        }
        if (((token === import23.NgControlStatus) && (4 === requestNodeIndex))) {
            return this._NgControlStatus_4_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        this._CheckboxControlValueAccessor_4_3.detectChangesInInputProps(this, this._el_4, throwOnChange);
        var currVal_4_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_4_5.check_name(currVal_4_1_0, throwOnChange, false);
        this._FormControlName_4_5.detectChangesInInputProps(this, this._el_4, throwOnChange);
        this._NgControlStatus_4_7.detectChangesInInputProps(this, this._el_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_12 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementProperty(this._el_4, 'id', currVal_13);
            this._expr_13 = currVal_13;
        }
        this._CheckboxControlValueAccessor_4_3.detectChangesInHostProps(this, this._el_4, throwOnChange);
        this._FormControlName_4_5.detectChangesInHostProps(this, this._el_4, throwOnChange);
        this._NgControlStatus_4_7.detectChangesInHostProps(this, this._el_4, throwOnChange);
        var currVal_14 = import2.interpolate(1, '\n								', this.parent.context.$implicit.description, '\n							');
        if (import2.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_5, currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent9.prototype.destroyInternal = function () {
        this._FormControlName_4_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent9.prototype._handle_change_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_4_0 = (this._CheckboxControlValueAccessor_4_3.context.onChange($event.target.checked) !== false);
        return (true && pd_4_0);
    };
    _View_TaskOptionsComponent9.prototype._handle_blur_4_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_4_0 = (this._CheckboxControlValueAccessor_4_3.context.onTouched() !== false);
        return (true && pd_4_0);
    };
    return _View_TaskOptionsComponent9;
}(import3.AppView));
function viewFactory_TaskOptionsComponent9(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent9(viewUtils, parentInjector, declarationEl);
}
var _View_TaskOptionsComponent10 = (function (_super) {
    __extends(_View_TaskOptionsComponent10, _super);
    function _View_TaskOptionsComponent10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TaskOptionsComponent10, renderType_TaskOptionsComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    _View_TaskOptionsComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'label', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n							', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'textarea', new import2.InlineArray8(8, 'autocomplete', 'off', 'class', 'form-control', 'rows', '5', 'type', 'text'), null);
        this._DefaultValueAccessor_5_3 = new import26.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._FormControlName_5_5 = new import27.Wrapper_FormControlName(this.parent.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._FormControlName_5_5.context;
        this._NgControlStatus_5_7 = new import17.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_0, '\n						', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'input', this.eventHandler(this._handle_input_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'blur', this.eventHandler(this._handle_blur_5_1.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TaskOptionsComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.DefaultValueAccessor) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import30.FormControlName) && (5 === requestNodeIndex))) {
            return this._FormControlName_5_5.context;
        }
        if (((token === import31.NgControl) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === import23.NgControlStatus) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        return notFoundResult;
    };
    _View_TaskOptionsComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_5_3.detectChangesInInputProps(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this.parent.context.$implicit.id;
        this._FormControlName_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        this._FormControlName_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_12 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_12 == null) ? null : currVal_12.toString()));
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import2.interpolate(1, '', this.parent.context.$implicit.description, '');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_3, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this.parent.context.$implicit.id;
        if (import2.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_5, 'id', currVal_14);
            this._expr_14 = currVal_14;
        }
        this._DefaultValueAccessor_5_3.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._FormControlName_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TaskOptionsComponent10.prototype.destroyInternal = function () {
        this._FormControlName_5_5.context.ngOnDestroy();
    };
    _View_TaskOptionsComponent10.prototype._handle_input_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onChange($event.target.value) !== false);
        return (true && pd_5_0);
    };
    _View_TaskOptionsComponent10.prototype._handle_blur_5_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_5_0 = (this._DefaultValueAccessor_5_3.context.onTouched() !== false);
        return (true && pd_5_0);
    };
    return _View_TaskOptionsComponent10;
}(import3.AppView));
function viewFactory_TaskOptionsComponent10(viewUtils, parentInjector, declarationEl) {
    return new _View_TaskOptionsComponent10(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=task-options.component.ngfactory.js.map