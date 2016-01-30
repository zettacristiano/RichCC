﻿angular.module('richCCSample', ['ui.bootstrap.datepicker.temp'])
.controller('richCCController', ["$scope", "$timeout", function ($scope, $timeout) {
    var self = this;
    self.sampleEvents = [
        { 'id': '1', 'name': 'Event A', 'startDt': '01-02-2016', 'endDt': '01-06-2016' },
        { 'id': '2', 'name': 'Event B', 'startDt': '01-02-2016', 'endDt': '01-02-2016' },
        { 'id': '5', 'name': 'Event E', 'startDt': '01-08-2016', 'endDt': '02-08-2016' },
        { 'id': '3', 'name': 'Event C', 'startDt': '01-07-2016', 'endDt': '01-08-2016' },
        { 'id': '4', 'name': 'Event D', 'startDt': '01-06-2016', 'endDt': '01-09-2016' }
    ];
    self.today = function () {
        self.dt = new Date();
    };
    self.today();

    self.clear = function () {
        self.dt = null;
    };

    // Disable weekend selection
    self.disabled = function (date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    self.toggleMin = function () {
        self.minDate = self.minDate ? null : new Date();
    };

    self.toggleMin();
    self.maxDate = new Date(2020, 5, 22);

    self.open1 = function () {
        self.popup1.opened = true;
    };

    self.open2 = function () {
        self.popup2.opened = true;
    };

    self.setDate = function (year, month, day) {
        self.dt = new Date(year, month, day);
    };

    self.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    self.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    self.format = self.formats[0];
    self.altInputFormats = ['M!/d!/yyyy'];

    self.popup1 = {
        opened: false
    };

    self.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    self.events =
      [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
      ];

    self.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < self.events.length; i++) {
                var currentDay = new Date(self.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return self.events[i].status;
                }
            }
        }

        return '';
    };
}]);