
## APP FRONTEND PARA EL CRM DE EMPLEADOS
API -> https://crm-empleados.onrender.com/api/empleados

PERMITE TODOS LOS VERBOS

 - Entidades: USUARIOS, EMPLEADOS (interfaces, services)

 Componentes page:
 
 ------Publicas
 - HOME =>      /home       => HomeComponent - Hero bienvenida - menu con login y register 
 - LOGIN =>     /login      => LoginComponent - Formulario de login/template
 - REGISTRO =>  /register   => RegisterComponent - Formulario tipo model

 ------Privadas (Protegidas por contraseña)
 - DASHBOARD =>  /dasboard   => DashboardComponent 
    *Rutas Hijas:
    - Lista empleados
    - Crear empleados
    - Actualizar empleados
    - Borrar empleados (Es un evento, no es ruta)

Shared:
    -NavDashboard va a ser el header de la parte privada

Services:
    -Employee
    -Users

Interfaces
    -IEmployee
    -IUsers
