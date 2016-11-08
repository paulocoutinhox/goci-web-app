"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/job-list/job-list.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('@angular/router/src/router');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('./job-list.component.css.shim');
var import13 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import14 = require('../../../../src/app/pipes/timestampFormat');
var import15 = require('@angular/core/src/linker/template_ref');
var import16 = require('@angular/common/src/directives/ng_if');
var import17 = require('../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import18 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import19 = require('@angular/common/src/directives/ng_for');
var import20 = require('../../../node_modules/@angular/common/src/directives/ng_switch.ngfactory');
var import21 = require('@angular/common/src/directives/ng_switch');
var import22 = require('@angular/core/src/security');
var import23 = require('../../../node_modules/ng2-charts/components/charts/charts.ngfactory');
var import24 = require('@angular/core/src/linker/element_ref');
var import25 = require('ng2-charts/components/charts/charts');
var Wrapper_JobListComponent = (function () {
    function Wrapper_JobListComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.JobListComponent(p0, p1);
    }
    Wrapper_JobListComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_JobListComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_JobListComponent;
}());
exports.Wrapper_JobListComponent = Wrapper_JobListComponent;
var renderType_JobListComponent_Host = null;
var _View_JobListComponent_Host0 = (function (_super) {
    __extends(_View_JobListComponent_Host0, _super);
    function _View_JobListComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent_Host0, renderType_JobListComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'job-list', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_JobListComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._JobListComponent_0_4 = new Wrapper_JobListComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.Router));
        this._appEl_0.initComponent(this._JobListComponent_0_4.context, [], compView_0);
        compView_0.create(this._JobListComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_JobListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.JobListComponent) && (0 === requestNodeIndex))) {
            return this._JobListComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_JobListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._JobListComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._JobListComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent_Host0;
}(import1.AppView));
function viewFactory_JobListComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JobListComponent_Host === null)) {
        (renderType_JobListComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_JobListComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.JobListComponentNgFactory = new import11.ComponentFactory('job-list', viewFactory_JobListComponent_Host0, import0.JobListComponent);
var styles_JobListComponent = [import12.styles];
var renderType_JobListComponent = null;
var _View_JobListComponent0 = (function (_super) {
    __extends(_View_JobListComponent0, _super);
    function _View_JobListComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent0, renderType_JobListComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'job-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'col-md-8 col-lg-8'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_4 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray4(4, 'class', 'panel panel-default', 'id', 'options-container'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'h3', new import4.InlineArray2(2, 'class', 'options-container-title'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Job List', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_7, 'button', new import4.InlineArray4(4, 'class', 'btn btn-default', 'type', 'button'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Back', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._text_17 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_18 = new import3.AppElement(18, 2, this, this._anchor_18);
        this._TemplateRef_18_5 = new import15.TemplateRef_(this._appEl_18, viewFactory_JobListComponent1);
        this._NgIf_18_6 = new import13.Wrapper_NgIf(this._appEl_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_20 = new import3.AppElement(20, 2, this, this._anchor_20);
        this._TemplateRef_20_5 = new import15.TemplateRef_(this._appEl_20, viewFactory_JobListComponent13);
        this._NgIf_20_6 = new import13.Wrapper_NgIf(this._appEl_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_22 = new import3.AppElement(22, 2, this, this._anchor_22);
        this._TemplateRef_22_5 = new import15.TemplateRef_(this._appEl_22, viewFactory_JobListComponent14);
        this._NgIf_22_6 = new import13.Wrapper_NgIf(this._appEl_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_24 = new import3.AppElement(24, 2, this, this._anchor_24);
        this._TemplateRef_24_5 = new import15.TemplateRef_(this._appEl_24, viewFactory_JobListComponent15);
        this._NgIf_24_6 = new import13.Wrapper_NgIf(this._appEl_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_27 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'col-md-4 col-lg-4'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._appEl_29 = new import3.AppElement(29, 27, this, this._anchor_29);
        this._TemplateRef_29_5 = new import15.TemplateRef_(this._appEl_29, viewFactory_JobListComponent16);
        this._NgIf_29_6 = new import13.Wrapper_NgIf(this._appEl_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_27, '\n\n        ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._appEl_31 = new import3.AppElement(31, 27, this, this._anchor_31);
        this._TemplateRef_31_5 = new import15.TemplateRef_(this._appEl_31, viewFactory_JobListComponent17);
        this._NgIf_31_6 = new import13.Wrapper_NgIf(this._appEl_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_27, '\n\n        ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._appEl_33 = new import3.AppElement(33, 27, this, this._anchor_33);
        this._TemplateRef_33_5 = new import15.TemplateRef_(this._appEl_33, viewFactory_JobListComponent18);
        this._NgIf_33_6 = new import13.Wrapper_NgIf(this._appEl_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_27, '\n\n        ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._appEl_35 = new import3.AppElement(35, 27, this, this._anchor_35);
        this._TemplateRef_35_5 = new import15.TemplateRef_(this._appEl_35, viewFactory_JobListComponent19);
        this._NgIf_35_6 = new import13.Wrapper_NgIf(this._appEl_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        this._pipe_timestampFormat_0 = new import14.TimestampFormat();
        this.init([], [
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
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._text_37
        ], [disposable_0], []);
        return null;
    };
    _View_JobListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import16.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6.context;
        }
        if (((token === import15.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import16.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import15.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import16.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import15.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import16.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import15.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import16.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import15.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import16.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import15.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import16.NgIf) && (35 === requestNodeIndex))) {
            return this._NgIf_35_6.context;
        }
        return notFoundResult;
    };
    _View_JobListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = this.context.showData;
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.detectChangesInInputProps(this, this._anchor_18, throwOnChange);
        var currVal_20_0_0 = this.context.showEmptyData;
        this._NgIf_20_6.check_ngIf(currVal_20_0_0, throwOnChange, false);
        this._NgIf_20_6.detectChangesInInputProps(this, this._anchor_20, throwOnChange);
        var currVal_22_0_0 = this.context.showError;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.detectChangesInInputProps(this, this._anchor_22, throwOnChange);
        var currVal_24_0_0 = this.context.showLoading;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.detectChangesInInputProps(this, this._anchor_24, throwOnChange);
        var currVal_29_0_0 = this.context.showData;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.detectChangesInInputProps(this, this._anchor_29, throwOnChange);
        var currVal_31_0_0 = this.context.showEmptyData;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.detectChangesInInputProps(this, this._anchor_31, throwOnChange);
        var currVal_33_0_0 = this.context.showError;
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.detectChangesInInputProps(this, this._anchor_33, throwOnChange);
        var currVal_35_0_0 = this.context.showLoading;
        this._NgIf_35_6.check_ngIf(currVal_35_0_0, throwOnChange, false);
        this._NgIf_35_6.detectChangesInInputProps(this, this._anchor_35, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_JobListComponent0.prototype._handle_click_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_12_0 = (this.context.back() !== false);
        return (true && pd_12_0);
    };
    return _View_JobListComponent0;
}(import1.AppView));
function viewFactory_JobListComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JobListComponent === null)) {
        (renderType_JobListComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.Emulated, styles_JobListComponent, {}));
    }
    return new _View_JobListComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_JobListComponent0 = viewFactory_JobListComponent0;
var _View_JobListComponent1 = (function (_super) {
    __extends(_View_JobListComponent1, _super);
    function _View_JobListComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent1, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'list-group', 'id', 'job-list'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import15.TemplateRef_(this._appEl_4, viewFactory_JobListComponent2);
        this._NgFor_4_6 = new import17.Wrapper_NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parent.parentInjector.get(import18.IterableDiffers), this.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_JobListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import19.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    _View_JobListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parent.context.jobList;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent1;
}(import1.AppView));
function viewFactory_JobListComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent2 = (function (_super) {
    __extends(_View_JobListComponent2, _super);
    function _View_JobListComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent2, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        this._expr_113 = import7.UNINITIALIZED;
        this._expr_115 = import7.UNINITIALIZED;
    }
    _View_JobListComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'job-row list-group-item'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h4', new import4.InlineArray2(2, 'class', 'list-group-item-heading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'a', new import4.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'list-group-item-text'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                            ', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_10, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Job: ', null);
        this._text_14 = this.renderer.createText(this._el_10, '', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                            ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_16, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Created at:', null);
        this._text_20 = this.renderer.createText(this._el_16, '', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                            ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_22, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Started at:', null);
        this._text_26 = this.renderer.createText(this._el_22, '', null);
        this._text_27 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                            ', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_28, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_31 = this.renderer.createText(this._el_30, 'Duration:', null);
        this._text_32 = this.renderer.createText(this._el_28, '', null);
        this._text_33 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_34 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_35 = this.renderer.createText(this._el_34, '\n                            ', null);
        this._el_36 = import4.createRenderElement(this.renderer, this._el_34, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_37 = this.renderer.createText(this._el_36, 'Status:', null);
        this._text_38 = this.renderer.createText(this._el_34, '\n                            ', null);
        this._el_39 = import4.createRenderElement(this.renderer, this._el_34, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_39_3 = new import20.Wrapper_NgSwitch();
        this._text_40 = this.renderer.createText(this._el_39, '\n							', null);
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._appEl_41 = new import3.AppElement(41, 39, this, this._anchor_41);
        this._TemplateRef_41_5 = new import15.TemplateRef_(this._appEl_41, viewFactory_JobListComponent3);
        this._NgSwitchCase_41_6 = new import20.Wrapper_NgSwitchCase(this._appEl_41.vcRef, this._TemplateRef_41_5, this._NgSwitch_39_3.context);
        this._text_42 = this.renderer.createText(this._el_39, '\n							', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._appEl_43 = new import3.AppElement(43, 39, this, this._anchor_43);
        this._TemplateRef_43_5 = new import15.TemplateRef_(this._appEl_43, viewFactory_JobListComponent4);
        this._NgSwitchCase_43_6 = new import20.Wrapper_NgSwitchCase(this._appEl_43.vcRef, this._TemplateRef_43_5, this._NgSwitch_39_3.context);
        this._text_44 = this.renderer.createText(this._el_39, '\n							', null);
        this._anchor_45 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._appEl_45 = new import3.AppElement(45, 39, this, this._anchor_45);
        this._TemplateRef_45_5 = new import15.TemplateRef_(this._appEl_45, viewFactory_JobListComponent5);
        this._NgSwitchCase_45_6 = new import20.Wrapper_NgSwitchCase(this._appEl_45.vcRef, this._TemplateRef_45_5, this._NgSwitch_39_3.context);
        this._text_46 = this.renderer.createText(this._el_39, '\n							', null);
        this._anchor_47 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._appEl_47 = new import3.AppElement(47, 39, this, this._anchor_47);
        this._TemplateRef_47_5 = new import15.TemplateRef_(this._appEl_47, viewFactory_JobListComponent6);
        this._NgSwitchCase_47_6 = new import20.Wrapper_NgSwitchCase(this._appEl_47.vcRef, this._TemplateRef_47_5, this._NgSwitch_39_3.context);
        this._text_48 = this.renderer.createText(this._el_39, '\n							', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._appEl_49 = new import3.AppElement(49, 39, this, this._anchor_49);
        this._TemplateRef_49_5 = new import15.TemplateRef_(this._appEl_49, viewFactory_JobListComponent7);
        this._NgSwitchDefault_49_6 = new import20.Wrapper_NgSwitchDefault(this._appEl_49.vcRef, this._TemplateRef_49_5, this._NgSwitch_39_3.context);
        this._text_50 = this.renderer.createText(this._el_39, '\n						', null);
        this._text_51 = this.renderer.createText(this._el_34, '\n                        ', null);
        this._text_52 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._el_53 = import4.createRenderElement(this.renderer, this._el_8, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_54 = this.renderer.createText(this._el_53, '\n                            ', null);
        this._el_55 = import4.createRenderElement(this.renderer, this._el_53, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_56 = this.renderer.createText(this._el_55, 'Progress:', null);
        this._text_57 = this.renderer.createText(this._el_53, '\n                            ', null);
        this._el_58 = import4.createRenderElement(this.renderer, this._el_53, 'div', new import4.InlineArray2(2, 'class', 'progress'), null);
        this._text_59 = this.renderer.createText(this._el_58, '\n							', null);
        this._el_60 = import4.createRenderElement(this.renderer, this._el_58, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_60_3 = new import20.Wrapper_NgSwitch();
        this._text_61 = this.renderer.createText(this._el_60, '\n								', null);
        this._anchor_62 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_62 = new import3.AppElement(62, 60, this, this._anchor_62);
        this._TemplateRef_62_5 = new import15.TemplateRef_(this._appEl_62, viewFactory_JobListComponent8);
        this._NgSwitchCase_62_6 = new import20.Wrapper_NgSwitchCase(this._appEl_62.vcRef, this._TemplateRef_62_5, this._NgSwitch_60_3.context);
        this._text_63 = this.renderer.createText(this._el_60, '\n\n								', null);
        this._anchor_64 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_64 = new import3.AppElement(64, 60, this, this._anchor_64);
        this._TemplateRef_64_5 = new import15.TemplateRef_(this._appEl_64, viewFactory_JobListComponent9);
        this._NgSwitchCase_64_6 = new import20.Wrapper_NgSwitchCase(this._appEl_64.vcRef, this._TemplateRef_64_5, this._NgSwitch_60_3.context);
        this._text_65 = this.renderer.createText(this._el_60, '\n\n								', null);
        this._anchor_66 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_66 = new import3.AppElement(66, 60, this, this._anchor_66);
        this._TemplateRef_66_5 = new import15.TemplateRef_(this._appEl_66, viewFactory_JobListComponent10);
        this._NgSwitchCase_66_6 = new import20.Wrapper_NgSwitchCase(this._appEl_66.vcRef, this._TemplateRef_66_5, this._NgSwitch_60_3.context);
        this._text_67 = this.renderer.createText(this._el_60, '\n\n								', null);
        this._anchor_68 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_68 = new import3.AppElement(68, 60, this, this._anchor_68);
        this._TemplateRef_68_5 = new import15.TemplateRef_(this._appEl_68, viewFactory_JobListComponent11);
        this._NgSwitchCase_68_6 = new import20.Wrapper_NgSwitchCase(this._appEl_68.vcRef, this._TemplateRef_68_5, this._NgSwitch_60_3.context);
        this._text_69 = this.renderer.createText(this._el_60, '\n\n								', null);
        this._anchor_70 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_70 = new import3.AppElement(70, 60, this, this._anchor_70);
        this._TemplateRef_70_5 = new import15.TemplateRef_(this._appEl_70, viewFactory_JobListComponent12);
        this._NgSwitchDefault_70_6 = new import20.Wrapper_NgSwitchDefault(this._appEl_70.vcRef, this._TemplateRef_70_5, this._NgSwitch_60_3.context);
        this._text_71 = this.renderer.createText(this._el_60, '\n							', null);
        this._text_72 = this.renderer.createText(this._el_58, '\n                            ', null);
        this._text_73 = this.renderer.createText(this._el_53, '\n                        ', null);
        this._text_74 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._text_75 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._pipe_timestampFormat_0_0 = import4.pureProxy1(this.parent.parent._pipe_timestampFormat_0.transform.bind(this.parent.parent._pipe_timestampFormat_0));
        this._pipe_timestampFormat_0_1 = import4.pureProxy1(this.parent.parent._pipe_timestampFormat_0.transform.bind(this.parent.parent._pipe_timestampFormat_0));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._anchor_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._anchor_45,
            this._text_46,
            this._anchor_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._anchor_62,
            this._text_63,
            this._anchor_64,
            this._text_65,
            this._anchor_66,
            this._text_67,
            this._anchor_68,
            this._text_69,
            this._anchor_70,
            this._text_71,
            this._text_72,
            this._text_73,
            this._text_74,
            this._text_75
        ], [disposable_0], []);
        return null;
    };
    _View_JobListComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (41 === requestNodeIndex))) {
            return this._TemplateRef_41_5;
        }
        if (((token === import21.NgSwitchCase) && (41 === requestNodeIndex))) {
            return this._NgSwitchCase_41_6.context;
        }
        if (((token === import15.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import21.NgSwitchCase) && (43 === requestNodeIndex))) {
            return this._NgSwitchCase_43_6.context;
        }
        if (((token === import15.TemplateRef) && (45 === requestNodeIndex))) {
            return this._TemplateRef_45_5;
        }
        if (((token === import21.NgSwitchCase) && (45 === requestNodeIndex))) {
            return this._NgSwitchCase_45_6.context;
        }
        if (((token === import15.TemplateRef) && (47 === requestNodeIndex))) {
            return this._TemplateRef_47_5;
        }
        if (((token === import21.NgSwitchCase) && (47 === requestNodeIndex))) {
            return this._NgSwitchCase_47_6.context;
        }
        if (((token === import15.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import21.NgSwitchDefault) && (49 === requestNodeIndex))) {
            return this._NgSwitchDefault_49_6.context;
        }
        if (((token === import21.NgSwitch) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NgSwitch_39_3.context;
        }
        if (((token === import15.TemplateRef) && (62 === requestNodeIndex))) {
            return this._TemplateRef_62_5;
        }
        if (((token === import21.NgSwitchCase) && (62 === requestNodeIndex))) {
            return this._NgSwitchCase_62_6.context;
        }
        if (((token === import15.TemplateRef) && (64 === requestNodeIndex))) {
            return this._TemplateRef_64_5;
        }
        if (((token === import21.NgSwitchCase) && (64 === requestNodeIndex))) {
            return this._NgSwitchCase_64_6.context;
        }
        if (((token === import15.TemplateRef) && (66 === requestNodeIndex))) {
            return this._TemplateRef_66_5;
        }
        if (((token === import21.NgSwitchCase) && (66 === requestNodeIndex))) {
            return this._NgSwitchCase_66_6.context;
        }
        if (((token === import15.TemplateRef) && (68 === requestNodeIndex))) {
            return this._TemplateRef_68_5;
        }
        if (((token === import21.NgSwitchCase) && (68 === requestNodeIndex))) {
            return this._NgSwitchCase_68_6.context;
        }
        if (((token === import15.TemplateRef) && (70 === requestNodeIndex))) {
            return this._TemplateRef_70_5;
        }
        if (((token === import21.NgSwitchDefault) && (70 === requestNodeIndex))) {
            return this._NgSwitchDefault_70_6.context;
        }
        if (((token === import21.NgSwitch) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._NgSwitch_60_3.context;
        }
        return notFoundResult;
    };
    _View_JobListComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        var currVal_39_0_0 = ((this.context.$implicit == null) ? null : this.context.$implicit.status);
        this._NgSwitch_39_3.check_ngSwitch(currVal_39_0_0, throwOnChange, false);
        this._NgSwitch_39_3.detectChangesInInputProps(this, this._el_39, throwOnChange);
        var currVal_41_0_0 = 'onqueue';
        this._NgSwitchCase_41_6.check_ngSwitchCase(currVal_41_0_0, throwOnChange, false);
        this._NgSwitchCase_41_6.detectChangesInInputProps(this, this._anchor_41, throwOnChange);
        var currVal_43_0_0 = 'running';
        this._NgSwitchCase_43_6.check_ngSwitchCase(currVal_43_0_0, throwOnChange, false);
        this._NgSwitchCase_43_6.detectChangesInInputProps(this, this._anchor_43, throwOnChange);
        var currVal_45_0_0 = 'success';
        this._NgSwitchCase_45_6.check_ngSwitchCase(currVal_45_0_0, throwOnChange, false);
        this._NgSwitchCase_45_6.detectChangesInInputProps(this, this._anchor_45, throwOnChange);
        var currVal_47_0_0 = 'error';
        this._NgSwitchCase_47_6.check_ngSwitchCase(currVal_47_0_0, throwOnChange, false);
        this._NgSwitchCase_47_6.detectChangesInInputProps(this, this._anchor_47, throwOnChange);
        this._NgSwitchDefault_49_6.detectChangesInInputProps(this, this._anchor_49, throwOnChange);
        var currVal_60_0_0 = this.context.$implicit.status;
        this._NgSwitch_60_3.check_ngSwitch(currVal_60_0_0, throwOnChange, false);
        this._NgSwitch_60_3.detectChangesInInputProps(this, this._el_60, throwOnChange);
        var currVal_62_0_0 = 'onqueue';
        this._NgSwitchCase_62_6.check_ngSwitchCase(currVal_62_0_0, throwOnChange, false);
        this._NgSwitchCase_62_6.detectChangesInInputProps(this, this._anchor_62, throwOnChange);
        var currVal_64_0_0 = 'success';
        this._NgSwitchCase_64_6.check_ngSwitchCase(currVal_64_0_0, throwOnChange, false);
        this._NgSwitchCase_64_6.detectChangesInInputProps(this, this._anchor_64, throwOnChange);
        var currVal_66_0_0 = 'running';
        this._NgSwitchCase_66_6.check_ngSwitchCase(currVal_66_0_0, throwOnChange, false);
        this._NgSwitchCase_66_6.detectChangesInInputProps(this, this._anchor_66, throwOnChange);
        var currVal_68_0_0 = 'error';
        this._NgSwitchCase_68_6.check_ngSwitchCase(currVal_68_0_0, throwOnChange, false);
        this._NgSwitchCase_68_6.detectChangesInInputProps(this, this._anchor_68, throwOnChange);
        this._NgSwitchDefault_70_6.detectChangesInInputProps(this, this._anchor_70, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_108 = import4.interpolate(1, 'job-row-', this.context.$implicit.id, '');
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementProperty(this._el_0, 'id', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = import4.interpolate(1, '', this.context.$implicit.task.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setText(this._text_5, currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = import4.interpolate(1, ' ', this.context.$implicit.id, '\n                        ');
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setText(this._text_14, currVal_110);
            this._expr_110 = currVal_110;
        }
        valUnwrapper.reset();
        var currVal_111 = import4.interpolate(1, ' ', valUnwrapper.unwrap(import4.castByValue(this._pipe_timestampFormat_0_0, this.parent.parent._pipe_timestampFormat_0.transform)(this.context.$implicit.createdAt)), '\n                        ');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_111, currVal_111))) {
            this.renderer.setText(this._text_20, currVal_111);
            this._expr_111 = currVal_111;
        }
        valUnwrapper.reset();
        var currVal_113 = import4.interpolate(1, ' ', valUnwrapper.unwrap(import4.castByValue(this._pipe_timestampFormat_0_1, this.parent.parent._pipe_timestampFormat_0.transform)(this.context.$implicit.startedAt)), '\n                        ');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_113, currVal_113))) {
            this.renderer.setText(this._text_26, currVal_113);
            this._expr_113 = currVal_113;
        }
        var currVal_115 = import4.interpolate(1, ' ', this.context.$implicit.duration, 's\n                        ');
        if (import4.checkBinding(throwOnChange, this._expr_115, currVal_115)) {
            this.renderer.setText(this._text_32, currVal_115);
            this._expr_115 = currVal_115;
        }
        this._NgSwitch_39_3.detectChangesInHostProps(this, this._el_39, throwOnChange);
        this._NgSwitch_60_3.detectChangesInHostProps(this, this._el_60, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_JobListComponent2.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_4_0 = (this.parent.parent.context.view(this.context.$implicit.projectId, this.context.$implicit.taskId) !== false);
        return (true && pd_4_0);
    };
    return _View_JobListComponent2;
}(import1.AppView));
function viewFactory_JobListComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent3 = (function (_super) {
    __extends(_View_JobListComponent3, _super);
    function _View_JobListComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent3, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_JobListComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-primary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent3;
}(import1.AppView));
function viewFactory_JobListComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent4 = (function (_super) {
    __extends(_View_JobListComponent4, _super);
    function _View_JobListComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent4, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_JobListComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-warning'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent4;
}(import1.AppView));
function viewFactory_JobListComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent5 = (function (_super) {
    __extends(_View_JobListComponent5, _super);
    function _View_JobListComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent5, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_JobListComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent5;
}(import1.AppView));
function viewFactory_JobListComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent6 = (function (_super) {
    __extends(_View_JobListComponent6, _super);
    function _View_JobListComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent6, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_JobListComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent6;
}(import1.AppView));
function viewFactory_JobListComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent7 = (function (_super) {
    __extends(_View_JobListComponent7, _super);
    function _View_JobListComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent7, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    _View_JobListComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', new import4.InlineArray2(2, 'class', 'label label-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.status, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent7;
}(import1.AppView));
function viewFactory_JobListComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent8 = (function (_super) {
    __extends(_View_JobListComponent8, _super);
    function _View_JobListComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent8, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_JobListComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-info', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.$implicit.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.context.$implicit.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.context.$implicit.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent8;
}(import1.AppView));
function viewFactory_JobListComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent8(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent9 = (function (_super) {
    __extends(_View_JobListComponent9, _super);
    function _View_JobListComponent9(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent9, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_JobListComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-success', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.$implicit.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.context.$implicit.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.context.$implicit.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent9;
}(import1.AppView));
function viewFactory_JobListComponent9(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent9(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent10 = (function (_super) {
    __extends(_View_JobListComponent10, _super);
    function _View_JobListComponent10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent10, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_JobListComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-striped progress-bar-warning', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.$implicit.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.context.$implicit.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.context.$implicit.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent10;
}(import1.AppView));
function viewFactory_JobListComponent10(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent10(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent11 = (function (_super) {
    __extends(_View_JobListComponent11, _super);
    function _View_JobListComponent11(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent11, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_JobListComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-danger', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.$implicit.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.context.$implicit.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.context.$implicit.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent11;
}(import1.AppView));
function viewFactory_JobListComponent11(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent11(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent12 = (function (_super) {
    __extends(_View_JobListComponent12, _super);
    function _View_JobListComponent12(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent12, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
    }
    _View_JobListComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray16(10, 'aria-valuemax', '100', 'aria-valuemin', '0', 'class', 'active progress-bar progress-bar-success', 'role', 'progressbar', 'style', 'min-width: 2em'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_JobListComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.$implicit.progress;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_0, 'aria-valuenow', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = (this.parent.context.$implicit.progress + '%');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_0, 'width', ((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '\n									', this.parent.context.$implicit.progress, '%\n								');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobListComponent12;
}(import1.AppView));
function viewFactory_JobListComponent12(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent12(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent13 = (function (_super) {
    __extends(_View_JobListComponent13, _super);
    function _View_JobListComponent13(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent13, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'no-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'No jobs found', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n        ', null);
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
    return _View_JobListComponent13;
}(import1.AppView));
function viewFactory_JobListComponent13(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent13(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent14 = (function (_super) {
    __extends(_View_JobListComponent14, _super);
    function _View_JobListComponent14(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent14, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'error-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Problem while loading job list', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'p', new import4.InlineArray2(2, 'id', 'error-data-message'), null);
        this._text_10 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_4, 'button', new import4.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Try again', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n        ', null);
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
    _View_JobListComponent14.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this.parent.context.load() !== false);
        return (true && pd_11_0);
    };
    return _View_JobListComponent14;
}(import1.AppView));
function viewFactory_JobListComponent14(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent14(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent15 = (function (_super) {
    __extends(_View_JobListComponent15, _super);
    function _View_JobListComponent15(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent15, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'loading-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Loading...', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
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
    return _View_JobListComponent15;
}(import1.AppView));
function viewFactory_JobListComponent15(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent15(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent16 = (function (_super) {
    __extends(_View_JobListComponent16, _super);
    function _View_JobListComponent16(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent16, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent16.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'graph-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Job graph', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_4, 'canvas', new import4.InlineArray4(4, 'baseChart', '', 'class', 'chart'), null);
        this._BaseChartDirective_11_3 = new import23.Wrapper_BaseChartDirective(new import24.ElementRef(this._el_11));
        this._text_12 = this.renderer.createText(this._el_11, '\n                    ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n        ', null);
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
        ], [], []);
        return null;
    };
    _View_JobListComponent16.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.BaseChartDirective) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._BaseChartDirective_11_3.context;
        }
        return notFoundResult;
    };
    _View_JobListComponent16.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_11_0_0 = this.parent.context.chartDataDatasets;
        this._BaseChartDirective_11_3.check_datasets(currVal_11_0_0, throwOnChange, false);
        var currVal_11_0_1 = this.parent.context.chartDataLabels;
        this._BaseChartDirective_11_3.check_labels(currVal_11_0_1, throwOnChange, false);
        var currVal_11_0_2 = this.parent.context.chartDataOptions;
        this._BaseChartDirective_11_3.check_options(currVal_11_0_2, throwOnChange, false);
        var currVal_11_0_3 = 'doughnut';
        this._BaseChartDirective_11_3.check_chartType(currVal_11_0_3, throwOnChange, false);
        var currVal_11_0_4 = this.parent.context.chartDataColors;
        this._BaseChartDirective_11_3.check_colors(currVal_11_0_4, throwOnChange, false);
        this._BaseChartDirective_11_3.detectChangesInInputProps(this, this._el_11, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._BaseChartDirective_11_3.detectChangesInHostProps(this, this._el_11, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_JobListComponent16.prototype.destroyInternal = function () {
        this._BaseChartDirective_11_3.context.ngOnDestroy();
    };
    return _View_JobListComponent16;
}(import1.AppView));
function viewFactory_JobListComponent16(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent16(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent17 = (function (_super) {
    __extends(_View_JobListComponent17, _super);
    function _View_JobListComponent17(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent17, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent17.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'graph-no-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'No jobs for graph', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n        ', null);
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
    return _View_JobListComponent17;
}(import1.AppView));
function viewFactory_JobListComponent17(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent17(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent18 = (function (_super) {
    __extends(_View_JobListComponent18, _super);
    function _View_JobListComponent18(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent18, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent18.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'graph-error-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Problem while loading job list', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n        ', null);
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
    return _View_JobListComponent18;
}(import1.AppView));
function viewFactory_JobListComponent18(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent18(viewUtils, parentInjector, declarationEl);
}
var _View_JobListComponent19 = (function (_super) {
    __extends(_View_JobListComponent19, _super);
    function _View_JobListComponent19(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobListComponent19, renderType_JobListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobListComponent19.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'graph-loading-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Loading...', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
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
    return _View_JobListComponent19;
}(import1.AppView));
function viewFactory_JobListComponent19(viewUtils, parentInjector, declarationEl) {
    return new _View_JobListComponent19(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=job-list.component.ngfactory.js.map