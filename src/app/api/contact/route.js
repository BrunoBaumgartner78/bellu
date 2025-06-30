export async function POST(req) {
  const body = await req.json();
  const { name, email, message, captcha } = body;

  if (!captcha) {
    return new Response(JSON.stringify({ message: 'Captcha fehlt.' }), {
      status: 400,
    });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

  const res = await fetch(verifyURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${captcha}`,
  });

  const data = await res.json();

  if (!data.success || data.score < 0.5) {
    return new Response(JSON.stringify({ message: 'Captcha-Verifizierung fehlgeschlagen.' }), {
      status: 403,
    });
  }

  console.log('Neue Nachricht:', name, email, message);

  return new Response(JSON.stringify({ message: 'Erfolg' }), {
    status: 200,
  });
}
