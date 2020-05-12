class GitHub{
    constructor(){
        this.client_id = '41940068120ee5cd6050';
        this.client_secret = '64e4772173ac0fc20b67b48966cd278617566b5f';
    }

    async getUser(user){
        const profileResponse = await fetch(`hhtp://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}