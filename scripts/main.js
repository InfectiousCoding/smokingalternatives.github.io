angular
    .module('SmokeApp', [
        'ngAnimate',
        'mgcrea.ngStrap',
        'ngRoute'
    ])
    .filter('to_trusted', ['$sce', function ($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .controller('MainController', function ($scope, $location, $modal) {
        $scope.pageName = function() { return $location.path(); };
    })
    .controller('ECigController', function ($scope, $location, $modal) {

        $scope.pageName = function() { return $location.path(); };

        $scope.eCigDescription = [
            "Assembled",
            "Assembled (transparent view)",
            "Tank",
            "Heating coil",
            "Base with battery thread",
            "Metal mesh",
            "Polyfill material",
            "Wisk",
            "Drip tip"
        ];

        $scope.description = [

            "Electronic cigarettes are one of latest inventions in the world of tobacco. " +
            "The electronic cigarette delivers nicotine in the form of an " +
                "aerosol (mist) from e-liquid (nicotine, propylene glycol and vegetable glycerin) " +
                "instead of a smoke that comes from burning a tobacco and paper. " +
            "The aerosol (most people inaccurately refer to it as vapor) comes from the liquid (electronic liquid / electronic juice) " +
            "that gets heated up by heating of the coil inside of a device, and becomes aerosol."
            ,

            "Because e-cigarettes are so new to the market, there is still a lot of debate on safety of using it. " +
            "There have been a very few papers published on topic of health effects of electronic cigarettes. " +
            "The issue becomes even more controversial when media misinterprets results of studies, " +
                "and not without help from huge tobacco companies who lose their market share due to people switching over to e-cigarettes. " +
            "On top of that local and federal government puts bans and restrictions on vaping, " +
                "not without help of lobbying against it, done by the same tobacco companies mentioned above. " +
            "However, in general, the papers do get published, and a lot of them suggest that e-cigarettes are less dangerous than smoking [<a href='#ref1'>1</a>]."
            ,

            "Little History side-note. " +
            "Although the first patent for a smokeless, non-tobacco cigarette was made as early as 1963 [<a href='#ref2'>2</a>] [<a href='#ref3'>3</a>], " +
            "electronic cigarettes were not commercialized until 2003, when a Chinese pharmacist " +
            "Hon Lik first invented and then patented the modern day e-cigarette [<a href='#ref3'>3</a>]."
        ];

        $scope.choosingDescription = "E-cigarettes come in three main forms: atomizer, cartomizer, and clearomizer. " +
            "Choosing which one is right is highly subjective, but I recommend going with the latter, " +
                "because for me it is easiest to use, can store more e-liquid and is easy to maintain. " +
            "Below is a comparison table for each of those types of e-cigarettes.";

        $scope.references = [
            {
                name: "E-cigarette research, study, and papers",
                link: "http://www.ecigalternative.com/ecigarette-studies-research.htm"
            },
            {
                name: "History of Electronic Cigarettes (ECigaretteDirect)",
                link: "http://www.ecigarettedirect.co.uk/ashtray-blog/2012/05/history-electronic-cigarette.html"
            },
            {
                name: "History of Electronic Cigarettes (Wikipedia)",
                link: "http://en.wikipedia.org/wiki/Electronic_cigarette#History"
            }
        ];


        $scope.eCigTypes = [
            {
                name: "Atomizer",
                image: "../images/atomizer.jpg",
                pros: ["Low cost", "Perfect for dipping - can switch between different e-liquid flavors very fast"],
                cons: ["Have to continuously refill", "Hard to see level of e-liquid inside"],
                description: "Atomizers are one of the original (first generation) devices. " + 
                "They have a fairly small capacity and are best for people who prefer dripping. "+ 
                "There are different design but majority of atomizers have a heating coil on the bottom with metal mesh or silica wick on top of the coil.",
                help: {
                    clean: ["https://www.youtube.com/watch?v=pXYil2ppWcc"]
                }
            },
            {
                name: "Cartomizer",
                image: "../images/cartomizer.jpg",
                pros: ["Low cost", "Holds more e-liquid", "Easy to rebuild"],
                cons: ["Not the best choice for continuous vaping", "May retain previous e-liquid flavor"],
                description: "In design cartomizers are similar to the atomizer. " + 
                "The difference is that cartomizers have polyfill wrapped around a heating coil. " + 
                "A polyfill soaks e-liquid and allows for longer vape time over atomizer. " + 
                "There are some designs of cartomizers that are housed inside a larger cylindrical tank that holds even larger capacity of e-liquid."
            },
            {
                name: "Clearomizer",
                image: "../images/clearomizer.jpg",
                pros: ["Longer life cycle", "Holds much more e-liquid"],
                cons: ["More expensive", "Retains previous e-liquid flavor", "May leak more (depending on manufacturer/model)"],
                description: "Clearomizers are one of the newest and most popular devices on the market. " +
                "These type of devices are usually cylindrical and feature a clear polycarbonate plastic or pyrex glass tank. " + 
                "A clear tank allows you to see the level of e-liquid inside of a clearomizer. " + 
                "E-liquid is delivered to the heating coil by ways of a silica wick. " + 
                "Some designs feature heating coil at the top with longer wicks, " + 
                "others have heating coil at the bottom with shorter wicks which allows for easier wick saturation of e-liquid.",
                help: {
                    clean: ["https://www.youtube.com/watch?v=kg7oA3o9EZE"]
                }
            }
        ];

        $scope.coilTypesDescription = [
            "All electronic cigarettes can come with one or more heating elements (coils). " +
            "Usually there is a single coil e-cigarettes and the dual coil e-cigarettes on the market. " +
            "It comes down to the personal preference which one you should choose. ",

            "Usually dual coil setup has same sized coils as a single setup, and so the battery drainage would highly increase. " +
            "But the amount/density of vapor produced will generally be higher than with the single coil setup. "
        ];

        $scope.coilTypes = [
            {
                name: "Single coil",
                pros: ["Lower power consumption (usually e-cig is run at lower wattage) - saves battery power from ~ 10% to 30%", "Lower e-liquid consumption (saves on e-liquid)", "Easier to DIY (if you ever need to build it yourself)"],
                cons: ["Lower amount/density of vapor", "Requires longer heating time (usually unnoticeable)"],
                images: [{source:"images/single_coil.jpg"},{source:"images/single_coil_2.jpg",name:"Single Coil Characteristics"}]
            },
            {
                name: "Dual coil",
                pros: ["Higher amount/density of vapor", "Shorter time needed to deliver same amount of e-liquid"],
                cons: ["Higher power consumption (depletes battery faster)", "Higher e-liquid consumption (more e-liquid gets vaporized since two coils heat up e-liquid)", "Harder to DIY (although easily available pre-built online)"],
                images: [{source:"images/dual_coil.jpg"},{source:"images/dual_coil_2.jpg",name:"Dual Coil Characteristics"}]
            }
        ];

        $scope.pageName = function() { return $location.path(); };

        $scope.openModal = function ($event, type, templateType) {
            var templateType = templateType == 'simple' ? 'templates/image-ecig-multiple-modal.html' : 'templates/image-modal.html';
            $scope.currentType = type;
            $modal({
                scope: $scope,
                contentTemplate: templateType,
                show: true
            });
        };
    })
    .controller("SnusController", function SnusController ($scope, $location, $modal) {
        
        $scope.pageName = function() { return $location.path(); };

        $scope.description = [
            "Snus is another alternative to smoking tobacco. " +
            "Snus is a moist powder tobacco that is placed under lip (mostly upper) for extended periods of time. " +
            "Unlike it's predecessors like snuff or dipping tobacco it does not require spitting. " +
            "On top of that it is believed to be safer than snuff or dipping. " +
            "Snus takes origin in 19th century Sweden when Swedish producers started manufacturing moist snuff that later became known as snus. " +
            "Moreover snus can be safely used in a lot of places where smoking is prohibited, such as airplanes."
        ];

        $scope.snusTypes = [
            {
                "name"          : "Scandinavian snus",
                "condition"     : "moist smokeless powder tobacco",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "mildly flavored. ex: smoke, bergamot, citrus, juniper berry, herbs, floral flavors",
                "images"        : [{"source":"images/snus_swedish_portioned.jpg", "name": "Portioned scandinavian snus (General brand)"}]
            },
            {
                "name"          : "American snus",
                "condition"     : "moist smokeless powder tobacco, lower pH level",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "often flavored. ex.: spearmint, wintergreen, vanilla, fruit (e.g. cherry)",
                "images"        : [{"source":"images/snus_american.jpg"}]
            },
            {
                "name"          : "Nasal snuff",
                "condition"     : "dry smokeless powder tobacco",
                "application"   : "insufflation (\"sniffed\", but not deeply \"snorted\") through the nose",
                "flavors"       : "often flavored. ex.: menthol or other scents",
                "images"        : [{"source":"images/nasal_snuff.jpg"}, {"source":"images/nasal_snuff_accessories.jpg", "name": "Nasal snuff accessories (snuff bullets)"}]
            },
            {
                "name"          : "Chewing tobacco",
                "condition"     : "tobacco in the form of loose leaf and stem strands or chopped leaves and stems compressed into blocks (\"plugs\") or finely ground pieces compressed into pellets",
                "application"   : "placed between cheek and gums or actively chewed",
                "flavors"       : "sometimes flavored. ex.: wintergreen, apple, cherry",
                "images"        : [{"source":"images/chewing_tobacco.jpg"},{"source":"images/spittoon.jpg", "name": "Spittoon (Mud jug)"}]
            },
            {
                "name"          : "Dipping tobacco",
                "condition"     : "moist smokeless finely ground (but less than snus) tobacco",
                "application"   : "placed between the lower lip or cheek and the gums (it is not used nasally); salivation is copious and usually spat out",
                "flavors"       : "usually flavored, although unflavored brands remain popular. ex.: wintergreen, mint",
                "accessories"   : "Spittoon (mud jug)",
                "images"        : [{"source":"images/dip_tobacco.jpg"},{"source":"images/spittoon.jpg", "name": "Spittoon (Mud jug)"}]
            },
            {
                "name"          : "Makla",
                "condition"     : "moist smokeless powder tobacco (very similar to Scandinavian snus, but more finely ground), higher nicotine content, higher pH level (~ above 10)",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "sometimes flavored. ex: menthol, coffee, chocolate-mint",
                "images"        : [{"source":"images/makla.jpg"}]
                // "brands"        : "Chema Makla, Makla Africaine (al Kantara, Platinum), Makla Ifrikia (Neffa), "
            },
            {
                "name"          : "Naswār",
                "condition"     : "moist smokeless powder tobacco, often green and sometimes caked with mineral lime and/or wood ash",
                "application"   : "used like dipping tobacco (placed between lip or cheek and the gums), or put under the tongue",
                "flavors"       : "usually heavily flavored. ex.: culinary oils (cardamom, sesame), the fruit, lime, menthol",
                "images"        : [{"source":"images/naswar2.jpg"}]
            }
        ];

        $scope.openModal = function ($event, type) {
            $scope.currentType = type;
            $modal({
                scope: $scope,
                contentTemplate: 'templates/image-snus-multiple-modal.html',
                show: true
            });
        };

    })
    .controller("QuitController", function QuitController ($scope, $location, $modal) {

        $scope.pageName = function() { return $location.path(); };

        $scope.description = [
            "Of course no one can guarantee the total safety of tobacco alternatives. " +
            "There will always be an ongoing controversy regarding the safety of any given nicotine-containing product. " +
            "And the best alternative to smoking is of course to get rid of nicotine dependency. ",

            "No one can deny that quitting smoking is hard. After all nicotine, as many other drugs, is a highly addictive substance. " +
            "But no one can say that it is impossible. Countless number of people have quit smoking before. ",

            "Many books and methods that help quitting smoking exist. " +
            "One of the most famous is the Allen Carr's \"The Easy Way to Stop Smoking\". " +
            "Allen Carr's method is known to be very successful and claims to help many famous people quit smoking, " +
            "including Anthony Hopkins, Ashton Kutcher, Pink, Richard Branson, Ellen DeGeneres, Jason Mraz, Charlotte Church and others.",

            ""
        ];

    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'templates/home.html',
                controller: 'MainController'
            })
            .when('/e-cigs', {
                templateUrl: 'templates/e-cigs.html',
                controller: 'ECigController'
            })
            .when('/snus', {
                templateUrl: 'templates/snus.html',
                controller: 'SnusController'
            })
            .when('/quit', {
                templateUrl: 'templates/quit.html',
                controller: 'QuitController'
            })
            ;

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    ;