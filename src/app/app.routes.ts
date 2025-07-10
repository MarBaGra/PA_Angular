import { Routes } from '@angular/router';
import { Exercise3Component } from './components/exercise3/exercise3.component';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { MTimeGuard } from './components/exercise2/m-time.guard';
import { Exercise2Component } from './components/exercise2/exercise2.component';

export const routes: Routes = [

    {
        path: '1',
        component: Exercise1Component
    },
    {
        path: '2',
        redirectTo: '/zona-restringida'
    },
    {
        path: '3',
        component: Exercise3Component
    },
    {
        path: '4',
        component: Exercise3Component,
        canActivate: [MTimeGuard],
        data:{
            startTime: '8:00',
            endTime: '18:00',
            redirectTo: '/acceso-denegado',
            message: 'Esta zona solo está disponible en el horario establecido',
            strict: true
        }
    },
    {
    path: 'zona-restringida',
    component: Exercise1Component,
    canActivate: [MTimeGuard],
    data: {
      startTime: '22:00',
      endTime: '06:00',
      redirectTo: '/acceso-denegado',
      message: 'Esta zona solo está disponible en horario nocturno',
      strict: true
    }
    },
    {
        path: 'acceso-denegado',
        component: Exercise2Component
    }

];
