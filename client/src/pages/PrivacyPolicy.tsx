import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <article className="max-w-3xl mx-auto prose-policy">
          <header className="mb-12">
            <p className="text-xs tracking-widest text-gold uppercase mb-3">
              Información legal
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted-foreground">
              Última actualización: 30 de mayo de 2026
            </p>
          </header>

          <Section title="1. Responsable del tratamiento">
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley
              Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPDGDD), se
              informa de que el responsable del tratamiento de los datos
              recabados a través de este sitio web es:
            </p>
            <ul>
              <li>
                <strong>Titular:</strong> Hector Díaz González
              </li>
              <li>
                <strong>Domicilio:</strong> Calle Creu dels Molers 39, 08004
                Barcelona, España
              </li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:admin@beautybooster.app">
                  admin@beautybooster.app
                </a>
              </li>
            </ul>
            <p>
              En adelante, "BeautyBooster" o "el Responsable".
            </p>
          </Section>

          <Section title="2. Datos que recopilamos">
            <p>
              Tratamos únicamente los datos personales que nos facilitas de
              forma voluntaria, principalmente a través de los formularios de
              contacto y solicitud de información de la web. Estos datos pueden
              incluir:
            </p>
            <ul>
              <li>Nombre y apellidos.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>
                Nombre del negocio o centro de belleza y cualquier información
                que incluyas en el mensaje.
              </li>
              <li>
                Datos de navegación y técnicos (dirección IP, tipo de
                dispositivo y navegador) recogidos de forma automática.
              </li>
            </ul>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Los datos personales se utilizan para las siguientes finalidades:</p>
            <ul>
              <li>
                Atender tus consultas y gestionar las solicitudes de información
                o presupuesto.
              </li>
              <li>
                Ponernos en contacto contigo en relación con nuestros servicios
                de sistemas de citas y posicionamiento en Google Maps.
              </li>
              <li>
                Enviarte comunicaciones comerciales sobre nuestros servicios,
                siempre que hayas dado tu consentimiento.
              </li>
              <li>
                Mantener y mejorar el funcionamiento y la seguridad del sitio
                web.
              </li>
            </ul>
          </Section>

          <Section title="4. Legitimación">
            <p>La base legal para el tratamiento de tus datos es:</p>
            <ul>
              <li>
                <strong>Tu consentimiento</strong>, otorgado al enviar los
                formularios o solicitar información.
              </li>
              <li>
                <strong>El interés legítimo</strong> del Responsable en
                responder a tus consultas y mejorar sus servicios.
              </li>
              <li>
                <strong>La ejecución de una relación precontractual o
                contractual</strong>, cuando solicitas un presupuesto o
                contratas nuestros servicios.
              </li>
            </ul>
          </Section>

          <Section title="5. Conservación de los datos">
            <p>
              Conservaremos tus datos personales mientras se mantenga la
              relación con nosotros o no solicites su supresión, y, en todo
              caso, durante los plazos legalmente exigidos para atender posibles
              responsabilidades derivadas del tratamiento.
            </p>
          </Section>

          <Section title="6. Destinatarios y cesiones">
            <p>
              Tus datos no se cederán a terceros, salvo obligación legal. Podrán
              tener acceso a ellos los proveedores de servicios tecnológicos
              (alojamiento web, herramientas de correo y analítica) que actúan
              como encargados del tratamiento, con los que se han suscrito los
              correspondientes contratos de confidencialidad y tratamiento de
              datos.
            </p>
          </Section>

          <Section title="7. Tus derechos">
            <p>
              Puedes ejercer en cualquier momento los siguientes derechos
              dirigiéndote a{" "}
              <a href="mailto:admin@beautybooster.app">
                admin@beautybooster.app
              </a>
              , indicando el derecho que deseas ejercer y adjuntando copia de un
              documento que acredite tu identidad:
            </p>
            <ul>
              <li>Acceso a tus datos personales.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión de los datos ("derecho al olvido").</li>
              <li>Limitación del tratamiento.</li>
              <li>Oposición al tratamiento.</li>
              <li>Portabilidad de los datos.</li>
            </ul>
            <p>
              Asimismo, si consideras que el tratamiento de tus datos no se
              ajusta a la normativa, tienes derecho a presentar una reclamación
              ante la Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para su
              funcionamiento, así como cookies analíticas para conocer el uso
              que haces de la web. Puedes configurar tu navegador para impedir o
              eliminar las cookies de tu disco duro en cualquier momento.
            </p>
          </Section>

          <Section title="9. Seguridad">
            <p>
              El Responsable adopta las medidas técnicas y organizativas
              necesarias para garantizar la seguridad de los datos personales y
              evitar su alteración, pérdida, tratamiento o acceso no autorizado,
              teniendo en cuenta el estado de la tecnología.
            </p>
          </Section>

          <Section title="10. Cambios en la política de privacidad">
            <p>
              El Responsable se reserva el derecho a modificar la presente
              política de privacidad para adaptarla a novedades legislativas o
              jurisprudenciales. En dichos supuestos, se anunciarán en esta
              página los cambios introducidos con razonable antelación a su puesta
              en práctica.
            </p>
          </Section>
        </article>
      </div>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
