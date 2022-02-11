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
    beforeCreate(){
        console.log("VCA before create");
    },
    created(){
        console.log("VCA created");
    },
    beforeMount(){
        console.log("VCA before mount");
    },
    mounted(){
        console.log("VCA mounted");
    },
    updated(){
        console.log("VCA updated");
    },
    beforeUnmount(){
        console.log("VCA before unmount");
    },
    unmounted(){
        console.log("VCA unmounted");
    }
});	

VCA.component('test-box', {
    template: `
        <div class="test-box"></div>
    `,    // Hooks defined below
    beforeCreate(){
        console.log("COMP before create");
    },
    created(){
        console.log("COMP created");
    },
    beforeMount(){
        console.log("COMP before mount");
    },
    mounted(){
        console.log("COMP mounted");
    },
    updated(){
        console.log("COMP updated");
    }, 
    beforeUnmount(){ 
        console.log("COMP before unmount");
    }, 
    unmounted(){ 
        console.log("COMP unmounted");
    }
});