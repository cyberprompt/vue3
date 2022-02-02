const VCA = Vue.createApp({					// "options object"
    data: ()=> {							// data is a FUNCTION which RETURNS an OBJECT
        return{
            greeting: "Hello Vue 3!",		// object variable declarations
            confirm: "Great Job!",
            input1: "type to change",
            exists: true,
            important: true,
            show: true
        }									// end return data 
    },										// end data
    methods: {								// methods object holds any functions you want to use
        customFunction: function(){
                        alert("customFunction: function()");
                        },					// end customFunction
        otherFunction(){					// note functions can be anon labeled or condensed like this
            alert("another way of writing a function")
        },
        showEnter(){
            alert(this.confirm + " you pressed enter on the field.");   // "this" is used because we are using the value in data
        },
        showPassedVal(val){
            alert("passed value is: " + val);   // "this" is not used since we are using the passed value instead
        }

    },                                      // end methods object			 
    mounted: function(){
        this.$nextTick(()=>{
            // code to only run on complete view render
        });
    }
});	
