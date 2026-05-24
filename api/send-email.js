export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      return res.status(500).json({ success: false, error: 'Resend API key is not configured on the server' });
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

    if (resendResponse.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(resendResponse.status).json({ success: false, error: data });
    }
  } catch (error) {
    console.error('Serverless API error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
