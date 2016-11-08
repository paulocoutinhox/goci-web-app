"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/project-task-item/project-task-item.component');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view_utils');
var import3 = require('@angular/core/src/linker/view');
var import5 = require('@angular/core/src/linker/element');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('@angular/router/src/router');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('../../../node_modules/@angular/common/src/directives/ng_switch.ngfactory');
var import16 = require('@angular/common/src/directives/ng_switch');
var Wrapper_ProjectTaskItemComponent = (function () {
    function Wrapper_ProjectTaskItemComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.ProjectTaskItemComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_ProjectTaskItemComponent.prototype.check_project = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.project = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ProjectTaskItemComponent.prototype.check_task = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.task = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_ProjectTaskItemComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ProjectTaskItemComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ProjectTaskItemComponent;
}());
exports.Wrapper_ProjectTaskItemComponent = Wrapper_ProjectTaskItemComponent;
var renderType_ProjectTaskItemComponent_Host = null;
var _View_ProjectTaskItemComponent_Host0 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent_Host0, _super);
    function _View_ProjectTaskItemComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent_Host0, renderType_ProjectTaskItemComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectTaskItemComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'project-task-item', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProjectTaskItemComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProjectTaskItemComponent_0_4 = new Wrapper_ProjectTaskItemComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.Router));
        this._appEl_0.initComponent(this._ProjectTaskItemComponent_0_4.context, [], compView_0);
        compView_0.create(this._ProjectTaskItemComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProjectTaskItemComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProjectTaskItemComponent) && (0 === requestNodeIndex))) {
            return this._ProjectTaskItemComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ProjectTaskItemComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProjectTaskItemComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ProjectTaskItemComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent_Host0;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectTaskItemComponent_Host === null)) {
        (renderType_ProjectTaskItemComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProjectTaskItemComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ProjectTaskItemComponentNgFactory = new import11.ComponentFactory('project-task-item', viewFactory_ProjectTaskItemComponent_Host0, import0.ProjectTaskItemComponent);
var styles_ProjectTaskItemComponent = [];
var renderType_ProjectTaskItemComponent = null;
var _View_ProjectTaskItemComponent0 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent0, _super);
    function _View_ProjectTaskItemComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent0, renderType_ProjectTaskItemComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_81 = import1.UNINITIALIZED;
        this._expr_82 = import1.UNINITIALIZED;
        this._expr_83 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'h4', new import2.InlineArray2(2, 'class', 'list-group-item-heading'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'list-group-item-text'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_3, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_5, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n			', null);
        this._el_9 = import2.createRenderElement(this.renderer, this._el_7, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Description:', null);
        this._text_11 = this.renderer.createText(this._el_7, '', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n\n		', null);
        this._el_13 = import2.createRenderElement(this.renderer, this._el_5, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n			', null);
        this._el_15 = import2.createRenderElement(this.renderer, this._el_13, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Steps:', null);
        this._text_17 = this.renderer.createText(this._el_13, '', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n\n		', null);
        this._el_19 = import2.createRenderElement(this.renderer, this._el_5, 'hr', new import2.InlineArray2(2, 'style', 'margin: 8px 0'), null);
        this._text_20 = this.renderer.createText(this._el_5, '\n\n		', null);
        this._el_21 = import2.createRenderElement(this.renderer, this._el_5, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '\n			', null);
        this._el_23 = import2.createRenderElement(this.renderer, this._el_21, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, 'Duration:', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n			', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._appEl_26 = new import5.AppElement(26, 21, this, this._anchor_26);
        this._TemplateRef_26_5 = new import13.TemplateRef_(this._appEl_26, viewFactory_ProjectTaskItemComponent1);
        this._NgIf_26_6 = new import12.Wrapper_NgIf(this._appEl_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_21, '\n			', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._appEl_28 = new import5.AppElement(28, 21, this, this._anchor_28);
        this._TemplateRef_28_5 = new import13.TemplateRef_(this._appEl_28, viewFactory_ProjectTaskItemComponent2);
        this._NgIf_28_6 = new import12.Wrapper_NgIf(this._appEl_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_21, '\n		', null);
        this._text_30 = this.renderer.createText(this._el_5, '\n\n		', null);
        this._el_31 = import2.createRenderElement(this.renderer, this._el_5, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, '\n			', null);
        this._el_33 = import2.createRenderElement(this.renderer, this._el_31, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, 'Status:', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n			', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._appEl_36 = new import5.AppElement(36, 31, this, this._anchor_36);
        this._TemplateRef_36_5 = new import13.TemplateRef_(this._appEl_36, viewFactory_ProjectTaskItemComponent3);
        this._NgIf_36_6 = new import12.Wrapper_NgIf(this._appEl_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(this._el_31, '\n			', null);
        this._anchor_38 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._appEl_38 = new import5.AppElement(38, 31, this, this._anchor_38);
        this._TemplateRef_38_5 = new import13.TemplateRef_(this._appEl_38, viewFactory_ProjectTaskItemComponent9);
        this._NgIf_38_6 = new import12.Wrapper_NgIf(this._appEl_38.vcRef, this._TemplateRef_38_5);
        this._text_39 = this.renderer.createText(this._el_31, '\n		', null);
        this._text_40 = this.renderer.createText(this._el_5, '\n\n		', null);
        this._el_41 = import2.createRenderElement(this.renderer, this._el_5, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, '\n			', null);
        this._el_43 = import2.createRenderElement(this.renderer, this._el_41, 'strong', import2.EMPTY_INLINE_ARRAY, null);
        this._text_44 = this.renderer.createText(this._el_43, 'Progress:', null);
        this._text_45 = this.renderer.createText(this._el_41, ' ', null);
        this._anchor_46 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._appEl_46 = new import5.AppElement(46, 41, this, this._anchor_46);
        this._TemplateRef_46_5 = new import13.TemplateRef_(this._appEl_46, viewFactory_ProjectTaskItemComponent10);
        this._NgIf_46_6 = new import12.Wrapper_NgIf(this._appEl_46.vcRef, this._TemplateRef_46_5);
        this._text_47 = this.renderer.createText(this._el_41, '\n			', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._appEl_48 = new import5.AppElement(48, 41, this, this._anchor_48);
        this._TemplateRef_48_5 = new import13.TemplateRef_(this._appEl_48, viewFactory_ProjectTaskItemComponent11);
        this._NgIf_48_6 = new import12.Wrapper_NgIf(this._appEl_48.vcRef, this._TemplateRef_48_5);
        this._text_49 = this.renderer.createText(this._el_41, '\n		', null);
        this._text_50 = this.renderer.createText(this._el_5, '\n	', null);
        this._text_51 = this.renderer.createText(this._el_3, '\n\n	', null);
        this._el_52 = import2.createRenderElement(this.renderer, this._el_3, 'br', import2.EMPTY_INLINE_ARRAY, null);
        this._text_53 = this.renderer.createText(this._el_3, '\n\n	', null);
        this._el_54 = import2.createRenderElement(this.renderer, this._el_3, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_55 = this.renderer.createText(this._el_54, '\n		', null);
        this._el_56 = import2.createRenderElement(this.renderer, this._el_54, 'button', new import2.InlineArray4(4, 'class', 'btn btn-success', 'type', 'button'), null);
        this._text_57 = this.renderer.createText(this._el_56, 'Run', null);
        this._text_58 = this.renderer.createText(this._el_54, '\n		', null);
        this._el_59 = import2.createRenderElement(this.renderer, this._el_54, 'button', new import2.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_60 = this.renderer.createText(this._el_59, 'View', null);
        this._text_61 = this.renderer.createText(this._el_54, '\n	', null);
        this._text_62 = this.renderer.createText(this._el_3, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_56, 'click', this.eventHandler(this._handle_click_56_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_59, 'click', this.eventHandler(this._handle_click_59_0.bind(this)));
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
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._anchor_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._anchor_46,
            this._text_47,
            this._anchor_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._text_62
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ProjectTaskItemComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import14.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import13.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import14.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import13.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import14.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import13.TemplateRef) && (38 === requestNodeIndex))) {
            return this._TemplateRef_38_5;
        }
        if (((token === import14.NgIf) && (38 === requestNodeIndex))) {
            return this._NgIf_38_6.context;
        }
        if (((token === import13.TemplateRef) && (46 === requestNodeIndex))) {
            return this._TemplateRef_46_5;
        }
        if (((token === import14.NgIf) && (46 === requestNodeIndex))) {
            return this._NgIf_46_6.context;
        }
        if (((token === import13.TemplateRef) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === import14.NgIf) && (48 === requestNodeIndex))) {
            return this._NgIf_48_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectTaskItemComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_26_0_0 = this.context.lastJob;
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.detectChangesInInputProps(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = !this.context.lastJob;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.detectChangesInInputProps(this, this._anchor_28, throwOnChange);
        var currVal_36_0_0 = this.context.lastJob;
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.detectChangesInInputProps(this, this._anchor_36, throwOnChange);
        var currVal_38_0_0 = !this.context.lastJob;
        this._NgIf_38_6.check_ngIf(currVal_38_0_0, throwOnChange, false);
        this._NgIf_38_6.detectChangesInInputProps(this, this._anchor_38, throwOnChange);
        var currVal_46_0_0 = this.context.lastJob;
        this._NgIf_46_6.check_ngIf(currVal_46_0_0, throwOnChange, false);
        this._NgIf_46_6.detectChangesInInputProps(this, this._anchor_46, throwOnChange);
        var currVal_48_0_0 = !this.context.lastJob;
        this._NgIf_48_6.check_ngIf(currVal_48_0_0, throwOnChange, false);
        this._NgIf_48_6.detectChangesInInputProps(this, this._anchor_48, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_81 = import2.interpolate(1, '', this.context.task.name, '');
        if (import2.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setText(this._text_1, currVal_81);
            this._expr_81 = currVal_81;
        }
        var currVal_82 = import2.interpolate(1, ' ', this.context.task.description, '\n		');
        if (import2.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setText(this._text_11, currVal_82);
            this._expr_82 = currVal_82;
        }
        var currVal_83 = import2.interpolate(1, ' ', ((this.context.task.steps == null) ? null : this.context.task.steps.length), '\n		');
        if (import2.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setText(this._text_17, currVal_83);
            this._expr_83 = currVal_83;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProjectTaskItemComponent0.prototype._handle_click_56_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_56_0 = (this.context.sendShowTaskOptionsEvent() !== false);
        return (true && pd_56_0);
    };
    _View_ProjectTaskItemComponent0.prototype._handle_click_59_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_59_0 = (this.context.view(this.context.task.id) !== false);
        return (true && pd_59_0);
    };
    return _View_ProjectTaskItemComponent0;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectTaskItemComponent === null)) {
        (renderType_ProjectTaskItemComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_ProjectTaskItemComponent, {}));
    }
    return new _View_ProjectTaskItemComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ProjectTaskItemComponent0 = viewFactory_ProjectTaskItemComponent0;
var _View_ProjectTaskItemComponent1 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent1, _super);
    function _View_ProjectTaskItemComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent1, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.context.lastJob == null) ? null : this.parent.context.lastJob.duration), 's');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent1;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent2 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent2, _super);
    function _View_ProjectTaskItemComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent2, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectTaskItemComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'none', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ProjectTaskItemComponent2;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent3 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent3, _super);
    function _View_ProjectTaskItemComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent3, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectTaskItemComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_0_3 = new import15.Wrapper_NgSwitch();
        this._text_1 = this.renderer.createText(this._el_0, '\n				', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_ProjectTaskItemComponent4);
        this._NgSwitchCase_2_6 = new import15.Wrapper_NgSwitchCase(this._appEl_2.vcRef, this._TemplateRef_2_5, this._NgSwitch_0_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n				', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_4 = new import5.AppElement(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this._appEl_4, viewFactory_ProjectTaskItemComponent5);
        this._NgSwitchCase_4_6 = new import15.Wrapper_NgSwitchCase(this._appEl_4.vcRef, this._TemplateRef_4_5, this._NgSwitch_0_3.context);
        this._text_5 = this.renderer.createText(this._el_0, '\n				', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_6 = new import5.AppElement(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this._appEl_6, viewFactory_ProjectTaskItemComponent6);
        this._NgSwitchCase_6_6 = new import15.Wrapper_NgSwitchCase(this._appEl_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_0_3.context);
        this._text_7 = this.renderer.createText(this._el_0, '\n				', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_8 = new import5.AppElement(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8, viewFactory_ProjectTaskItemComponent7);
        this._NgSwitchCase_8_6 = new import15.Wrapper_NgSwitchCase(this._appEl_8.vcRef, this._TemplateRef_8_5, this._NgSwitch_0_3.context);
        this._text_9 = this.renderer.createText(this._el_0, '\n				', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_10 = new import5.AppElement(10, 0, this, this._anchor_10);
        this._TemplateRef_10_5 = new import13.TemplateRef_(this._appEl_10, viewFactory_ProjectTaskItemComponent8);
        this._NgSwitchDefault_10_6 = new import15.Wrapper_NgSwitchDefault(this._appEl_10.vcRef, this._TemplateRef_10_5, this._NgSwitch_0_3.context);
        this._text_11 = this.renderer.createText(this._el_0, '\n			', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._anchor_10,
            this._text_11
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgSwitchCase) && (2 === requestNodeIndex))) {
            return this._NgSwitchCase_2_6.context;
        }
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import16.NgSwitchCase) && (4 === requestNodeIndex))) {
            return this._NgSwitchCase_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import16.NgSwitchCase) && (6 === requestNodeIndex))) {
            return this._NgSwitchCase_6_6.context;
        }
        if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import16.NgSwitchCase) && (8 === requestNodeIndex))) {
            return this._NgSwitchCase_8_6.context;
        }
        if (((token === import13.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import16.NgSwitchDefault) && (10 === requestNodeIndex))) {
            return this._NgSwitchDefault_10_6.context;
        }
        if (((token === import16.NgSwitch) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._NgSwitch_0_3.context;
        }
        return notFoundResult;
    };
    _View_ProjectTaskItemComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = ((this.parent.context.lastJob == null) ? null : this.parent.context.lastJob.status);
        this._NgSwitch_0_3.check_ngSwitch(currVal_0_0_0, throwOnChange, false);
        this._NgSwitch_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        var currVal_2_0_0 = 'onqueue';
        this._NgSwitchCase_2_6.check_ngSwitchCase(currVal_2_0_0, throwOnChange, false);
        this._NgSwitchCase_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        var currVal_4_0_0 = 'running';
        this._NgSwitchCase_4_6.check_ngSwitchCase(currVal_4_0_0, throwOnChange, false);
        this._NgSwitchCase_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = 'success';
        this._NgSwitchCase_6_6.check_ngSwitchCase(currVal_6_0_0, throwOnChange, false);
        this._NgSwitchCase_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = 'error';
        this._NgSwitchCase_8_6.check_ngSwitchCase(currVal_8_0_0, throwOnChange, false);
        this._NgSwitchCase_8_6.detectChangesInInputProps(this, this._anchor_8, throwOnChange);
        this._NgSwitchDefault_10_6.detectChangesInInputProps(this, this._anchor_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgSwitch_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent3;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent4 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent4, _super);
    function _View_ProjectTaskItemComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent4, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', new import2.InlineArray2(2, 'class', 'label label-primary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.parent.context.lastJob == null) ? null : this.parent.parent.context.lastJob.status), '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent4;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent5 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent5, _super);
    function _View_ProjectTaskItemComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent5, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', new import2.InlineArray2(2, 'class', 'label label-warning'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.parent.context.lastJob == null) ? null : this.parent.parent.context.lastJob.status), '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent5;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent6 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent6, _super);
    function _View_ProjectTaskItemComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent6, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', new import2.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.parent.context.lastJob == null) ? null : this.parent.parent.context.lastJob.status), '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent6;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent7 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent7, _super);
    function _View_ProjectTaskItemComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent7, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', new import2.InlineArray2(2, 'class', 'label label-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.parent.context.lastJob == null) ? null : this.parent.parent.context.lastJob.status), '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent7;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent8 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent8, _super);
    function _View_ProjectTaskItemComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent8, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', new import2.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', ((this.parent.parent.context.lastJob == null) ? null : this.parent.parent.context.lastJob.status), '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent8;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent8(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent9 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent9, _super);
    function _View_ProjectTaskItemComponent9(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent9, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectTaskItemComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'none', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ProjectTaskItemComponent9;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent9(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent9(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent10 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent10, _super);
    function _View_ProjectTaskItemComponent10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent10, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    _View_ProjectTaskItemComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ProjectTaskItemComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import2.interpolate(1, '', this.parent.context.lastJob.progress, '%');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectTaskItemComponent10;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent10(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent10(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectTaskItemComponent11 = (function (_super) {
    __extends(_View_ProjectTaskItemComponent11, _super);
    function _View_ProjectTaskItemComponent11(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectTaskItemComponent11, renderType_ProjectTaskItemComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectTaskItemComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'none', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ProjectTaskItemComponent11;
}(import3.AppView));
function viewFactory_ProjectTaskItemComponent11(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectTaskItemComponent11(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=project-task-item.component.ngfactory.js.map