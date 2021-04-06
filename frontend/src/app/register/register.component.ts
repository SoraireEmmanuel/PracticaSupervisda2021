import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewTermsandConditions() {
    Swal.fire({
      title: 'Terminos y Condiciones',
      html:'<p>3. Los permisos que nos concedes <br> Para proporcionar nuestros servicios, necesitamos que nos concedas determinados permisos:<br> Permiso para usar contenido que creas y compartes. Es posible que cierto contenido que compartas o subas, como fotos o videos, esté protegido por leyes de propiedad intelectual. Eres el propietario de los derechos de propiedad intelectual (como derechos de autor o marcas comerciales) de todo el contenido que crees y compartas en Facebook y en los demás Productos de las empresas de Facebook que uses. Ninguna disposición en estas Condiciones anula los derechos que tienes sobre tu propio contenido. Puedes compartir libremente tu contenido con quien quieras y donde quieras. <br> Sin embargo, para proporcionar nuestros servicios, debes concedernos algunos permisos legales (conocidos como "licencias") para usar este contenido. Esto es exclusivamente para proporcionar y mejorar nuestros Productos y servicios, como se describe en la sección 1 anterior.<br> En concreto, cuando compartes, publicas o subes contenido que se encuentra protegido por derechos de propiedad intelectual en nuestros Productos, o en relación con ellos, nos otorgas una licencia internacional, libre de regalías, sublicenciable, transferible y no exclusiva para alojar, usar, distribuir, modificar, publicar, copiar, mostrar o exhibir públicamente y traducir tu contenido, así como para crear trabajos derivados de él (de conformidad con tu configuración de privacidad y de la app). En otras palabras, si compartes una foto en Facebook, nos concedes permiso para almacenarla, copiarla y compartirla con otros (por supuesto, de acuerdo con tu configuración), como proveedores de servicios que usan nuestros servicios u otros Productos de Facebook que usas. Esta licencia caduca cuando tu contenido se elimina de nuestros sistemas.</p>',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  sendRegister(){
    Swal.fire({
      icon: 'success',
      title: 'Se Registro Exitosamente'

    }
    )
    this.router.navigate(['home'])
  }
}
