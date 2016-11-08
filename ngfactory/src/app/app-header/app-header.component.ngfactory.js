"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/app-header/app-header.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var import11 = require('./app-header.component.css.shim');
var import12 = require('../../../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import13 = require('@angular/router/src/router');
var import14 = require('@angular/router/src/router_state');
var import15 = require('@angular/common/src/location/location_strategy');
var import16 = require('@angular/router/src/directives/router_link');
var Wrapper_AppHeaderComponent = (function () {
    function Wrapper_AppHeaderComponent(p0) {
        this.changed = false;
        this.context = new import0.AppHeaderComponent(p0);
    }
    Wrapper_AppHeaderComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_AppHeaderComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppHeaderComponent;
}());
exports.Wrapper_AppHeaderComponent = Wrapper_AppHeaderComponent;
var renderType_AppHeaderComponent_Host = null;
var _View_AppHeaderComponent_Host0 = (function (_super) {
    __extends(_View_AppHeaderComponent_Host0, _super);
    function _View_AppHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppHeaderComponent_Host0, renderType_AppHeaderComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppHeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'app-header', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppHeaderComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppHeaderComponent_0_4 = new Wrapper_AppHeaderComponent(this.parentInjector.get(import8.GlobalService));
        this._appEl_0.initComponent(this._AppHeaderComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppHeaderComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppHeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppHeaderComponent) && (0 === requestNodeIndex))) {
            return this._AppHeaderComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppHeaderComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppHeaderComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppHeaderComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppHeaderComponent_Host0;
}(import1.AppView));
function viewFactory_AppHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppHeaderComponent_Host === null)) {
        (renderType_AppHeaderComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppHeaderComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppHeaderComponentNgFactory = new import10.ComponentFactory('app-header', viewFactory_AppHeaderComponent_Host0, import0.AppHeaderComponent);
var styles_AppHeaderComponent = [import11.styles];
var renderType_AppHeaderComponent = null;
var _View_AppHeaderComponent0 = (function (_super) {
    __extends(_View_AppHeaderComponent0, _super);
    function _View_AppHeaderComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppHeaderComponent0, renderType_AppHeaderComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_52 = import7.UNINITIALIZED;
    }
    _View_AppHeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'nav', new import4.InlineArray2(2, 'class', 'navbar navbar-default navbar-fixed-top'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n			', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'button', new import4.InlineArray16(12, 'aria-controls', 'navbar', 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#nav-collapse', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_6, 'span', new import4.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Toggle navigation', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_6, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_12 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_6, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_14 = this.renderer.createText(this._el_6, '\n				', null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_6, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_16 = this.renderer.createText(this._el_6, '\n			', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n			', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_4, 'a', new import4.InlineArray8(6, 'class', 'navbar-brand', 'href', 'javascript: void(0);', 'routerLink', '/home'), null);
        this._RouterLinkWithHref_18_3 = new import12.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_19 = this.renderer.createText(this._el_18, '\n				', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_18, 'img', new import4.InlineArray8(8, 'alt', '', 'border', '0', 'class', 'logo pull-left', 'src', '../../static/images/logo-header.png'), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n				GoCI\n			', null);
        this._text_22 = this.renderer.createText(this._el_4, '\n		', null);
        this._text_23 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray4(4, 'class', 'collapse navbar-collapse', 'id', 'nav-collapse'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n\n			', null);
        this._el_26 = import4.createRenderElement(this.renderer, this._el_24, 'ul', new import4.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_26, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n					', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_28, 'a', new import4.InlineArray4(4, 'href', 'javascript: void(0);', 'routerLink', '/job/list'), null);
        this._RouterLinkWithHref_30_3 = new import12.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_31 = this.renderer.createText(this._el_30, '\n						', null);
        this._el_32 = import4.createRenderElement(this.renderer, this._el_30, 'span', new import4.InlineArray2(2, 'class', 'ph-job-running-list-count'), null);
        this._text_33 = this.renderer.createText(this._el_32, '', null);
        this._text_34 = this.renderer.createText(this._el_30, '\n						', null);
        this._el_35 = import4.createRenderElement(this.renderer, this._el_30, 'span', new import4.InlineArray2(2, 'class', 'ph-job-running-list-text'), null);
        this._text_36 = this.renderer.createText(this._el_35, 'jobs', null);
        this._text_37 = this.renderer.createText(this._el_30, '\n					', null);
        this._text_38 = this.renderer.createText(this._el_28, '\n				', null);
        this._text_39 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_40 = import4.createRenderElement(this.renderer, this._el_26, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(this._el_40, '\n					', null);
        this._el_42 = import4.createRenderElement(this.renderer, this._el_40, 'a', new import4.InlineArray4(4, 'href', 'javascript: void(0);', 'routerLink', '/home'), null);
        this._RouterLinkWithHref_42_3 = new import12.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_43 = this.renderer.createText(this._el_42, 'Home', null);
        this._text_44 = this.renderer.createText(this._el_40, '\n				', null);
        this._text_45 = this.renderer.createText(this._el_26, '\n			', null);
        this._text_46 = this.renderer.createText(this._el_24, '\n\n		', null);
        this._text_47 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_48 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_0.bind(this)));
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
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_AppHeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        if (((token === import16.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._RouterLinkWithHref_30_3.context;
        }
        if (((token === import16.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._RouterLinkWithHref_42_3.context;
        }
        return notFoundResult;
    };
    _View_AppHeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = '/home';
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.detectChangesInInputProps(this, this._el_18, throwOnChange);
        var currVal_30_0_0 = '/job/list';
        this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLinkWithHref_30_3.detectChangesInInputProps(this, this._el_30, throwOnChange);
        var currVal_42_0_0 = '/home';
        this._RouterLinkWithHref_42_3.check_routerLink(currVal_42_0_0, throwOnChange, false);
        this._RouterLinkWithHref_42_3.detectChangesInInputProps(this, this._el_42, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_18_3.detectChangesInHostProps(this, this._el_18, throwOnChange);
        this._RouterLinkWithHref_30_3.detectChangesInHostProps(this, this._el_30, throwOnChange);
        var currVal_52 = import4.interpolate(1, '', this.context.jobs, '');
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setText(this._text_33, currVal_52);
            this._expr_52 = currVal_52;
        }
        this._RouterLinkWithHref_42_3.detectChangesInHostProps(this, this._el_42, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppHeaderComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_18_3.context.ngOnDestroy();
        this._RouterLinkWithHref_30_3.context.ngOnDestroy();
        this._RouterLinkWithHref_42_3.context.ngOnDestroy();
    };
    _View_AppHeaderComponent0.prototype._handle_click_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_18_0 = (this._RouterLinkWithHref_18_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_18_0);
    };
    _View_AppHeaderComponent0.prototype._handle_click_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_30_0 = (this._RouterLinkWithHref_30_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_30_0);
    };
    _View_AppHeaderComponent0.prototype._handle_click_42_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_42_0 = (this._RouterLinkWithHref_42_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_42_0);
    };
    return _View_AppHeaderComponent0;
}(import1.AppView));
function viewFactory_AppHeaderComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppHeaderComponent === null)) {
        (renderType_AppHeaderComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_AppHeaderComponent, {}));
    }
    return new _View_AppHeaderComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppHeaderComponent0 = viewFactory_AppHeaderComponent0;
//# sourceMappingURL=app-header.component.ngfactory.js.map