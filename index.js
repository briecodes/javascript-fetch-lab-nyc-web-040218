const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  $('#results').append(json.template())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  
    fetch(`${baseApi}repos/${repo}/forks`, {
      method: 'post',
      headers: {
        'Authorization': `token ${getToken()}`
      }
    }).then(resp => {
      let repo = new Repo(resp);
      showResults(repo);
    })

  // fetch(`https://api.github.com/repos/${userName}/${repo}/forks`, {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `token ${getToken()}`
  //   }
  // })
  // .then( res => res.json() )
  // .then(resp => {
  //     let repo = resp.url;
  //     showResults(repo)
  // .then( response => console.log(response) );

  // fetch(`https://api.github.com/repos/${userName}/${repo}/forks`, {
  //   method: 'post',
  //   headers: {
  //     'Authorization': `token ${getToken()}`
  //   }
  // }).then(resp => {
  //   let repo = resp.url;
  //   showResults(repo);
  // });
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}