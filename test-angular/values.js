(function(){
    angular.module('todoApp').value('value1',{
        version1 : '1.0.1',
        version2 : '1.0.2'
    });
    angular.module('todoApp').constant('value2',{
        appName1 : 'TODO APP',
        appName2 : 'MARKET LIST'
    });
}());