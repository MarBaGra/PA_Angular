import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function isInRange(start: number, end: number, now: number): boolean {
  return start <= end
    ? now >= start && now <= end
    : now >= start || now <= end; // cruza medianoche
}

export const MTimeGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const data = route.data;

  const startTime = parseTimeToMinutes(data['startTime'] || '00:00');
  const endTime = parseTimeToMinutes(data['endTime'] || '23:59');
  const redirectTo = data['redirectTo'] || '/fuera-de-horario';
  const message = data['message'] || 'Acceso fuera del horario permitido';
  const strict = data['strict'] ?? true;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const accesoPermitido = isInRange(startTime, endTime, currentMinutes);

  if (accesoPermitido) {
    return true;
  }

  if (!strict) {
    console.warn(`[MTimeGuard] ${message} → Modo flexible`);
    return true;
  }

  console.warn(`[MTimeGuard] ${message} → Redirigiendo a ${redirectTo}`);
  return router.createUrlTree([redirectTo]);
};
