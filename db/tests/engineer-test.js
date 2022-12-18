class engineer{
    constructor(githubusername){
        this.githubusername=githubusername
    }

    get githubusername(){
        return this.githubusername
    }

    get role(){
        return"engineer"
    }
}
module.exports=engineer
