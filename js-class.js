var JSClass = new (function(){
    
    var access = {
        methods : null,
        foo     : 'bar',
    }; 

    return ({
        export: {
            access: access,
        },

        constructor: function(){
            access.methods = this;

            return access.methods;
        },
        
        edi: function(){
            access.methods.wow('foo ');
        },

        wow: function(msg=''){
            console.log(msg + access.foo);
        },
    }).constructor();  
});

JSClass.export.access.methods.edi();
JSClass.export.access.methods.wow();










