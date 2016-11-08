"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('../../../../src/app/modules/app.module');
var import2 = require('@angular/router/src/router_module');
var import3 = require('@angular/common/src/common_module');
var import4 = require('@angular/core/src/application_module');
var import5 = require('@angular/platform-browser/src/browser');
var import6 = require('@angular/forms/src/directives');
var import7 = require('@angular/forms/src/form_providers');
var import8 = require('@angular/http/src/http_module');
var import9 = require('ng2-charts/components/charts/charts');
var import10 = require('@angular/common/src/localization');
var import11 = require('@angular/core/src/application_init');
var import12 = require('@angular/core/src/testability/testability');
var import13 = require('@angular/core/src/application_ref');
var import14 = require('@angular/core/src/linker/compiler');
var import15 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import16 = require('@angular/platform-browser/src/dom/events/event_manager');
var import17 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import18 = require('@angular/platform-browser/src/dom/dom_renderer');
var import19 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import20 = require('@angular/core/src/linker/view_utils');
var import21 = require('@angular/platform-browser/src/browser/title');
var import22 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import23 = require('@angular/forms/src/form_builder');
var import24 = require('@angular/http/src/backends/browser_xhr');
var import25 = require('@angular/http/src/base_response_options');
var import26 = require('@angular/http/src/backends/xhr_backend');
var import27 = require('@angular/http/src/base_request_options');
var import28 = require('@angular/common/src/location/location');
var import29 = require('@angular/router/src/url_tree');
var import30 = require('@angular/router/src/router_outlet_map');
var import31 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import32 = require('@angular/router/src/router_preloader');
var import33 = require('../../../../src/app/services/GlobalService');
var import34 = require('../../../../src/app/services/JobService');
var import35 = require('../../../../src/app/services/TaskService');
var import36 = require('../../../../src/app/services/ProjectService');
var import38 = require('../home/home.component.ngfactory');
var import39 = require('../job-list/job-list.component.ngfactory');
var import40 = require('../project-list/project-list.component.ngfactory');
var import41 = require('../project-view/project-view.component.ngfactory');
var import42 = require('../task-view/task-view.component.ngfactory');
var import43 = require('../not-found/not-found.component.ngfactory');
var import44 = require('../app-main/app-main.component.ngfactory');
var import45 = require('@angular/core/src/application_tokens');
var import46 = require('@angular/platform-browser/src/dom/events/dom_events');
var import47 = require('@angular/platform-browser/src/dom/events/key_events');
var import48 = require('@angular/core/src/zone/ng_zone');
var import49 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import50 = require('@angular/common/src/location/platform_location');
var import51 = require('@angular/common/src/location/location_strategy');
var import52 = require('../../../../src/app/home/home.component');
var import53 = require('../../../../src/app/job-list/job-list.component');
var import54 = require('../../../../src/app/project-list/project-list.component');
var import55 = require('../../../../src/app/project-view/project-view.component');
var import56 = require('../../../../src/app/task-view/task-view.component');
var import57 = require('../../../../src/app/not-found/not-found.component');
var import58 = require('@angular/router/src/router');
var import59 = require('@angular/core/src/console');
var import60 = require('@angular/core/src/i18n/tokens');
var import61 = require('@angular/core/src/error_handler');
var import62 = require('@angular/platform-browser/src/dom/dom_tokens');
var import63 = require('@angular/platform-browser/src/dom/animation_driver');
var import64 = require('@angular/core/src/render/api');
var import65 = require('@angular/core/src/security');
var import66 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import67 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import68 = require('@angular/http/src/interfaces');
var import69 = require('@angular/http/src/http');
var import70 = require('@angular/core/src/linker/ng_module_factory_loader');
var import71 = require('@angular/router/src/router_config_loader');
var import72 = require('@angular/router/src/router_state');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import38.HomeComponentNgFactory,
            import39.JobListComponentNgFactory,
            import40.ProjectListComponentNgFactory,
            import41.ProjectViewComponentNgFactory,
            import42.TaskViewComponentNgFactory,
            import43.NotFoundComponentNgFactory,
            import44.AppMainComponentNgFactory
        ], [import44.AppMainComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_11", {
        get: function () {
            if ((this.__LOCALE_ID_11 == null)) {
                (this.__LOCALE_ID_11 = 'en-US');
            }
            return this.__LOCALE_ID_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_12", {
        get: function () {
            if ((this.__NgLocalization_12 == null)) {
                (this.__NgLocalization_12 = new import10.NgLocaleLocalization(this._LOCALE_ID_11));
            }
            return this.__NgLocalization_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_17", {
        get: function () {
            if ((this.__ApplicationRef_17 == null)) {
                (this.__ApplicationRef_17 = this._ApplicationRef__16);
            }
            return this.__ApplicationRef_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_18", {
        get: function () {
            if ((this.__Compiler_18 == null)) {
                (this.__Compiler_18 = new import14.Compiler());
            }
            return this.__Compiler_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_19", {
        get: function () {
            if ((this.__APP_ID_19 == null)) {
                (this.__APP_ID_19 = import45._appIdRandomProviderFactory());
            }
            return this.__APP_ID_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_20", {
        get: function () {
            if ((this.__DOCUMENT_20 == null)) {
                (this.__DOCUMENT_20 = import5._document());
            }
            return this.__DOCUMENT_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_21", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_21 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_22", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_22 = [
                    new import46.DomEventsPlugin(),
                    new import47.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_23", {
        get: function () {
            if ((this.__EventManager_23 == null)) {
                (this.__EventManager_23 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_22, this.parent.get(import48.NgZone)));
            }
            return this.__EventManager_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_24", {
        get: function () {
            if ((this.__DomSharedStylesHost_24 == null)) {
                (this.__DomSharedStylesHost_24 = new import17.DomSharedStylesHost(this._DOCUMENT_20));
            }
            return this.__DomSharedStylesHost_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_25", {
        get: function () {
            if ((this.__AnimationDriver_25 == null)) {
                (this.__AnimationDriver_25 = import5._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_26", {
        get: function () {
            if ((this.__DomRootRenderer_26 == null)) {
                (this.__DomRootRenderer_26 = new import18.DomRootRenderer_(this._DOCUMENT_20, this._EventManager_23, this._DomSharedStylesHost_24, this._AnimationDriver_25));
            }
            return this.__DomRootRenderer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import49._createConditionalRootRenderer(this._DomRootRenderer_26, this.parent.get(import49.NgProbeToken, null)));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_30", {
        get: function () {
            if ((this.__ViewUtils_30 == null)) {
                (this.__ViewUtils_30 = new import20.ViewUtils(this._RootRenderer_27, this._APP_ID_19, this._Sanitizer_29));
            }
            return this.__ViewUtils_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_31", {
        get: function () {
            if ((this.__IterableDiffers_31 == null)) {
                (this.__IterableDiffers_31 = import4._iterableDiffersFactory());
            }
            return this.__IterableDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_32", {
        get: function () {
            if ((this.__KeyValueDiffers_32 == null)) {
                (this.__KeyValueDiffers_32 = import4._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_33", {
        get: function () {
            if ((this.__SharedStylesHost_33 == null)) {
                (this.__SharedStylesHost_33 = this._DomSharedStylesHost_24);
            }
            return this.__SharedStylesHost_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_34", {
        get: function () {
            if ((this.__Title_34 == null)) {
                (this.__Title_34 = new import21.Title());
            }
            return this.__Title_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_35", {
        get: function () {
            if ((this.__RadioControlRegistry_35 == null)) {
                (this.__RadioControlRegistry_35 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_36", {
        get: function () {
            if ((this.__FormBuilder_36 == null)) {
                (this.__FormBuilder_36 = new import23.FormBuilder());
            }
            return this.__FormBuilder_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_37", {
        get: function () {
            if ((this.__BrowserXhr_37 == null)) {
                (this.__BrowserXhr_37 = new import24.BrowserXhr());
            }
            return this.__BrowserXhr_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_38", {
        get: function () {
            if ((this.__ResponseOptions_38 == null)) {
                (this.__ResponseOptions_38 = new import25.BaseResponseOptions());
            }
            return this.__ResponseOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_39", {
        get: function () {
            if ((this.__XSRFStrategy_39 == null)) {
                (this.__XSRFStrategy_39 = import8._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_40", {
        get: function () {
            if ((this.__XHRBackend_40 == null)) {
                (this.__XHRBackend_40 = new import26.XHRBackend(this._BrowserXhr_37, this._ResponseOptions_38, this._XSRFStrategy_39));
            }
            return this.__XHRBackend_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_41", {
        get: function () {
            if ((this.__RequestOptions_41 == null)) {
                (this.__RequestOptions_41 = new import27.BaseRequestOptions());
            }
            return this.__RequestOptions_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_42", {
        get: function () {
            if ((this.__Http_42 == null)) {
                (this.__Http_42 = import8.httpFactory(this._XHRBackend_40, this._RequestOptions_41));
            }
            return this.__Http_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_43", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_43 == null)) {
                (this.__ROUTER_CONFIGURATION_43 = {});
            }
            return this.__ROUTER_CONFIGURATION_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_44", {
        get: function () {
            if ((this.__LocationStrategy_44 == null)) {
                (this.__LocationStrategy_44 = import2.provideLocationStrategy(this.parent.get(import50.PlatformLocation), this.parent.get(import51.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_43));
            }
            return this.__LocationStrategy_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_45", {
        get: function () {
            if ((this.__Location_45 == null)) {
                (this.__Location_45 = new import28.Location(this._LocationStrategy_44));
            }
            return this.__Location_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_46", {
        get: function () {
            if ((this.__UrlSerializer_46 == null)) {
                (this.__UrlSerializer_46 = new import29.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_47", {
        get: function () {
            if ((this.__RouterOutletMap_47 == null)) {
                (this.__RouterOutletMap_47 = new import30.RouterOutletMap());
            }
            return this.__RouterOutletMap_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_48", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_48 == null)) {
                (this.__NgModuleFactoryLoader_48 = new import31.SystemJsNgModuleLoader(this._Compiler_18, this.parent.get(import31.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_49", {
        get: function () {
            if ((this.__ROUTES_49 == null)) {
                (this.__ROUTES_49 = [[
                        {
                            path: '',
                            redirectTo: '/home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: import52.HomeComponent
                        },
                        {
                            path: 'job/list',
                            component: import53.JobListComponent
                        },
                        {
                            path: 'project/list',
                            component: import54.ProjectListComponent
                        },
                        {
                            path: 'project/view/:project',
                            component: import55.ProjectViewComponent
                        },
                        {
                            path: 'task/view/:project/:task',
                            component: import56.TaskViewComponent
                        },
                        {
                            path: '**',
                            component: import57.NotFoundComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_50", {
        get: function () {
            if ((this.__Router_50 == null)) {
                (this.__Router_50 = import2.setupRouter(this._ApplicationRef_17, this._UrlSerializer_46, this._RouterOutletMap_47, this._Location_45, this, this._NgModuleFactoryLoader_48, this._Compiler_18, this._ROUTES_49, this._ROUTER_CONFIGURATION_43));
            }
            return this.__Router_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_51", {
        get: function () {
            if ((this.__ActivatedRoute_51 == null)) {
                (this.__ActivatedRoute_51 = import2.rootRoute(this._Router_50));
            }
            return this.__ActivatedRoute_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_55", {
        get: function () {
            if ((this.__PreloadAllModules_55 == null)) {
                (this.__PreloadAllModules_55 = new import32.PreloadAllModules());
            }
            return this.__PreloadAllModules_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_56", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_56 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_56 = [import2.initialRouterNavigation(this._Router_50, this._ApplicationRef_17, this._RouterPreloader_54, this._ROUTER_CONFIGURATION_43)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_GlobalService_57", {
        get: function () {
            if ((this.__GlobalService_57 == null)) {
                (this.__GlobalService_57 = new import33.GlobalService());
            }
            return this.__GlobalService_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_JobService_58", {
        get: function () {
            if ((this.__JobService_58 == null)) {
                (this.__JobService_58 = new import34.JobService(this._Http_42));
            }
            return this.__JobService_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TaskService_59", {
        get: function () {
            if ((this.__TaskService_59 == null)) {
                (this.__TaskService_59 = new import35.TaskService(this._Http_42));
            }
            return this.__TaskService_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ProjectService_60", {
        get: function () {
            if ((this.__ProjectService_60 == null)) {
                (this.__ProjectService_60 = new import36.ProjectService(this._Http_42));
            }
            return this.__ProjectService_60;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import58.Router, null));
        this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
        this._CommonModule_2 = new import3.CommonModule();
        this._ApplicationModule_3 = new import4.ApplicationModule();
        this._BrowserModule_4 = new import5.BrowserModule(this.parent.get(import5.BrowserModule, null));
        this._InternalFormsSharedModule_5 = new import6.InternalFormsSharedModule();
        this._FormsModule_6 = new import7.FormsModule();
        this._ReactiveFormsModule_7 = new import7.ReactiveFormsModule();
        this._HttpModule_8 = new import8.HttpModule();
        this._ChartsModule_9 = new import9.ChartsModule();
        this._AppModule_10 = new import1.AppModule();
        this._ErrorHandler_13 = import5.errorHandler();
        this._ApplicationInitStatus_14 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER, null));
        this._Testability_15 = new import12.Testability(this.parent.get(import48.NgZone));
        this._ApplicationRef__16 = new import13.ApplicationRef_(this.parent.get(import48.NgZone), this.parent.get(import59.Console), this, this._ErrorHandler_13, this, this._ApplicationInitStatus_14, this.parent.get(import12.TestabilityRegistry, null), this._Testability_15);
        this._NoPreloading_52 = new import32.NoPreloading();
        this._PreloadingStrategy_53 = this._NoPreloading_52;
        this._RouterPreloader_54 = new import32.RouterPreloader(this._Router_50, this._NgModuleFactoryLoader_48, this._Compiler_18, this, this._PreloadingStrategy_53);
        return this._AppModule_10;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_0;
        }
        if ((token === import2.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import3.CommonModule)) {
            return this._CommonModule_2;
        }
        if ((token === import4.ApplicationModule)) {
            return this._ApplicationModule_3;
        }
        if ((token === import5.BrowserModule)) {
            return this._BrowserModule_4;
        }
        if ((token === import6.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_5;
        }
        if ((token === import7.FormsModule)) {
            return this._FormsModule_6;
        }
        if ((token === import7.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_7;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_8;
        }
        if ((token === import9.ChartsModule)) {
            return this._ChartsModule_9;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_10;
        }
        if ((token === import60.LOCALE_ID)) {
            return this._LOCALE_ID_11;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_12;
        }
        if ((token === import61.ErrorHandler)) {
            return this._ErrorHandler_13;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_14;
        }
        if ((token === import12.Testability)) {
            return this._Testability_15;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__16;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_17;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_18;
        }
        if ((token === import45.APP_ID)) {
            return this._APP_ID_19;
        }
        if ((token === import62.DOCUMENT)) {
            return this._DOCUMENT_20;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_21;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_22;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_23;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_24;
        }
        if ((token === import63.AnimationDriver)) {
            return this._AnimationDriver_25;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_26;
        }
        if ((token === import64.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import65.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_30;
        }
        if ((token === import66.IterableDiffers)) {
            return this._IterableDiffers_31;
        }
        if ((token === import67.KeyValueDiffers)) {
            return this._KeyValueDiffers_32;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_33;
        }
        if ((token === import21.Title)) {
            return this._Title_34;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_35;
        }
        if ((token === import23.FormBuilder)) {
            return this._FormBuilder_36;
        }
        if ((token === import24.BrowserXhr)) {
            return this._BrowserXhr_37;
        }
        if ((token === import25.ResponseOptions)) {
            return this._ResponseOptions_38;
        }
        if ((token === import68.XSRFStrategy)) {
            return this._XSRFStrategy_39;
        }
        if ((token === import26.XHRBackend)) {
            return this._XHRBackend_40;
        }
        if ((token === import27.RequestOptions)) {
            return this._RequestOptions_41;
        }
        if ((token === import69.Http)) {
            return this._Http_42;
        }
        if ((token === import2.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_43;
        }
        if ((token === import51.LocationStrategy)) {
            return this._LocationStrategy_44;
        }
        if ((token === import28.Location)) {
            return this._Location_45;
        }
        if ((token === import29.UrlSerializer)) {
            return this._UrlSerializer_46;
        }
        if ((token === import30.RouterOutletMap)) {
            return this._RouterOutletMap_47;
        }
        if ((token === import70.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_48;
        }
        if ((token === import71.ROUTES)) {
            return this._ROUTES_49;
        }
        if ((token === import58.Router)) {
            return this._Router_50;
        }
        if ((token === import72.ActivatedRoute)) {
            return this._ActivatedRoute_51;
        }
        if ((token === import32.NoPreloading)) {
            return this._NoPreloading_52;
        }
        if ((token === import32.PreloadingStrategy)) {
            return this._PreloadingStrategy_53;
        }
        if ((token === import32.RouterPreloader)) {
            return this._RouterPreloader_54;
        }
        if ((token === import32.PreloadAllModules)) {
            return this._PreloadAllModules_55;
        }
        if ((token === import45.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_56;
        }
        if ((token === import33.GlobalService)) {
            return this._GlobalService_57;
        }
        if ((token === import34.JobService)) {
            return this._JobService_58;
        }
        if ((token === import35.TaskService)) {
            return this._TaskService_59;
        }
        if ((token === import36.ProjectService)) {
            return this._ProjectService_60;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__16.ngOnDestroy();
        this._RouterPreloader_54.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map