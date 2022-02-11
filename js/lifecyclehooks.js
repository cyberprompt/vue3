const VCA = Vue.createApp({					// "options object"
    data: ()=> {							// data is a FUNCTION which RETURNS an OBJECT
        return{

        }									// end return data 
    },										// end data
    methods: {								// methods object holds any functions you want to use


    },                                      // end methods object			 
    mounted: function(){
        this.$nextTick(()=>{
            // code to only run on complete view render
        });
    }
});	