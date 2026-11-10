/** Demo-only persistence. A successful write must precede UI updates. */
export function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const value = JSON.parse(raw);
    if (Array.isArray(fallback) && !Array.isArray(value)) return fallback;
    return value as T;
  } catch {
    return fallback;
  }
}

export function save(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    window.alert('Não foi possível salvar. O armazenamento pode estar cheio ou bloqueado. Reduza o tamanho das fotos e tente novamente.');
    return false;
  }
}
