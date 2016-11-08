"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/home/home.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('./home.component.css.shim');
var import11 = require('../../../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import12 = require('@angular/router/src/router');
var import13 = require('@angular/router/src/router_state');
var import14 = require('@angular/common/src/location/location_strategy');
var import15 = require('@angular/router/src/directives/router_link');
var Wrapper_HomeComponent = (function () {
    function Wrapper_HomeComponent() {
        this.changed = false;
        this.context = new import0.HomeComponent();
    }
    Wrapper_HomeComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_HomeComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_HomeComponent;
}());
exports.Wrapper_HomeComponent = Wrapper_HomeComponent;
var renderType_HomeComponent_Host = null;
var _View_HomeComponent_Host0 = (function (_super) {
    __extends(_View_HomeComponent_Host0, _super);
    function _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent_Host0, renderType_HomeComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'home', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomeComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomeComponent_0_4 = new Wrapper_HomeComponent();
        this._appEl_0.initComponent(this._HomeComponent_0_4.context, [], compView_0);
        compView_0.create(this._HomeComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomeComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._HomeComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomeComponent_Host0;
}(import1.AppView));
function viewFactory_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent_Host === null)) {
        (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.HomeComponentNgFactory = new import9.ComponentFactory('home', viewFactory_HomeComponent_Host0, import0.HomeComponent);
var styles_HomeComponent = [import10.styles];
var renderType_HomeComponent = null;
var _View_HomeComponent0 = (function (_super) {
    __extends(_View_HomeComponent0, _super);
    function _View_HomeComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent0, renderType_HomeComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'home-index'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'jumbotron'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'GoCI', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_2, 'p', new import4.InlineArray2(2, 'class', 'lead'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n			', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'img', new import4.InlineArray8(8, 'alt', '', 'border', '0', 'class', 'logo', 'src', '../../static/images/logo.png'), null);
        this._text_10 = this.renderer.createText(this._el_7, '\n		', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n\n		', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_2, 'p', new import4.InlineArray2(2, 'class', 'lead'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Welcome! Click on button below to start!.', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n\n		', null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_2, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n			', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_15, 'a', new import4.InlineArray4(4, 'class', 'btn btn-lg btn-success', 'routerLink', '/project/list'), null);
        this._RouterLinkWithHref_17_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import12.Router), this.parentInjector.get(import13.ActivatedRoute), this.parentInjector.get(import14.LocationStrategy));
        this._text_18 = this.renderer.createText(this._el_17, 'Start', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n		', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'body-content'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n\n		', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_22, 'div', new import4.InlineArray2(2, 'class', 'row'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n			', null);
        this._el_26 = import4.createRenderElement(this.renderer, this._el_24, 'div', new import4.InlineArray2(2, 'class', 'col-lg-4'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_26, 'h2', import4.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, 'Simple structure', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_31 = import4.createRenderElement(this.renderer, this._el_26, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, 'With a file based structure you can easily versioning all project files', null);
        this._text_33 = this.renderer.createText(this._el_26, '\n			', null);
        this._text_34 = this.renderer.createText(this._el_24, '\n			', null);
        this._el_35 = import4.createRenderElement(this.renderer, this._el_24, 'div', new import4.InlineArray2(2, 'class', 'col-lg-4'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n				', null);
        this._el_37 = import4.createRenderElement(this.renderer, this._el_35, 'h2', import4.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_37, 'Simple API', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n				', null);
        this._el_40 = import4.createRenderElement(this.renderer, this._el_35, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(this._el_40, 'It works with a simple API, using HTTP requests to make everything - if you want', null);
        this._text_42 = this.renderer.createText(this._el_35, '\n			', null);
        this._text_43 = this.renderer.createText(this._el_24, '\n			', null);
        this._el_44 = import4.createRenderElement(this.renderer, this._el_24, 'div', new import4.InlineArray2(2, 'class', 'col-lg-4'), null);
        this._text_45 = this.renderer.createText(this._el_44, '\n				', null);
        this._el_46 = import4.createRenderElement(this.renderer, this._el_44, 'h2', import4.EMPTY_INLINE_ARRAY, null);
        this._text_47 = this.renderer.createText(this._el_46, 'Friendly Interface', null);
        this._text_48 = this.renderer.createText(this._el_44, '\n				', null);
        this._el_49 = import4.createRenderElement(this.renderer, this._el_44, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_50 = this.renderer.createText(this._el_49, 'You can see your logs with a nice and friendly web responsive interface', null);
        this._text_51 = this.renderer.createText(this._el_44, '\n			', null);
        this._text_52 = this.renderer.createText(this._el_24, '\n		', null);
        this._text_53 = this.renderer.createText(this._el_22, '\n\n	', null);
        this._text_54 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
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
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54
        ], [disposable_0], []);
        return null;
    };
    _View_HomeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RouterLinkWithHref) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._RouterLinkWithHref_17_3.context;
        }
        return notFoundResult;
    };
    _View_HomeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_17_0_0 = '/project/list';
        this._RouterLinkWithHref_17_3.check_routerLink(currVal_17_0_0, throwOnChange, false);
        this._RouterLinkWithHref_17_3.detectChangesInInputProps(this, this._el_17, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_17_3.detectChangesInHostProps(this, this._el_17, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HomeComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_17_3.context.ngOnDestroy();
    };
    _View_HomeComponent0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_17_0 = (this._RouterLinkWithHref_17_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_17_0);
    };
    return _View_HomeComponent0;
}(import1.AppView));
function viewFactory_HomeComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent === null)) {
        (renderType_HomeComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_HomeComponent, {}));
    }
    return new _View_HomeComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_HomeComponent0 = viewFactory_HomeComponent0;
//# sourceMappingURL=home.component.ngfactory.js.map