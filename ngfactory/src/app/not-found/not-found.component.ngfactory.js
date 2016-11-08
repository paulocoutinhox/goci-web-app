"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../src/app/not-found/not-found.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var Wrapper_NotFoundComponent = (function () {
    function Wrapper_NotFoundComponent() {
        this.changed = false;
        this.context = new import0.NotFoundComponent();
    }
    Wrapper_NotFoundComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_NotFoundComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NotFoundComponent;
}());
exports.Wrapper_NotFoundComponent = Wrapper_NotFoundComponent;
var renderType_NotFoundComponent_Host = null;
var _View_NotFoundComponent_Host0 = (function (_super) {
    __extends(_View_NotFoundComponent_Host0, _super);
    function _View_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFoundComponent_Host0, renderType_NotFoundComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NotFoundComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'not-found', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NotFoundComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NotFoundComponent_0_4 = new Wrapper_NotFoundComponent();
        this._appEl_0.initComponent(this._NotFoundComponent_0_4.context, [], compView_0);
        compView_0.create(this._NotFoundComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NotFoundComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NotFoundComponent) && (0 === requestNodeIndex))) {
            return this._NotFoundComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NotFoundComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NotFoundComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NotFoundComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotFoundComponent_Host0;
}(import1.AppView));
function viewFactory_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFoundComponent_Host === null)) {
        (renderType_NotFoundComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NotFoundComponentNgFactory = new import9.ComponentFactory('not-found', viewFactory_NotFoundComponent_Host0, import0.NotFoundComponent);
var styles_NotFoundComponent = [];
var renderType_NotFoundComponent = null;
var _View_NotFoundComponent0 = (function (_super) {
    __extends(_View_NotFoundComponent0, _super);
    function _View_NotFoundComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFoundComponent0, renderType_NotFoundComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NotFoundComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'style', 'width: 100%; text-align: center;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		Oops!', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'h2', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n		404 Not Found', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'error-details'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n		Sorry, an error has occured, Requested page not found!\n	', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ], [], []);
        return null;
    };
    return _View_NotFoundComponent0;
}(import1.AppView));
function viewFactory_NotFoundComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFoundComponent === null)) {
        (renderType_NotFoundComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_NotFoundComponent, {}));
    }
    return new _View_NotFoundComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NotFoundComponent0 = viewFactory_NotFoundComponent0;
//# sourceMappingURL=not-found.component.ngfactory.js.map