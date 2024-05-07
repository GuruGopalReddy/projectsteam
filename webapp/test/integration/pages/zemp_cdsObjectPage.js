sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'employee.employee',
            componentId: 'zemp_cdsObjectPage',
            contextPath: '/zemp_cds'
        },
        CustomPageDefinitions
    );
});