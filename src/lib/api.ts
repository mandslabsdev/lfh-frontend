/**
 * Cliente mínimo para la API REST del backend.
 * En el servidor (SSR) usa API_URL (red interna); en el navegador, NEXT_PUBLIC_API_URL.
 */
const baseUrl =
  typeof window === "undefined"
    ? (process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080")
    : (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080");

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    throw new Error(`API ${res.status} en ${path}`);
  }
  return res.json() as Promise<T>;
}
