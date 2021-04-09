import { Options, Vue } from "vue-class-component";

@Options({
  name:"user",
  components:{
  }
})
export class User extends Vue {
  render(h){
      return ( <div >test12</div> )
  }
}
