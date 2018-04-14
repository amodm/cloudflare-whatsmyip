addEventListener('fetch', event => {
  const req = event.request;
  const ip = req.headers.get('CF-Connecting-IP');
  const country = req.headers.get('CF-IPCountry');

  if (req.url.endsWith('/json')) {
    const content = JSON.stringify({ ip, country }, null, 2);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8', 'Cache-Control': 'no-cache' });
    event.respondWith(new Response(`${content}\n`, { headers }));
  } else {
    const headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8', 'Cache-Control': 'no-cache' });
    event.respondWith(new Response(`${ip}\n`));
  }
})

