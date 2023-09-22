export async function GET() {
  const res = await fetch(
    'https://raw.githubusercontent.com/BenjaminHinchliff/resume/main/resume.pdf'
  );
  // just send the body to avoid cors headers problems
  return new Response(res.body);
}
