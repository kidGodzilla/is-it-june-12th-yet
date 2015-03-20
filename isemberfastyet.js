/* jshint ignore:start */

/* jshint ignore:end */

define('isemberfastyet/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  /*globals Firebase*/
  exports['default'] = DS['default'].FirebaseAdapter.extend({
    firebase: new Firebase("https://is-ember-fast-yet.firebaseio.com")
  });

});
define('isemberfastyet/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'isemberfastyet/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('isemberfastyet/components/ember-progress', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: "ember-progress",

    didInsertElement: function didInsertElement() {
      var _this = this;

      var resize = function () {
        _this.$().addClass("disable-animating");
        _this.$().addClass("remove-animating");
      };

      this.$(window).on("resize", resize);
      resize();
    },

    failing: (function () {
      return this.get("total") - this.get("completed");
    }).property("completed", "total"),

    completedPercent: (function () {
      var completed = this.get("completed"),
          total = this.get("total");

      return completed / total * 100;
    }).property("totalWidth", "completed", "total")
  });

});
define('isemberfastyet/initializers/app-version', ['exports', 'isemberfastyet/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('isemberfastyet/initializers/export-application-global', ['exports', 'ember', 'isemberfastyet/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('isemberfastyet/models/progress', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var attr = DS['default'].attr;

  exports['default'] = DS['default'].Model.extend({
    answer: attr("string"),
    total: attr("number"),
    completed: attr("number"),
    trend: attr("string")
  });

});
define('isemberfastyet/router', ['exports', 'ember', 'isemberfastyet/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('isemberfastyet/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.find("progress", "-JjQEJOR-8e5uFF2Mvn2");
    }
  });

});
define('isemberfastyet/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.4",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","/assets/images/glimmer-logo.png");
        dom.setAttribute(el1,"alt","Glimmer");
        dom.setAttribute(el1,"width","170");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  Is Ember fast yet?\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","answer");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","trend");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","info");
        var el3 = dom.createTextNode("\n    At EmberConf 2015, Tom and Yehuda introduced a new rendering engine for\n    Ember.js. Dubbed ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("Glimmer");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", it makes UI rendering\n    incredibly fast. ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","http://f.cl.ly/items/0t031v2Z3y001V1N0F3N/Virtual%20DOM.pdf");
        var el4 = dom.createTextNode("\n    These slides");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" compare Glimmer with a traditional DOM-diffing\n    render.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","info");
        var el3 = dom.createTextNode("\n    To make Ember fast, help us ship Glimmer or just follow along\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://github.com/emberjs/ember.js/pull/10501");
        var el4 = dom.createTextNode("on GitHub");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    How fast is fast? Check out the ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://dbmonster.firebaseapp.com");
        var el4 = dom.createTextNode("demo app");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" (");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://github.com/wycats/dbmonster");
        var el4 = dom.createTextNode("source");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(")\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [6]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        var morph1 = dom.createMorphAt(element0,1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        content(env, morph0, context, "model.answer");
        inline(env, morph1, context, "ember-progress", [], {"total": get(env, context, "model.total"), "completed": get(env, context, "model.completed"), "change": get(env, context, "model.change")});
        content(env, morph2, context, "model.trend");
        return fragment;
      }
    };
  }()));

});
define('isemberfastyet/templates/components/ember-progress', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.4",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","total");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","completed");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" of ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" framework tests passing (");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" to go!)\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var morph2 = dom.createMorphAt(element0,5,5);
        var attrMorph0 = dom.createAttrMorph(element0, 'style');
        attribute(env, attrMorph0, element0, "style", concat(env, ["width: ", get(env, context, "completedPercent"), "%"]));
        content(env, morph0, context, "completed");
        content(env, morph1, context, "total");
        content(env, morph2, context, "failing");
        return fragment;
      }
    };
  }()));

});
define('isemberfastyet/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/components/ember-progress.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/ember-progress.js should pass jshint', function() { 
    ok(true, 'components/ember-progress.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/helpers/resolver', ['exports', 'ember/resolver', 'isemberfastyet/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('isemberfastyet/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/helpers/start-app', ['exports', 'ember', 'isemberfastyet/app', 'isemberfastyet/router', 'isemberfastyet/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('isemberfastyet/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/models/progress.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/progress.js should pass jshint', function() { 
    ok(true, 'models/progress.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/test-helper', ['isemberfastyet/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('isemberfastyet/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/unit/models/progress-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("progress", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('isemberfastyet/tests/unit/models/progress-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/progress-test.js should pass jshint', function() { 
    ok(true, 'unit/models/progress-test.js should pass jshint.'); 
  });

});
define('isemberfastyet/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:application", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('isemberfastyet/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/application-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('isemberfastyet/config/environment', ['ember'], function(Ember) {
  var prefix = 'isemberfastyet';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("isemberfastyet/tests/test-helper");
} else {
  require("isemberfastyet/app")["default"].create({"name":"isemberfastyet","version":"0.0.0.7296db32"});
}

/* jshint ignore:end */
//# sourceMappingURL=isemberfastyet.map