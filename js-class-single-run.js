// SINGLE RUN MODE
new (function(){
    
    var access = {
        methods : null,
        foo     : 'bar',
    }; 

    return ({
        constructor: function(){
            access.methods = this;
            
            access.methods.edi();
            access.methods.wow();
        },
        
        edi: function(){
            access.methods.wow('foo ');
        },

        wow: function(msg=''){
            console.log(msg + access.foo);
        },
    }).constructor();  
});











