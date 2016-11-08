"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/project-list/project-list.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('../../../../src/app/services/ProjectService');
var import10 = require('@angular/router/src/router');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var import13 = require('../../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import14 = require('@angular/core/src/linker/template_ref');
var import15 = require('@angular/common/src/directives/ng_if');
var import16 = require('../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import17 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import18 = require('@angular/common/src/directives/ng_for');
var Wrapper_ProjectListComponent = (function () {
    function Wrapper_ProjectListComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.ProjectListComponent(p0, p1, p2);
    }
    Wrapper_ProjectListComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ProjectListComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ProjectListComponent;
}());
exports.Wrapper_ProjectListComponent = Wrapper_ProjectListComponent;
var renderType_ProjectListComponent_Host = null;
var _View_ProjectListComponent_Host0 = (function (_super) {
    __extends(_View_ProjectListComponent_Host0, _super);
    function _View_ProjectListComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent_Host0, renderType_ProjectListComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'project-list', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProjectListComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProjectListComponent_0_4 = new Wrapper_ProjectListComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.ProjectService), this.parentInjector.get(import10.Router));
        this._appEl_0.initComponent(this._ProjectListComponent_0_4.context, [], compView_0);
        compView_0.create(this._ProjectListComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProjectListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProjectListComponent) && (0 === requestNodeIndex))) {
            return this._ProjectListComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ProjectListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProjectListComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ProjectListComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectListComponent_Host0;
}(import1.AppView));
function viewFactory_ProjectListComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectListComponent_Host === null)) {
        (renderType_ProjectListComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProjectListComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ProjectListComponentNgFactory = new import12.ComponentFactory('project-list', viewFactory_ProjectListComponent_Host0, import0.ProjectListComponent);
var styles_ProjectListComponent = [];
var renderType_ProjectListComponent = null;
var _View_ProjectListComponent0 = (function (_super) {
    __extends(_View_ProjectListComponent0, _super);
    function _View_ProjectListComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent0, renderType_ProjectListComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'project-index'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'panel panel-default hiddenContent', 'id', 'options-container'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'h3', new import4.InlineArray2(2, 'class', 'options-container-title'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Project List', null);
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
        this._TemplateRef_19_5 = new import14.TemplateRef_(this._appEl_19, viewFactory_ProjectListComponent1);
        this._NgIf_19_6 = new import13.Wrapper_NgIf(this._appEl_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_21 = new import3.AppElement(21, 0, this, this._anchor_21);
        this._TemplateRef_21_5 = new import14.TemplateRef_(this._appEl_21, viewFactory_ProjectListComponent3);
        this._NgIf_21_6 = new import13.Wrapper_NgIf(this._appEl_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_23 = new import3.AppElement(23, 0, this, this._anchor_23);
        this._TemplateRef_23_5 = new import14.TemplateRef_(this._appEl_23, viewFactory_ProjectListComponent4);
        this._NgIf_23_6 = new import13.Wrapper_NgIf(this._appEl_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_25 = new import3.AppElement(25, 0, this, this._anchor_25);
        this._TemplateRef_25_5 = new import14.TemplateRef_(this._appEl_25, viewFactory_ProjectListComponent5);
        this._NgIf_25_6 = new import13.Wrapper_NgIf(this._appEl_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n', null);
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
            this._text_26
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ProjectListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import15.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import14.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import15.NgIf) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        if (((token === import14.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import15.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import14.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import15.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_19_0_0 = this.context.showList;
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.detectChangesInInputProps(this, this._anchor_19, throwOnChange);
        var currVal_21_0_0 = this.context.showEmptyList;
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.detectChangesInInputProps(this, this._anchor_21, throwOnChange);
        var currVal_23_0_0 = this.context.showError;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.detectChangesInInputProps(this, this._anchor_23, throwOnChange);
        var currVal_25_0_0 = this.context.showLoading;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProjectListComponent0.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_10_0 = (this.context.load() !== false);
        return (true && pd_10_0);
    };
    _View_ProjectListComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_13_0 = (this.context.back() !== false);
        return (true && pd_13_0);
    };
    return _View_ProjectListComponent0;
}(import1.AppView));
function viewFactory_ProjectListComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProjectListComponent === null)) {
        (renderType_ProjectListComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_ProjectListComponent, {}));
    }
    return new _View_ProjectListComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ProjectListComponent0 = viewFactory_ProjectListComponent0;
var _View_ProjectListComponent1 = (function (_super) {
    __extends(_View_ProjectListComponent1, _super);
    function _View_ProjectListComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent1, renderType_ProjectListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'list-group', 'id', 'project-list'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4, viewFactory_ProjectListComponent2);
        this._NgFor_4_6 = new import16.Wrapper_NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parent.parentInjector.get(import17.IterableDiffers), this.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n	', null);
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
    _View_ProjectListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import18.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    _View_ProjectListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parent.context.projectList;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProjectListComponent1;
}(import1.AppView));
function viewFactory_ProjectListComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectListComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectListComponent2 = (function (_super) {
    __extends(_View_ProjectListComponent2, _super);
    function _View_ProjectListComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent2, renderType_ProjectListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
    }
    _View_ProjectListComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'a', new import4.InlineArray4(4, 'class', 'project-row list-group-item', 'href', 'javascript: void(0);'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h4', new import4.InlineArray2(2, 'class', 'list-group-item-heading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n				', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'p', new import4.InlineArray2(2, 'class', 'list-group-item-text'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [disposable_0], []);
        return null;
    };
    _View_ProjectListComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_8 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = import4.interpolate(1, '', this.context.$implicit.description, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProjectListComponent2.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.parent.context.view(this.context.$implicit.id) !== false);
        return (true && pd_0_0);
    };
    return _View_ProjectListComponent2;
}(import1.AppView));
function viewFactory_ProjectListComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectListComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectListComponent3 = (function (_super) {
    __extends(_View_ProjectListComponent3, _super);
    function _View_ProjectListComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent3, renderType_ProjectListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'no-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'No projects found', null);
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
    return _View_ProjectListComponent3;
}(import1.AppView));
function viewFactory_ProjectListComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectListComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectListComponent4 = (function (_super) {
    __extends(_View_ProjectListComponent4, _super);
    function _View_ProjectListComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent4, renderType_ProjectListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'id', 'error-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Problem while loading project list', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_4, 'p', new import4.InlineArray2(2, 'id', 'error-data-message'), null);
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
    _View_ProjectListComponent4.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this.parent.context.load() !== false);
        return (true && pd_11_0);
    };
    return _View_ProjectListComponent4;
}(import1.AppView));
function viewFactory_ProjectListComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectListComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_ProjectListComponent5 = (function (_super) {
    __extends(_View_ProjectListComponent5, _super);
    function _View_ProjectListComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProjectListComponent5, renderType_ProjectListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProjectListComponent5.prototype.createInternal = function (rootSelector) {
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
    return _View_ProjectListComponent5;
}(import1.AppView));
function viewFactory_ProjectListComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_ProjectListComponent5(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=project-list.component.ngfactory.js.map