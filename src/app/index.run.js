(function() {
  'use strict';

  angular
    .module('angelasWebsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
