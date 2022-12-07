// Add heart
const div_right = document.querySelector('#menu-bar > div.right-buttons')
const sponsor_html = '<a href="https://patreon.com/gist_rs" title="Sponsor" aria-label="Sponsor" target="_blank" rel="noopener"><i id="sponsor-button" class="fa fa-heart fa-beat beat-fade"></i></a>'
div_right.innerHTML = sponsor_html + div_right.innerHTML

const get_balance = async (pubkey, options) =>
  new Promise(async (resolve, reject) => {
    const { rpc_url, id, maximumFractionDigits } = {
      id: parseInt(100 * Math.random()),
      maximumFractionDigits: 2,
      ...options
    }

    const result = await fetch(rpc_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id,
        method: 'getBalance',
        params: [pubkey]
      })
    }).catch(reject)

    const json = await result?.json().catch(reject)

    if (isNaN(json?.result?.value)) {
      reject(new Error('No result.'))
    }

    resolve(
      (json?.result?.value / Math.pow(10, 9) || 0).toLocaleString('en-US', {
        maximumFractionDigits
      })
    )
  })

get_balance('gistmeAhMG7AcKSPCHis8JikGmKT9tRRyZpyMLNNULq', {
  rpc_url: 'https://rpc.ankr.com/solana'
})
  .then((lamports) => {
    const sponsor_html = `<a href="https://patreon.com/gist_rs" title="Sponsor" aria-label="Sponsor" target="_blank" rel="noopener"><pre class="balance">◎ ${lamports}</pre></a>`
    div_right.innerHTML = sponsor_html + div_right.innerHTML
  })
  .catch(console.error)