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

VCA.component("login-form", {       // give name of tag and options
                                    // template required for form HTML
    template: `                      
        <form @submit.prevent="handleSubmit">
            <h1>{{title}}</h1>
            <input type="email" placeholder="email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <button>Submit</button>
        </form>
    `,
    data(){
        return{
            title: "Login Form",     // any data here is used in the template
            email: "",
            password: ""
        }
    },
    methods: {
        handleSubmit(){
            alert(`submitted: ${this.email} ${this.password}` );
        }
    }
});
