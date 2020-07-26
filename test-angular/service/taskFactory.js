(function(){
    var taskFactory = function(){
        var tasks = [{SrNo : 1, Task : 'Sleeping', Status : 'Done'},
                        {SrNo : 2, Task : 'Eating', Status : 'Not Done'},
                        {SrNo : 3, Task : 'Playing', Status : 'Done'}];
        
        var marketlist = [{fruit: 'banana',price:'20'},
                             {fruit:'mango',price:'30'},
                             {fruit: 'apple',price:'200'},
                             {fruit:'peach',price:'330'}];
        
        var factory = {};
        factory.getTasks = function(){
            return tasks;
        };
        
        factory.getLists = function(){
            return marketlist;  
        };
        
        return factory;
    };
    
    angular.module('todoApp').factory('taskFactory',taskFactory)
    
}());