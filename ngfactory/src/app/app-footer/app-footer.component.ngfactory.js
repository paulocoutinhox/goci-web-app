"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/app-footer/app-footer.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('./app-footer.component.css.shim');
var Wrapper_AppFooterComponent = (function () {
    function Wrapper_AppFooterComponent() {
        this.changed = false;
        this.context = new import0.AppFooterComponent();
    }
    Wrapper_AppFooterComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_AppFooterComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppFooterComponent;
}());
exports.Wrapper_AppFooterComponent = Wrapper_AppFooterComponent;
var renderType_AppFooterComponent_Host = null;
var _View_AppFooterComponent_Host0 = (function (_super) {
    __extends(_View_AppFooterComponent_Host0, _super);
    function _View_AppFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppFooterComponent_Host0, renderType_AppFooterComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppFooterComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'app-footer', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppFooterComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppFooterComponent_0_4 = new Wrapper_AppFooterComponent();
        this._appEl_0.initComponent(this._AppFooterComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppFooterComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppFooterComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppFooterComponent) && (0 === requestNodeIndex))) {
            return this._AppFooterComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppFooterComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppFooterComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppFooterComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppFooterComponent_Host0;
}(import1.AppView));
function viewFactory_AppFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppFooterComponent_Host === null)) {
        (renderType_AppFooterComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppFooterComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppFooterComponentNgFactory = new import9.ComponentFactory('app-footer', viewFactory_AppFooterComponent_Host0, import0.AppFooterComponent);
var styles_AppFooterComponent = [import10.styles];
var renderType_AppFooterComponent = null;
var _View_AppFooterComponent0 = (function (_super) {
    __extends(_View_AppFooterComponent0, _super);
    function _View_AppFooterComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppFooterComponent0, renderType_AppFooterComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppFooterComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'footer', new import4.InlineArray2(2, 'class', 'footer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'p', new import4.InlineArray2(2, 'class', 'pull-left'), null);
        this._text_5 = this.renderer.createText(this._el_4, '© GoCI', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_2, 'p', new import4.InlineArray2(2, 'class', 'pull-right'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Created By:\n			', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'a', new import4.InlineArray8(6, 'href', 'http://www.pcoutinho.com', 'target', '_blank', 'title', 'Paulo Coutinho'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Paulo Coutinho', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n		', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
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
            this._text_12,
            this._text_13
        ], [], []);
        return null;
    };
    return _View_AppFooterComponent0;
}(import1.AppView));
function viewFactory_AppFooterComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppFooterComponent === null)) {
        (renderType_AppFooterComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_AppFooterComponent, {}));
    }
    return new _View_AppFooterComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppFooterComponent0 = viewFactory_AppFooterComponent0;
//# sourceMappingURL=app-footer.component.ngfactory.js.map