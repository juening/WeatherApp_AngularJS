angular.module('app').constant('FirebaseUrl','https://stocktracker-85d6a.firebaseio.com')
  .service('rootRef', ['FirebaseUrl', Firebase]);
