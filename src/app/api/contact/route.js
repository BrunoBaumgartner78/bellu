// app/api/contact/route.js
export async function POST(req) {
  const body = await req.json();
  const { name, email, message, captcha } = body;

  if (!captcha) {
    return new Response(JSON.stringify({ message: 'Captcha fehlt.' }), {
      status: 400,
    });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  const captchaRes = await fetch(verifyURL, { method: 'POST' });
  const captchaJson = await captchaRes.json();

  if (!captchaJson.success) {
    return new Response(JSON.stringify({ message: 'Captcha-Verifizierung fehlgeschlagen.' }), {
      status: 403,
    });
  }

  console.log('Neue Nachricht:', name, email, message);

  return new Response(JSON.stringify({ message: 'Erfolg' }), {
    status: 200,
  });
}
