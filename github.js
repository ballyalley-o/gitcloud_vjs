class Github {
  constructor() {
    this.client_id = "30e15e468c61e56dd3a9";
    this.client_secret = "d8019fb3b18eaceb34cf69ce47f00342d911bc1c";
  }

  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileRes.json(); 

    return {
        profile
    }
  }
}