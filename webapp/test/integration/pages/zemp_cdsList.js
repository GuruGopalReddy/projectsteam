sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'employee.employee',
            componentId: 'zemp_cdsList',
            contextPath: '/zemp_cds'
        },
        CustomPageDefinitions
    );
});