import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom Vite plugin to handle secure local email proxying during npm run dev
function localEmailPlugin(resendKey) {
  return {
    name: 'local-email-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { name, email, message } = JSON.parse(body);
              
              if (!resendKey) {
                throw new Error('Resend API key is not configured in .env');
              }
              
              const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${resendKey}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  from: 'onboarding@resend.dev',
                  to: 'asalhimsanda@gmail.com',
                  subject: `New Portfolio Message from ${name}`,
                  html: `<p><strong>Name:</strong> ${name}</p>
                         <p><strong>Email:</strong> ${email}</p>
                         <p><strong>Message:</strong> ${message}</p>`
                })
              });
              
              const data = await resendResponse.json();
              res.writeHead(resendResponse.status, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(data));
            } catch (error) {
              console.error('Vite local proxy error:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
          return;
        }
        next();
      });
    }
  }
}

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all envs regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const resendKey = env.RESEND_API_KEY;
  
  return {
    base: process.env.VITE_BASE || '/',
    plugins: [react(), tailwindcss(), localEmailPlugin(resendKey)],
  };
})
