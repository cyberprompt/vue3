const VCA = Vue.createApp({					// "options object"
    data: ()=> {							// data is a FUNCTION which RETURNS an OBJECT
        return{
            isVisible: false
        }									// end return data 
    },										// end data
    methods: {								// methods object holds any functions you want to use
        toggleBox: function(){
            this.isVisible = !this.isVisible
        }
    },                                      // end methods object			 
    mounted: function(){
        this.$nextTick(()=>{
            // code to only run on complete view render
        });
    }
});	

VCA.component('test-box', {
    template: `
        <div class="test-box"></div>
    `
});