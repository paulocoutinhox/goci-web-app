"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/app-main/app-main.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../../../src/app/services/GlobalService');
var import9 = require('../../../../src/app/services/JobService');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('../app-header/app-header.component.ngfactory');
var import13 = require('../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory');
var import14 = require('../app-footer/app-footer.component.ngfactory');
var import15 = require('@angular/router/src/router_outlet_map');
var import16 = require('@angular/core/src/linker/component_factory_resolver');
var import17 = require('../../../../src/app/app-header/app-header.component');
var import18 = require('@angular/router/src/directives/router_outlet');
var import19 = require('../../../../src/app/app-footer/app-footer.component');
var Wrapper_AppMainComponent = (function () {
    function Wrapper_AppMainComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.AppMainComponent(p0, p1);
    }
    Wrapper_AppMainComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppMainComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppMainComponent;
}());
exports.Wrapper_AppMainComponent = Wrapper_AppMainComponent;
var renderType_AppMainComponent_Host = null;
var _View_AppMainComponent_Host0 = (function (_super) {
    __extends(_View_AppMainComponent_Host0, _super);
    function _View_AppMainComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppMainComponent_Host0, renderType_AppMainComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppMainComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'app-main', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppMainComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppMainComponent_0_4 = new Wrapper_AppMainComponent(this.parentInjector.get(import8.GlobalService), this.parentInjector.get(import9.JobService));
        this._appEl_0.initComponent(this._AppMainComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppMainComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppMainComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppMainComponent) && (0 === requestNodeIndex))) {
            return this._AppMainComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppMainComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppMainComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppMainComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppMainComponent_Host0;
}(import1.AppView));
function viewFactory_AppMainComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppMainComponent_Host === null)) {
        (renderType_AppMainComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppMainComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppMainComponentNgFactory = new import11.ComponentFactory('app-main', viewFactory_AppMainComponent_Host0, import0.AppMainComponent);
var styles_AppMainComponent = [];
var renderType_AppMainComponent = null;
var _View_AppMainComponent0 = (function (_super) {
    __extends(_View_AppMainComponent0, _super);
    function _View_AppMainComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppMainComponent0, renderType_AppMainComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppMainComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'wrap'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'app-header', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_AppHeaderComponent0(this.viewUtils, this.injector(2), this._appEl_2);
        this._AppHeaderComponent_2_4 = new import12.Wrapper_AppHeaderComponent(this.parentInjector.get(import8.GlobalService));
        this._appEl_2.initComponent(this._AppHeaderComponent_2_4.context, [], compView_2);
        compView_2.create(this._AppHeaderComponent_2_4.context, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n	', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n		', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'router-outlet', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        this._RouterOutlet_6_5 = new import13.Wrapper_RouterOutlet(this.parentInjector.get(import15.RouterOutletMap), this._appEl_6.vcRef, this.parentInjector.get(import16.ComponentFactoryResolver), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n	', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = import4.createRenderElement(this.renderer, parentRenderNode, 'app-footer', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import14.viewFactory_AppFooterComponent0(this.viewUtils, this.injector(10), this._appEl_10);
        this._AppFooterComponent_10_4 = new import14.Wrapper_AppFooterComponent();
        this._appEl_10.initComponent(this._AppFooterComponent_10_4.context, [], compView_10);
        compView_10.create(this._AppFooterComponent_10_4.context, [], null);
        this.init([], [
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
            this._el_10
        ], [], []);
        return null;
    };
    _View_AppMainComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.AppHeaderComponent) && (2 === requestNodeIndex))) {
            return this._AppHeaderComponent_2_4.context;
        }
        if (((token === import18.RouterOutlet) && (6 === requestNodeIndex))) {
            return this._RouterOutlet_6_5.context;
        }
        if (((token === import19.AppFooterComponent) && (10 === requestNodeIndex))) {
            return this._AppFooterComponent_10_4.context;
        }
        return notFoundResult;
    };
    _View_AppMainComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppHeaderComponent_2_4.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this._RouterOutlet_6_5.detectChangesInInputProps(this, this._el_6, throwOnChange);
        this._AppFooterComponent_10_4.detectChangesInInputProps(this, this._el_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppHeaderComponent_2_4.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this._RouterOutlet_6_5.detectChangesInHostProps(this, this._el_6, throwOnChange);
        this._AppFooterComponent_10_4.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppMainComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_6_5.context.ngOnDestroy();
    };
    return _View_AppMainComponent0;
}(import1.AppView));
function viewFactory_AppMainComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppMainComponent === null)) {
        (renderType_AppMainComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_AppMainComponent, {}));
    }
    return new _View_AppMainComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppMainComponent0 = viewFactory_AppMainComponent0;
//# sourceMappingURL=app-main.component.ngfactory.js.map