sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'employee/employee/test/integration/FirstJourney',
		'employee/employee/test/integration/pages/zemp_cdsList',
		'employee/employee/test/integration/pages/zemp_cdsObjectPage'
    ],
    function(JourneyRunner, opaJourney, zemp_cdsList, zemp_cdsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('employee/employee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezemp_cdsList: zemp_cdsList,
					onThezemp_cdsObjectPage: zemp_cdsObjectPage
                }
            },
            opaJourney.run
        );
    }
);