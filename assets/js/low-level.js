import { getCarouselItems, getIFrameUrl } from "./main_script.js";
import { DiagramModel, CarouselItem } from "./models.js";

document.addEventListener("DOMContentLoaded", function() {
    const sequenceDiagrams = [
        new CarouselItem(
            "Asistencia",
            "Marca la asistencia de los estudiantes al entrenamiento.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/asistance_sequence.drawio.xml',
                'asistance_sequence.drawio.xml'
            )
        ),
        new CarouselItem(
            "Pagos automatizados",
            "Especifica el proceso de pagos automatizados para los estudiantes.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/automated_sequence.drawio.xml',
                'automated_sequence.drawio.xml'
            )
        ),
        new CarouselItem(
            "Crear docente",
            "Muestra el proceso de creación de un docente en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/create_docent_sequence.xml',
                'create_docent_sequence.xml'
            )
        ),
        new CarouselItem(
            "Crear estudiante",
            "Muestra el proceso de creación de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/create_student_sequence.xml',
                'create_student_sequence.xml'
            )
        ),
        new CarouselItem(
            "Crear horario",
            "Muestra el proceso de creación de un horario en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/create_schedule_sequence.xml',
                'create_schedule_sequence.xml'
            )
        ),
        new CarouselItem(
            "Eliminar docente",
            "Muestra el proceso de eliminación de un docente en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/delete_docent_sequence.xml',
                'delete_docent_sequence.xml'
            )
        ),
        new CarouselItem(
            "Eliminar horario",
            "Muestra el proceso de eliminación de un horario en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/delete_schedule_sequence.xml',
                'delete_schedule_sequence.xml'
            )
        ),
        new CarouselItem(
            "Eliminar estudiante",
            "Muestra el proceso de eliminación de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/delete_student_sequence.xml',
                'delete_student_sequence.xml'
            )
        ),
        new CarouselItem(
            "Obtener docente",
            "Muestra el proceso de obtención de un docente en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/get_docent_sequence.xml',
                'get_docent_sequence.xml'
            )
        ),
        new CarouselItem(
            "Obtener horario",
            "Muestra el proceso de obtención de un horario en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/get_schedule_sequence.xml',
                'get_schedule_sequence.xml'
            )
        ),
        new CarouselItem(
            "Obtener estudiante",
            "Muestra el proceso de obtención de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/get_student_sequence.xml',
                'get_student_sequence.xml'
            )
        ),
        new CarouselItem(
            "Enviar notificación",
            "Muestra el proceso de envío de notificaciones a los usuarios.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/notification_sequence.xml',
                'notification_sequence.xml'
            )
        ),
        new CarouselItem(
            "Proceso de pago",
            "Muestra el proceso de pago de los estudiantes.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/payment_sequence.xml',
                'payment_sequence.xml'
            )
        ),
        new CarouselItem(
            "Obtener el progreso del estudiante",
            "Muestra el proceso de obtención del progreso de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/progress_student_sequence.xml',
                'progress_student_sequence.xml'
            )
        ),
        new CarouselItem(
            "Actualizar docente",
            "Muestra el proceso de actualización de un docente en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/update_docent_sequence.xml',
                'update_docent_sequence.xml'
            )
        ),
        new CarouselItem(
            "Actualizar horario",
            "Muestra el proceso de actualización de un horario en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/update_schedule_sequence.xml',
                'update_schedule_sequence.xml'
            )
        ),
        new CarouselItem(
            "Actualizar estudiante",
            "Muestra el proceso de actualización de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/abff28966b698802f01ed9849846e54f/raw/72d8347083c86856dfac37989d54ed5698be1504/update_student_sequence.xml',
                'update_student_sequence.xml'
            )
        ),

    ]
    
    getCarouselItems(sequenceDiagrams, "sequence");

    const useCaseDiagrams = [
        new CarouselItem(
            "General",
            "Muestra el diagrama de casos de uso general del sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/general_use_case.drawio.xml',
                'general_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Generar asistencia",
            "Muestra el diagrama de casos de uso para generar la asistencia de los estudiantes.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/generate_attendance_use_case.drawio.xml',
                'generate_attendance_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Notificación",
            "Muestra el diagrama de casos de uso para enviar notificaciones a los usuarios.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/generate_notificacion_use_case.drawio.xml',
                'generate_notificacion_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Inicio de sesión",
            "Muestra el diagrama de casos de uso para el inicio de sesión de los usuarios.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/login_use_case.drawio.xml',
                'login_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Flujo de pagos",
            "Muestra el diagrama de casos de uso para el flujo de pagos de los estudiantes.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/payment_use_case.drawio.xml',
                'payment_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Registrar horario",
            "Muestra el diagrama de casos de uso para registrar un horario en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/register_schedule_use_case.drawio.xml',
                'register_schedule_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Registrar estudiante",
            "Muestra el diagrama de casos de uso para registrar un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/register_student_use_case.drawio.xml',
                'register_student_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Registrar docente",
            "Muestra el diagrama de casos de uso para registrar un docente en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/register_teacher_use_case.drawio.xml',
                'register_teacher_use_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Registrar administrador",
            "Muestra el diagrama de casos de uso para registrar un administrador en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/register_user_case.drawio.xml',
                'register_user_case.drawio.xml'
            )
        ),
        new CarouselItem(
            "Obtener progreso del estudiante",
            "Muestra el diagrama de casos de uso para obtener el progreso de un estudiante en el sistema.",
            new DiagramModel(
                'https://gist.githubusercontent.com/DavidPedrazaG/ac4463852f2fa6da82dc159125b5ca19/raw/ba985d75de5b1433c7b72b2eee3792480cfb9d8d/student_progress_use_case.drawio.xml',
                'student_progress_use_case.drawio.xml'
            )
        ),
    ]

    getCarouselItems(useCaseDiagrams, "use-cases");

    // User interfaces

    
    for(let i = 1; i<=10; i++){
        const container = document.getElementById(`ui-inner`);
        const indicators = document.getElementById(`ui-indicators`);

        const indicator = `
            <button type="button" data-bs-target="#ui-carousel" data-bs-slide-to="${i-1}" ${i === 1 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${i+1}"></button>
        `
        indicators.innerHTML += indicator;

        const item = `
            <div class="carousel-item ${i === 1 ? 'active' : ''}">
                <img src="assets/docs/ui/${i}.png" class="d-block" alt="UI ${i}">
            </div>
        `
        container.innerHTML += item;
    }
});
