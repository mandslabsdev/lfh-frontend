// Health check para el balanceador (ALB).
export function GET() {
  return Response.json({ status: "ok", service: "lfh-frontend" });
}
