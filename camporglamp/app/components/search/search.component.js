"use strict";
const search = {
  templateUrl: `app/components/search/search.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      vm.campSearch = function() {
        SearchService.getCamp();
        console.log("Hi");
      };
      vm.glampSearch = function() {
        SearchService.setGlamp();
      };
    }
  ]
};

angular.module("App").component("search", search);
