class Github {
  constructor() {
    this.client_id = "30e15e468c61e56dd3a9";
    this.client_secret = "d8019fb3b18eaceb34cf69ce47f00342d911bc1c";
    this.repos_count = 10;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoRes = await fetch(`
    https://api.github.com/users/${user}/repos?per_page=${this.client_id}&sort=created:asc&client_id=${this.client_id}&client_secret=${this.client_secret}
    `)

    const profile = await profileRes.json(); 
    const repos = await repoRes.json(); 

    return {
        profile,
        repos
    }
  }
}