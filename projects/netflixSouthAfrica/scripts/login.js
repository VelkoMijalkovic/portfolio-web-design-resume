const app = Vue.createApp({
    data() {
      return {
        email : '',
        password: '',
        isDisabled: false,
        
        

       //check for admin admin to access
      }
    },
    methods: {
     
    },
    computed: {
      check : function(){
        if ((this.email === 'admin@admin') && (this.password === 'admin')){
         return this.isDisabled = true;
          } 
      }
    }
    
  })