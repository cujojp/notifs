/**
 * @fileoverview
 * @author Kaleb White (cujojp)
 *    
 * A Firebase service which will instantiate a new
 * Firebase component and listen for events from the
 * database.
 *
 */

(function( $, app ) {

  var component = {
    init: function(element, context) {
      console.log('wee');
    },

  };


  /**
   * ScrollMonitor base constructor
   *
   * @param {jQuery|?Element} element 
   * @param {Object} context
   *
   * @constructor
   */
  var FirebaseService = function(element, context) {

  };



  /**
   * init
   *
   * @private
   */
  FirebaseService.prototype.init = function() {

  };

  app._Components.FirebaseService = component;

})(jQuery, notifs);
