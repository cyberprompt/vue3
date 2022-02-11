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
                                    // loop through input array  
    template: `                      
        <form @submit.prevent="handleSubmit">
            <h1>{{title}}</h1>
            <custom-input v-for="(input,idx) in inputs"               
                v-model="input.value"               
                :key="idx" 
                :label="input.label" 
                :type="input.type" 
            />
            <button>Submit</button>
        </form>
    `,                               // note: v-model exposes modelValue for use in getter/setter functions
    components: ['custom-input'],
    data(){
        return{
            title: "Login Form",     // any data here is used in the template
            inputs: [
                {
                    label: "Email",
                    value: "",
                    type: "email"
                },
                {
                    label: "Password",
                    value: "",
                    type: "password"
                }                
            ]
        }
    },
    methods: {
        handleSubmit(){
            alert(`submitted: ${this.inputs[0].value} ${this.inputs[1].value}` );
        }
    }
});



VCA.component("custom-input", {
    template: `
        <label>
            {{label}}
            <input :type="type" v-model="inputValue" />
        </label>        
    `,
    props: [                                // define any values passed from parent (form) object
        "label",
        "type",
        "modelValue"                        // modelValue is available when using v-model
    ],           
    computed: {                              // allows variable names to be used as keys with get and set methods
        inputValue:{
            get(){
                return this.modelValue      // retrieves parent data for this component (initially blank)
            },
            set(value){
                this.$emit("update:modelValue", value); // exposes events on child for parent to update data (value)
            }
        }
    },
    data(){
        return{
            // nothing set
        }
    }
});
